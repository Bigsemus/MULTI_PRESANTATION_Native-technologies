function createPost(card) {
  const alt = card.options.alt;
  const classText = card.options['class-text'];
  const id = card.options.id ?? null;
  return `
                  <div class="posts__section">
                    <img src="${card.value[0]}" alt="${alt}">
                    <h3 class="posts__title-grid">${card.value[1]}</h3>
                    <p class="${classText}">${card.value[2]}</p>
                    <p class="posts__footer-title">${card.value[3]} &nbsp; &#183; &nbsp; ${card.value[4]} min read &nbsp; &#183; &nbsp; <img
                            ${id} src="${card.value[5]}" alt="comment"> ${card.value[6]}</p>
                </div>
  `
}

function createPortfolioCard(card) {
  const alt = card.options.alt;
  const classLastImg = card.options['class-text'] ?? null;
  const classButton = card.options['class-text'] ?? null;
  return `
                <div class="portfolio__posts__section posts__section posts__section--portfolio">
                    <a ${classButton} href="#!">
                        <div class="portfolio__card-hover">
                            <img ${classLastImg} src="${card.value[0]}" alt="${alt}">
                            <h3 class="portfolio-title__header">${card.value[1]}</h3>
                            <p class="portfolio-title__paragraph">${card.value[2]}</p>
                        </div>
                    </a>
                </div>
  `
}

function createPortfolioButton() {
  return `
  <div class="portfolio__block-arrow">
                        <button class="portfolio__btn-prev btn-prev">
                            <img class="btn-prev__icon" src="./img/icons/a-icon-arrow.svg" alt="arrow">
                        </button>
                        <button class="portfolio__btn-next btn-next">
                            <img class="btn-next__icon" src="./img/icons/a-icon-arrow.svg" alt="arrow">
                        </button>
                    </div>
                    <button class="portfolio__btn">See all works</button>
  `
}

function createTestimonialsCard(card) {
  return `
                    <div class="testimonials__card-block">
                        <div class="testimonials__card-left">
                            <p class="testimonials__symbol"> &#12319;</p>
                            <p class="testimonials__text">${card.post}</p>
                            <p class="testimonials__text-footer">${card.author}</p>
                            <p class="testimonials__text-footer">${card.work}</p>
                        </div>
                        <div class="testimonials__card-right">
                            <img src="${card.photo[0]}" alt="${card.photo[1]}">
                        </div>
                    </div> 
`
}

export const template = {
  createPost,
  createPortfolioCard,
  createPortfolioButton,
  createTestimonialsCard,
};

