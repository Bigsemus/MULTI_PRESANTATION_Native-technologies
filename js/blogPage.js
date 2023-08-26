import { ajaxRequests } from './ajaxRequests.js';
import { promiseByHomePage } from './homePage.js';
import { isDeletedPost } from "./helpers/isDeletedPost.js";
import { setEventForDeletePost } from "./helpers/deletePost.js";
import { getValueByLocalStorage } from "./helpers/getterDataForRanderPosts.js";

export const promiseBlog = promiseByHomePage.then(() => {
  let offset = 0;
  let offset2;
  let offset3 = 0;
  let res2

  function f() {
    return new Promise(resolve => {
      ajaxRequests.sendRequestForModelSite('GET', getValueByLocalStorage())
        .then(result => {
          let res;
          if (result.results[0].original_title === 'UNdefined') {
            resolve(1);
          } else {
            res2 = result.results.length;
            switch (result.results.length) {
              case 2:
                res = result.results.length;
                break;
              case 3:
                res = result.results.length + 2;
                break;
              default :
                res = result.results.length;
            }
            resolve(res);
          }
        });
    });
  }


  class Component {
    constructor(func) {
      this.$blog = document.querySelector('#appBlog');
      this.func = func;
    }

    insertCard(resolve, arrInstances) {
      f().then((result) => {
        ajaxRequests.sendRequestForModelSite('GET', this.request)
          .then(model => {
            model.forEach(card => {
              if (card?.options?.class === 'blog__card-2-left' && result !== 1) {
                result++
              }
              if (card.blog === this.func.name && this.$blog && offset < result) {
                offset++;
                offset2++;
                const $wrapCard = document.querySelector(this.selector);
                $wrapCard.insertAdjacentHTML('beforeend', this.func(card));
                resolve(arrInstances);
              } else {
                resolve(arrInstances);
              }
            });
          })
          .catch(err => console.log(err));
      });
    }

    insertWithAJAX(resolve, arrInstances) {
      ajaxRequests.sendRequestForModelSite('GET', this.request)
        .then(model => {
          model.forEach(card => {
            if (card.blog === this.func.name && this.$blog) {
              ajaxRequests.sendRequestForModelSite('GET', this.requestInside)
                .then(data => {
                  const $cardLeft = document.querySelector(this.selector);
                  $cardLeft.insertAdjacentHTML('beforeend', this.func(data, card));
                  resolve(arrInstances);
                });
            }
          });
        })
        .catch(err => console.log(err));
    }

    insertWithDubbleAJAX(resolve, arrInstances) {
      ajaxRequests.sendRequestForModelSite('GET', this.request)
        .then(model => {
          model.forEach(card => {
            if (card.blog === this.func.name && this.$blog && offset3 < res2) {
              offset3++;
              ajaxRequests.sendRequestForModelSite('GET', this.requestInside)
                .then(data => {
                  ajaxRequests.sendRequestForModelSite('GET', `${ajaxRequests.requestUrlForBlogDiscussPart1}${data.results[this.requestDubbleID].id}${ajaxRequests.requestUrlForBlogDiscussPart2}`)
                    .then(discuss => {
                      const $cardRight = document.querySelector(this.selector);
                      $cardRight.insertAdjacentHTML(this.position, this.func(data, card, discuss));
                      if (resolve) {
                        resolve(arrInstances);
                      }
                    });
                });
            } else {
              if (resolve) {
                resolve(arrInstances);
              }
            }
          });
        })
        .catch(err => console.log(err));
    }
  }

  class Card extends Component {
    constructor(options) {
      super(options);
      this.selector = options.selector;
      this.request = options.request;
      this.requestInside = options.requestInside;
      this.requestDubbleID = options.requestDubbleID;
      this.func = options.func;
      this.position = options.position;
    };
  }

  const cardsWrap = new Card({
    selector: '.blog__card',
    request: ajaxRequests.requestUrlForModel,
    func: function createBlogCard(card) {
      const className = card.options['class'];
      return `
            <div class="${className}"></div>
              `;
    },
  });

  const cardLeft1 = new Card({
    selector: '.blog__card-1',
    request: ajaxRequests.requestUrlForModel,
    requestInside: getValueByLocalStorage(),
    func: function createBlogCardLeftPart1(data, card) {
      const className = card.options['class'];
      const iconPlay = card.options['iconPlay'];
      const link = `https://www.themoviedb.org/movie/${data.results[0].id}#play=wnS4A5-vtFA`;
      return `
            <div class="${className}">
             <a href="${link}">
             <img class="blog__svgPlay" src="${iconPlay}" alt="icon play">
             </a>
            </div>
            `;
    },
  });

  const cardLeft2 = new Card({
    selector: '.blog__card-2',
    request: ajaxRequests.requestUrlForModel,
    func: function createBlogCardLeftPart2(card) {
      const className = card.options['class'];
      return `
          <div class="${className}"></div>
          `;
    },
  });

  const cardLeft3 = new Card({
    selector: '.blog__card-3',
    request: ajaxRequests.requestUrlForModel,
    func: function createBlogCardLeftPart3(card) {
      const className = card.options['class'];
      return `
  <div class="${className}"></div>
  `;
    },
  });

  function transformDate(date) {
    let arrDate = date.split('-').reverse();
    let dateStr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let indDateArr = parseInt(arrDate[1]); //index replace
    let myDate = arrDate.splice(1, 1, dateStr[--indDateArr]);
    let newDate = arrDate.toString().replace(/,/, ' ');
    return newDate;
  }

  function generateIconPost(data, card, discuss) {
    let icon;
    const subIcon = 'https://image.tmdb.org/t/p/w500';
    if (discuss.production_companies.length > 0) {
      discuss.production_companies[0].logo_path !== null ?
        icon = `${subIcon}${discuss.production_companies[0].logo_path}` :
        icon = card.options['icon'];
    } else {
      icon = card.options['icon'];
    }
    return icon;
  }

  function generateAuthor(data, card, discuss) {
    let author;
    if (discuss.production_companies.length > 0) {
      author = discuss.production_companies[0].name;
    } else {
      author = 'Sorry,we do not have the "Author\'s name"';
    }
    return author;
  }

  const cardRight1 = new Card({
    selector: '.blog__card-1',
    request: ajaxRequests.requestUrlForModel,
    requestInside: getValueByLocalStorage(),
    requestDubbleID: 0,
    position: 'beforeend',
    func: function createBlogCardRightPart1(data, card, discuss) {
      const className = card.options['class'];
      const icon = generateIconPost(data, card, discuss);
      const alt = card.options['alt'];
      const author = generateAuthor(data, card, discuss);
      const date = transformDate(data.results[0].release_date);
      const time = card.dataPost['time'];
      const icomment = card.dataPost['icomment'];
      const istar = card.dataPost['istar'];
      const imedia = card.imedia;
      const textTitle = data.results[0].title;
      const text = data.results[0].overview;
      return `
             <div class="${className}">
              <div class="blog__card-head card-head">
                <img class="card-head__img-1" src="https://image.tmdb.org/t/p/w500${icon}" alt="${alt}">
                <div>
                  <h5 class="card-head__title">${author}</h5>
                  <p class="posts__footer-title">${date} &nbsp; &#183; &nbsp; ${time} &nbsp; &#183; &nbsp; <img
                      src="${icomment[0]}" alt="${icomment[1]}"> ${icomment[2]} &nbsp; <img src="${istar[0]}"
                      alt="star">
                    <img src="${istar[0]}" alt="star">
                    <img src="${istar[2]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                  </p>
                </div>
                <div class="card-head__img">
                  <img class="card-head__img-2" src="${imedia}" alt="player">
                </div>
              </div>
              <div class="blog__card-read">
                <h2>${textTitle}</h2>
                <p>${text}</p>
                <form action="https://www.themoviedb.org/movie/${data.results[0].id}">
                <button type="submit" class="blog__btn-read-more">Read more</button>
                <button type="button" class="jquery-modal blog__btn-read-more blog__btn-delete">Delete post</button>
                 </form>
              </div>
            </div>
  `;
    }
  });

  const cardRight2 = new Card({
    selector: '.blog__card-2',
    request: ajaxRequests.requestUrlForModel,
    requestInside: getValueByLocalStorage(),
    requestDubbleID: 1,
    position: 'beforeend',
    func: function createBlogCardRightPart2(data, card, discuss) {
      const className = card.options['class'];
      const icon = generateIconPost(data, card, discuss);
      const alt = card.options['alt'];
      const author = generateAuthor(data, card, discuss);
      const date = transformDate(data.results[1].release_date);
      const time = card.dataPost['time'];
      const icomment = card.dataPost['icomment'];
      const istar = card.dataPost['istar'];
      const imedia = card.imedia;
      const textTitle = data.results[1].title;
      const text = data.results[1].overview;
      return `
               <div class="${className}">
              <div class="card-head">
                <img class="card-head__img-1" src="https://image.tmdb.org/t/p/w500${icon}" alt="${alt}">
                <div>
                  <h5 class="card-head__title card-head__title--sarah">${author}</h5>
                  <p class="posts__footer-title">${date} &nbsp; &#183; &nbsp; ${time} &nbsp; &#183; &nbsp; <img
                      src="${icomment[0]}" alt="${icomment[1]}"> ${icomment[2]} &nbsp; <img src="${istar[0]}"
                      alt="star">
                    <img src="${istar[1]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                  </p>
                </div>
                <div class="card-head__img">
                  <img class="card-head__img-2" src="${imedia}" alt="melody">
                </div>
              </div>
              <div class="blog__card-read blog__card-read--sarah">
                <h2>${textTitle}</h2>
                <audio class="audio" controls="controls">
                  <source src="../assets/Paradise.mp3" type="audio/mp3">
                </audio>
                <p>${text}</p>
                <form action="https://www.themoviedb.org/movie/${data.results[1].id}">
                 <button type="submit" class="blog__btn-read-more">Read more</button>
                 <button type="button" class="jquery-modal blog__btn-read-more blog__btn-delete">Delete post</button>
                  </form>
              </div>
            `;
    }
  });

  const cardRight3 = new Card({
    selector: '.blog__card-3',
    request: ajaxRequests.requestUrlForModel,
    requestInside: getValueByLocalStorage(),
    requestDubbleID: 2,
    position: 'beforeend',
    func: function createBlogCardRightPart3(data, card, discuss) {
      const className = card.options['class'];
      const icon = generateIconPost(data, card, discuss);
      const alt = card.options['alt'];
      const author = generateAuthor(data, card, discuss);
      const date = transformDate(data.results[2].release_date);
      const time = card.dataPost['time'];
      const icomment = card.dataPost['icomment'];
      const istar = card.dataPost['istar'];
      const imedia = card.imedia;
      const textTitle = data.results[2].title;
      const text = data.results[2].overview;
      return `
             <div class="${className}">
              <div class="card-head">
                <img class="card-head__img-1" src="https://image.tmdb.org/t/p/w500${icon}" alt="${alt}">
                <div>
                  <h5 class="card-head__title card-head__title--grace">${author}</h5>
                  <p class="posts__footer-title">${date} &nbsp; &#183; &nbsp; ${time} &nbsp; &#183; &nbsp; <img
                      src="${icomment[0]}" alt="${icomment[1]}"> ${icomment[2]} &nbsp; <img src="${istar[0]}"
                      alt="star">
                    <img src="${istar[0]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                    <img src="${istar[1]}" alt="star">
                  </p>
                </div>
                <div class="card-head__img">
                  <img class="card-head__img-2" src="${imedia}" alt="player">
                </div>
              </div>
              <div class="blog__card-read">
                <h2>${textTitle}</h2>
                <p>${text}</p>
                <form action="https://www.themoviedb.org/movie/${data.results[2].id}">
                <button type="submit" class="blog__btn-read-more">Read more</button>
                <button type="button" class="jquery-modal blog__btn-read-more blog__btn-delete">Delete post</button>
                </form>
              </div>
            </div>
           `;
    }
  });

  const cardRightWithoutMedia = new Card({
    selector: '.blog__card-3',
    request: ajaxRequests.requestUrlForModel,
    requestInside: getValueByLocalStorage(),
    requestDubbleID: 3,
    position: 'afterend',
    func: function createCardWithoutMedia(data, card, discuss) {
      const className = card.options['class'];
      const icon = generateIconPost(data, card, discuss);
      const alt = card.options['alt'];
      const author = generateAuthor(data, card, discuss);
      const date = transformDate(data.results[3].release_date);
      const time = card.dataPost['time'];
      const icomment = card.dataPost['icomment'];
      const istar = card.dataPost['istar'];
      const imedia = card.imedia;
      const textTitle = data.results[3].title;
      const text = data.results[3].overview;
      return `
            <div class="${className}">
            <div class="card-head card-head--last">
              <img class="card-head__img-1" src="https://image.tmdb.org/t/p/w500${icon}" alt="${alt}">
              <div>
                <h5 class="card-head__title card-head__title--grace">${author}</h5>
                <p class="posts__footer-title">${date} &nbsp; &#183; &nbsp; ${time} &nbsp; &#183; &nbsp; <img
                    src="${icomment[0]}" alt="${icomment[1]}"> ${icomment[2]} &nbsp; <img src="${istar[0]}"
                    alt="star">
                  <img src="${istar[0]}" alt="star">
                  <img src="${istar[0]}" alt="star">
                  <img src="${istar[1]}" alt="star">
                  <img src="${istar[1]}" alt="star">
                </p>
              </div>
              <div class="card-head__img card-head__img--last">
                <img class="card-head__img-2" src="${imedia}" alt="text">
              </div>
            </div>
            <div class="blog__card-read--last">
              <h2>${textTitle}</h2>
              <p>${text}</p>
               <form action="https://www.themoviedb.org/movie/${data.results[3].id}">
               <button type="submit" class="blog__btn-read-more blog__btn-read-more--last">Read more</button>
               <button type="button" class="jquery-modal blog__btn-read-more blog__btn-delete blog__btn-delete--withoutMedia">Delete post</button>
               </form>
            </div>
          </div>
          `;
    }
  });
  let poster = getValueByLocalStorage();

  return [cardsWrap, cardLeft1, cardLeft2, cardLeft3, cardRight1, cardRight2, cardRight3, cardRightWithoutMedia, poster];
})
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[0].insertCard(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[1].insertWithAJAX(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[2].insertCard(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[3].insertCard(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[4].insertWithDubbleAJAX(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[5].insertWithDubbleAJAX(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[6].insertWithDubbleAJAX(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    return new Promise(resolve => {
      arrInstancesByClassCard[7].insertWithDubbleAJAX(resolve, arrInstancesByClassCard);
    });
  })
  .then((arrInstancesByClassCard) => {
    const p = new Promise((resolve) => {
      const blogBg1 = document.querySelector('.blog__card-1-left');
      const blogBg2 = document.querySelector('.blog__card-2-left');
      const blogBg3 = document.querySelector('.blog__card-3-left');
      const postsLength = document.querySelector('.blog__card');
      resolve([blogBg1, blogBg2, blogBg3, postsLength]);
    });
    if (-1 < location.href.indexOf('blog.html')) {
      let poster = arrInstancesByClassCard[8];
      p.then(card => {
        ajaxRequests.sendRequestForModelSite('GET', poster)
          .then(data => {
            for (let i = 0; i < card[3].children.length; i++) {
              card[i].style.background = `url('https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path || data.results[i].poster_path}') no-repeat`;
              card[i].style.backgroundSize = 'cover';
            }
            const postsUndefined = document.querySelector('.blog__card-1');
            const message = document.createElement('div');
            message.innerText = 'Sorry :( unfortunately, we do not have this movie..  Try it now ;)';
            message.style.fontSize = '42px';
            message.style.padding = '20px';
            message.style.width = '500px';
            message.style.lineHeight = '5rem';
            if (card[3].children.length < 2) {
              postsUndefined.append(message)
            }
          })
          .catch(err => console.log(err));
      });
    }
  })
  .then(() => {
    setTimeout(isDeletedPost, 300);
    setEventForDeletePost();
  })
  .then(() => {
    $(document).ready(() => {
      setTimeout(() => {
        $('.jquery-modal').simpleMWP({
          backgroundColor: "red",
          title: "Attention !",
          message: "Are you sure you want to delete this post?",
          height: 200,
          width: 400,
          area: 'unclose',
          button: 2,
          success: {
            backgroundColor: 'green',
            title: 'Success',
            message: 'SUCCESS',
            height: 200,
            width: 400,
            area: 'unclose',
            button: 0
          }
        })
      }, 2000)

    })
  })


