const requestUrlForBlog = 'https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b';
const requestByAuthor5 = 'https://api.themoviedb.org/3/person/';
const requestByAuthor6 = '/combined_credits?api_key=d6dbe94d15b75cd469ea39c97c6ec32b';
const requestByAuthor3 = 'https://api.themoviedb.org/3/search/person?query=';
const requestByAuthor4 = '&api_key=d6dbe94d15b75cd469ea39c97c6ec32b';
const requestUrlForBlogDiscussPart1 = 'https://api.themoviedb.org/3/movie/';
const requestUrlForBlogDiscussPart2 = '?api_key=d6dbe94d15b75cd469ea39c97c6ec32b';
const requestTopRatePage1 = 'https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&page=1';
const requestTopRatePage2 = 'https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&page=2';
const requestTopRatePage3 = 'https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&page=3';
const requestTopRatePage4 = 'https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&page=4';
const requestTopRatePage5 = 'https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&page=5';
const requestUrlForModel = './js/content.json';

function sendRequestForModelSite(method, url) {
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            const err = new Error('Ops something wrong');
            err.data = error;
            throw err;
        });
    });
}
export const ajaxRequests = {
    sendRequestForModelSite,
    requestTopRatePage1,
    requestTopRatePage2,
    requestTopRatePage3,
    requestTopRatePage4,
    requestTopRatePage5,
    requestUrlForBlog,
    requestUrlForModel,
    requestUrlForBlogDiscussPart1,
    requestUrlForBlogDiscussPart2,
    requestByAuthor3,
    requestByAuthor4,
    requestByAuthor5,
    requestByAuthor6,
};

