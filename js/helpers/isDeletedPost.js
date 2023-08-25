export function isDeletedPost() {
    const wrapAllCards = document.querySelector('.blog__card');
    function getValueBySessionStorage() {
        let arrKeyValueSessionStorage = [];
        for (let i = 0; i < sessionStorage.length; i++) {
            arrKeyValueSessionStorage.push(sessionStorage.key(i));
        }
        return arrKeyValueSessionStorage;
    }
    for (let i = 0; i < wrapAllCards.children.length; i++) {
        let a = getValueBySessionStorage().find((item) => {
            return item === wrapAllCards.children[i].className;
        })
        if (a) {
            wrapAllCards.children[i].style.display = 'none';
        }
    }
}