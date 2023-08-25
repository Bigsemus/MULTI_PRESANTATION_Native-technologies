import {ajaxRequests} from "../ajaxRequests.js";

export function getValueByLocalStorage() {
    let arrKeyValueLocalStorage = [];
    let myRequestValue;
    let request = [];
    for (let key in localStorage) {
        if (localStorage.getItem(key) !== null) {
            arrKeyValueLocalStorage.push(localStorage.getItem(key));
        }
    }
    arrKeyValueLocalStorage.forEach(title => {
        if (title !== null) {
            let arrOfstr = title.split(' ');
            arrOfstr.forEach(world => {
                if (world.length > 3 && world !== 'undefined') {
                    request.push(world);
                }
            });
        }
    });
    let request2 = null;
    let objIsOftenWorld = request.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    if (Object.keys(objIsOftenWorld).length) {
        request2 = Object.entries(objIsOftenWorld).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0];
    }
    if (arrKeyValueLocalStorage[0] === null || arrKeyValueLocalStorage.length < 1) {
        myRequestValue = ajaxRequests.requestUrlForBlog;
    } else if (localStorage.getItem('request') === 'null') {
        myRequestValue = `https://api.themoviedb.org/3/search/movie?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&query=UNdefined`;
    } else {
        myRequestValue = `https://api.themoviedb.org/3/search/movie?api_key=d6dbe94d15b75cd469ea39c97c6ec32b&query=${request2}`;
    }
    arrKeyValueLocalStorage = null;
    return myRequestValue;
}