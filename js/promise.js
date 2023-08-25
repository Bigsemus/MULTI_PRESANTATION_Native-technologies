const loader = document.querySelector('.loader__filling');
const controlBlock = document.querySelector('.controlBlock');
const buttons = document.querySelectorAll('.btn');
let loaderAndGetCardsPromise = new Promise((resolve) => {
    controlBlock.addEventListener('click', (event) => {
        const collectionCards = document.querySelectorAll('.article');
        const arrCollectionsCard = [];
        for (let i = 0; i < collectionCards.length; i++) {
            const itemArticle = collectionCards[i];
            const itemImg = collectionCards[i].children[0];
            const itemTitle = collectionCards[i].children[1].children[0];
            const itemSubTitle = collectionCards[i].children[1].children[1];
            arrCollectionsCard.push({itemImg, itemTitle, itemSubTitle, itemArticle});
        }
        if (event.target.classList[2] === 'btn--one') {
            let one = runOneLoader(arrCollectionsCard);
            one.then((arrCards) => {
                loader.classList.remove('loader__filling--run');
                recycleAppToStart(arrCards);
            });
        } else if (event.target.classList[2] === 'btn--all') {
            let all = runAllLoader(arrCollectionsCard);
            all.then((arrCards) => {
                loader.classList.remove('loader__filling--run');
                recycleAppToStart(arrCards);
            });
        }

        loader.addEventListener("transitionend", () => {
            resolve(arrCollectionsCard, event)
        });
    });
});

function runAllLoader(arrCards) {
    loader.classList.add('loader__filling--run');
    buttons.forEach((btn) => {
        btn.disabled = true;
        btn.style.background = 'gray';
    })
    return new Promise(resolve => {
        loaderAndGetCardsPromise.then(() => {
            arrCards.forEach((card) => {
                card.itemImg.classList.add('article__img--animate');
            });
            arrCards[0].itemImg.addEventListener('transitionend', () => {
                resolve(arrCards);
            });
        });
    })
        .then((arrCards) => {
            return new Promise(resolve => {
                arrCards.forEach((card) => {
                    card.itemTitle.classList.add('article__title--animate');
                });
                arrCards[0].itemTitle.addEventListener('transitionend', () => {
                    resolve(arrCards)
                });
            });
        })
        .then((arrCards) => {
            return new Promise(resolve => {
                arrCards.forEach((card) => {
                    card.itemSubTitle.classList.add('article__sub-title--animate');
                });
                arrCards[0].itemSubTitle.addEventListener('transitionend', () => {
                    resolve(arrCards)
                });
            })
        }).then((arrCards) => {
            return new Promise(resolve => {
                arrCards.forEach((card) => {
                    card.itemArticle.classList.add('article--animate');
                });
                arrCards[0].itemArticle.addEventListener('transitionend', (event) => {
                    if (event.target.classList[0] === 'main__article') {
                        resolve(arrCards)
                    }
                });
                return arrCards;
            });
        });
}

function recycleAppToStart(arrCards) {
    arrCards.forEach((obj) => {
        for (let item in obj) {
            let animateClass = obj[item].className.split(' ').pop();
            obj[item].classList.remove(`${animateClass}`);
        }
    });
    buttons.forEach((btn) => {
        btn.disabled = false;
        btn.style.background = 'springgreen';
    })
}

function runOneLoader(arrCards) {
    loader.classList.add('loader__filling--run')
    buttons.forEach((btn) => {
        btn.disabled = true;
        btn.style.background = 'gray';
    })
    return loaderAndGetCardsPromise.then(() => {
        let i = -1;
        return animateItem([arrCards, i]);
    });
}

function animateItem([arrCards, i]) {
    ++i;
    if (i < arrCards.length) {
        return new Promise((resolve) => {
            arrCards[i].itemImg.classList.add('article__img--animate');
            setTimeout(() => {
                arrCards[i].itemTitle.classList.add('article__title--animate');
                setTimeout(() => {
                    arrCards[i].itemSubTitle.classList.add('article__sub-title--animate');
                    setTimeout(() => {
                        arrCards[i].itemArticle.classList.add('article--animate');
                        setTimeout(() => {
                            resolve(animateItem([arrCards, i]));
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        })
    } else {
        return arrCards;
    }
}
