import {ajaxRequests} from './ajaxRequests.js';
import {promiseBlog} from './blogPage.js';

promiseBlog.then(() => {
    const listByReject = document.querySelector('.listByReject');
    let submit = document.querySelector('.blog__form-submit');
    let arrTitle = createStartArr();
    let input = document.querySelector('#live-search');
    const wrapLiveSearch = document.querySelector('.listBySearch');
    const searchBy = document.querySelector('.search-by');
    wrapLiveSearch.classList.add('hide');
    input.addEventListener('input', validateValueByInput);
    wrapLiveSearch.addEventListener('click', (event) => {
        getDataForm(event);
    });
    submit.addEventListener('submit', getDataForm, false);

    function createStartArr() {
        let arrTitle = [];
        return new Promise(resolve => {
                ajaxRequests.sendRequestForModelSite('GET', ajaxRequests.requestTopRatePage1)
                    .then(topMovies => {
                        topMovies.results.forEach(movie => {
                            arrTitle.push(movie.title);
                        });
                        ajaxRequests.sendRequestForModelSite('GET', ajaxRequests.requestTopRatePage2)
                            .then(topMovies2 => {
                                topMovies2.results.forEach(movie => {
                                    arrTitle.push(movie.title);
                                });
                                ajaxRequests.sendRequestForModelSite('GET', ajaxRequests.requestTopRatePage3)
                                    .then(topMovies3 => {
                                        topMovies3.results.forEach(movie => {
                                            arrTitle.push(movie.title);
                                        });
                                        resolve(arrTitle);
                                    });
                            });
                    });
        });
    }

    arrTitle.then(title => {
        title.forEach(el => {
            wrapLiveSearch.insertAdjacentHTML(
                'beforeend',
                `
            <span class="titleMove">${el} ; &nbsp </span>
            `,
            );
        });
    });

    function validateValueByInput() {
        let keyValidateByRegexp = /(^[A-Z])(?=.*[a-z])([A-Za-z1-9!:?. ,-]{2,59}$)/;
        let value = this.value.trim();
        let list = document.querySelectorAll('.titleMove');
        const wrapLiveSearch = document.querySelector('.listBySearch');
        if (keyValidateByRegexp.test(value)) {
            wrapLiveSearch.classList.remove('hide');
            input.classList.remove('invalid');
            listByReject.classList.remove('showReject');
            input.classList.add('valid');
            list.forEach(elem => {
                if (elem.innerText.search(value) === -1) {
                    elem.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = markInputValue(str, elem.innerText.search(value), value.length);
                }
            });
        } else {
            wrapLiveSearch.classList.add('hide');
            input.classList.remove('valid');
            listByReject.classList.add('showReject');
            input.classList.add('invalid');
            list.forEach(elem => {
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            });
        }
    }

    function markInputValue(str, position, len) {
        return `${str.slice(0, position)}<mark>${str.slice(position, position + len)}</mark>${str.slice(position + len)}`;
    }

    function getDataForm(event) {
        event.preventDefault();
        let dataSearch = input.value;
        let res = input.classList[1];
        let request;
        if (searchBy.value === 'movie') {
            request = `https://api.themoviedb.org/3/search/movie?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&query=${dataSearch}`
        } else {
            request = `${ajaxRequests.requestByAuthor3}${dataSearch}${ajaxRequests.requestByAuthor4}`
        }
        if (res === 'valid') {
            localStorage.clear();
            ajaxRequests.sendRequestForModelSite('GET', request)
                .then(author => {
                    if (!author.results.length) {
                        localStorage.setItem('request', null);
                    }
                    if (searchBy.value === 'movie') {
                        author.results.forEach(nextMovie => {
                            localStorage.setItem(nextMovie.id, nextMovie.title);
                        });
                    } else {
                        if (author.results[0]) {
                            ajaxRequests.sendRequestForModelSite('GET', `${ajaxRequests.requestByAuthor5}${author.results[0].id}${ajaxRequests.requestByAuthor6}`)
                                .then(nextMovie => {
                                    if(nextMovie.crew.length) {
                                        for (let i = 0; i < nextMovie.crew.length; i++) {
                                            localStorage.setItem(nextMovie.crew[i].id, nextMovie.crew[i].title);
                                        }
                                    } else  {
                                        for (let i = 0; i < nextMovie.cast.length; i++) {
                                            localStorage.setItem(nextMovie.cast[i].id, nextMovie.cast[i].title);
                                        }
                                    }

                                });
                        }
                    }
                });
        }
        setTimeout(() => {
            if (res === 'valid'){
                sessionStorage.clear()
                location.reload();
            }
        }, 300);
    }
})
    .catch(err => console.log(err));