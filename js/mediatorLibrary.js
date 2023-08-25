import {ajaxRequests} from './ajaxRequests.js';

let promiseDataByRender = ajaxRequests.sendRequestForModelSite('GET', ajaxRequests.requestUrlForBlog)
  .then(data => {
    let dataForMedia_DiretorAndMovies = [];
    data.results.forEach((movie) => {
      ajaxRequests.sendRequestForModelSite('GET', `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`)
        .then(workerByMovie => {
          let directorJob = 'Director';
          let directorName = workerByMovie.crew.find(crew => crew.job === directorJob).name;
          let directorID = workerByMovie.crew.find(crew => crew.job === directorJob).id;
          ajaxRequests.sendRequestForModelSite('GET', `https://api.themoviedb.org/3/person/${directorID}/movie_credits?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`)
            .then(allMoviesByDirector => {
              let dataByMediaOfNameAndMovies = {[directorName]: allMoviesByDirector.crew};
              dataForMedia_DiretorAndMovies.push(dataByMediaOfNameAndMovies);
            });
        });
    });
    return dataForMedia_DiretorAndMovies;
  })
  .then((dataForMedia_DiretorAndMovies) => {
    return new Promise(resolve => {
      setTimeout(() => {
        let sortData = dataForMedia_DiretorAndMovies.sort((a, b) => Object.values(b)[0].length - Object.values(a)[0].length);
        resolve(sortData);
      }, 1200);
    });
  });
promiseDataByRender.then(sortLibraryDirectorMovie => {
  let author1 = Object.keys(sortLibraryDirectorMovie[0])[0];
  let author2 = Object.keys(sortLibraryDirectorMovie[1])[0];
  let author3 = Object.keys(sortLibraryDirectorMovie[2])[0];
  let moviesByAuthor1 = Object.values(sortLibraryDirectorMovie[0])[0];
  let moviesByAuthor2 = Object.values(sortLibraryDirectorMovie[1])[0];
  let moviesByAuthor3 = Object.values(sortLibraryDirectorMovie[2])[0];
  let authorsButton = document.querySelectorAll('.media-aside__dropdown-btn');
  let authorNameForBtn1 = document.createTextNode(author1);
  let authorNameForBtn2 = document.createTextNode(author2);
  let authorNameForBtn3 = document.createTextNode(author3);
  let authorNameForBtn4 = document.createTextNode(author1);
  let authorNameForBtn5 = document.createTextNode(author2);
  let authorNameForBtn6 = document.createTextNode(author3);
  authorsButton[0].append(authorNameForBtn1);
  authorsButton[1].append(authorNameForBtn2);
  authorsButton[2].append(authorNameForBtn3);
  authorsButton[3].append(authorNameForBtn4);
  authorsButton[4].append(authorNameForBtn5);
  authorsButton[5].append(authorNameForBtn6);
  let customEventOpenMovies = new CustomEvent('openMovies', {
    detail: {
      showBlockWithMovies: function(e) {
        let arrow = e.target.children[0];
        let dropdownContent = this.nextElementSibling;
        let authorForRender;
        switch (this.classList[1]) {
          case 'btn-1':
            authorForRender = moviesByAuthor1;
            break;
          case 'btn-2':
            authorForRender = moviesByAuthor2;
            break;
          case 'btn-3':
            authorForRender = moviesByAuthor3;
            break;
        }
        if (dropdownContent.children.length < authorForRender.length) {
          authorForRender.forEach(movie => {
            let link = document.createElement('a');
            link.innerText = movie.title;
            dropdownContent.append(link);
          });
        }

        function getNumClickedLink(el) {
          let i = 0;
          while (el = el.previousSibling) {
            el.nodeType === 1 && i++;
          }
          return i;
        }

        function showContent(event) {
          let link = event.target;
          let ff = this.children;
          for (let l of ff) {
            let g = window.getComputedStyle(l).color;
            if (g === 'rgb(255, 255, 255)' && g !== link) {
              l.style.color = '';
            }
          }
          link.style.color = 'white';
          let indexMovie = getNumClickedLink(event.target);
          let posterContainer = document.querySelector('.media-content__window');
          let textContainer = document.querySelector('.media-content__window__text');
          while (posterContainer.firstChild) {
            posterContainer.removeChild(posterContainer.firstChild);
          }
          while (textContainer.firstChild) {
            textContainer.removeChild(textContainer.firstChild);
          }
          let titlePoster = document.createElement('h3');
          titlePoster.innerText = 'Sorry, we don\'t have any poster for this movie :( \n But we have a overview:';
          titlePoster.style.margin = '15px';
          let posterOverview = document.createElement('p');
          posterOverview.innerText = authorForRender[indexMovie].overview;
          posterOverview.className = 'posterOverviewWithImg';
          let posterImage = document.createElement('IMG');
          posterImage.src = `https://image.tmdb.org/t/p/w500/${authorForRender[indexMovie].poster_path}`;
          posterImage.style.height = '100%';
          posterImage.style.width = '100%';
          if (authorForRender[indexMovie].poster_path !== null) {
            posterContainer.append(posterImage);
            textContainer.append(posterOverview);
          } else {
            posterOverview.className = 'posterOverviewWithoutImg';
            posterContainer.append(titlePoster);
            posterContainer.append(posterOverview);
          }
        }

        let dropContainers = document.querySelectorAll('.drop-container');
        let arrows = document.querySelectorAll('.media-aside__arrow');
        dropContainers.forEach(d => {
          if (d.children.length !== 0) {
            d.style.display = 'none';
            dropdownContent.removeEventListener('mousedown', showContent);
          }
        });
        authorsButton.forEach(b => {
          if (b.classList.contains('active')) {
            b.classList.remove('active');
          }
        });
        arrows.forEach(a => {
          a.style.transform = 'rotate(360deg)';
          a.style.transition = '.5s';
        });
        setTimeout(() => {
          this.classList.toggle('active');
          dropdownContent.style.display = 'flex';
          arrow.style.transform = 'rotate(180deg)';
          arrow.style.transition = '.5s';
          if (dropdownContent.classList[0] === 'media-nav__dropdown-container') {
            startAnimation(dropdownContent, 'width');
          } else if (dropdownContent.classList[0] === 'media-aside__dropdown-container') {
            startAnimation(dropdownContent, 'height');
          }
          dropdownContent.addEventListener('mousedown', showContent);
        }, 0);

        function animate({duration, drawHeight, drawWidth, timing, whatStyle}) {
          let start = performance.now();
          requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
            let progress = timing(timeFraction);
            if (whatStyle === 'height') {
              drawHeight(progress);
            } else if (whatStyle === 'width') {
              drawWidth(progress);
            }
            if (timeFraction < 1) {
              requestAnimationFrame(animate);
            }
          });
        }

        function startAnimation(elem, whatStyle) {
          animate({
            duration: 1000,
            whatStyle: whatStyle,
            timing: function(timeFraction) {
              return timeFraction;
            },
            drawHeight: function(progress) {
              elem.style.height = progress * 76 + '%';
            },
            drawWidth: function(progress) {
              elem.style.width = progress * 100 + '%';
            },
          });
        }
      },
    },
  });
  authorsButton.forEach(btn => {
    btn.addEventListener('openMovies', customEventOpenMovies.detail.showBlockWithMovies);
  });

  class Button {
    constructor(btnName) {
      this.btnName = btnName;
      this.room = null;
    };

    send(to) {
      this.room.send(this, to);
    };

    receive(from, to) {
      from.btnName.addEventListener('click', function(e) {
        from.btnName.dispatchEvent(customEventOpenMovies);
        to.btnName.dispatchEvent(customEventOpenMovies);
      });
    };
  }

  class RoomSpeakButton {
    constructor() {
      this.buttons = {};
    };

    register(btn) {
      this.buttons[btn.btnName] = btn;
      btn.room = this;
    };

    send(from, to) {
      if (to) {
        to.receive(from, to);
      } else {
        Object.keys(this.buttons).forEach(key => {
          if (this.buttons[key] !== from) {
            this.buttons[key].receive(from, to);
          }
        });
      }
    };
  }

  const btn1 = new Button(authorsButton[0]);
  const btn2 = new Button(authorsButton[1]);
  const btn3 = new Button(authorsButton[2]);
  const btn4 = new Button(authorsButton[3]);
  const btn5 = new Button(authorsButton[4]);
  const btn6 = new Button(authorsButton[5]);
  const room = new RoomSpeakButton();
  room.register(btn1);
  room.register(btn2);
  room.register(btn3);
  room.register(btn4);
  room.register(btn5);
  room.register(btn6);
  btn1.send(btn4);
  btn4.send(btn1);
  btn2.send(btn5);
  btn5.send(btn2);
  btn3.send(btn6);
  btn6.send(btn3);
  let verticalScroll = document.querySelectorAll('.media-nav__dropdown-container');
  let modifier;
  verticalScroll.forEach(el => {
    el.addEventListener('wheel', function(event) {
      if (event.deltaMode === event.DOM_DELTA_PIXEL) {
        modifier = 1;
      } else if (event.deltaMode === event.DOM_DELTA_LINE) {
        modifier = parseInt(getComputedStyle(this).lineHeight);
      } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
        modifier = this.clientHeight;
      }
      if (event.deltaY !== 0) {
        this.scrollLeft += modifier * event.deltaY;
        event.preventDefault();
      }
    });
  });
});
