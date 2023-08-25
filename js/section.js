function sectionPost(block) {
    return `
  <section id="pages" class="posts">
        <div class="wrapper">
            <h2 class="posts__title">
                <a class="posts__title-link" href="./post.html">${block.value[0]}</a>
            </h2>
            <hr class="posts__sub-line">
            <div class="posts__line"></div>
            <p class="posts__subtitle">${block.value[1]}</p>
            <div class="posts__grid"></div>
        </div>
    </section>
  `
}

function portfolio(block) {
    return `
  <section class="portfolio">
        <div class="wrapper">
            <div class="portfolio__section-header section-header">
                <h2 class="section-header__title"> ${block.value[0]} </h2>
                <hr class="section-header__sub-line">
                <div class="section-header__line"></div>
                <p class="section-header__sub-title"> ${block.value[1]} </p>
            </div>
            <div class="portfolio__posts__grid posts__grid posts__grid--portfolio"></div>
        </div>
    </section>
  `
}

function testimonials(block) {
    return `
  <section class="testimonials">
        <div class="wrapper">
            <div class="testimonials__section-header section-header">
                <h2 class="section-header__title"> ${block.value} </h2>
                <hr class="section-header__sub-line">
                <div class="section-header__line"></div>
            </div>
            <div class="testimonials__posts__grid posts__grid posts__grid--testimonials">
                <button class="testimonials__btn-prev testimonials__btn btn-prev">
                    <img class="btn-prev__icon" src="${block.image[0]}" alt="arrow">
                </button>
             <div class="testimonials__card-block-wrap">

             </div>
                <button class="testimonials__btn-next testimonials__btn btn-next">
                    <img class="btn-next__icon" src="${block.image[1]}" alt="arrow">
                </button>
            </div>
        </div>
    </section>
  `
}


function blogAbout(block) {
    return `
<section class="main-blog__about about">
      <div class="wrapper">
        <div class="about__section-header section-header">
          <h1 class="section-header__title--blog"> ${block.value[0]} </h1>
          <div class="about__section-header__line--blog section-header__line--blog"></div>
          <div class="about__main-blog__search main-blog__search">
          <div class="listBySearch"></div>
               <select class="search-by">
               <option value="movie">By movie</option>
               <option value="author">By person</option>
              </select>
               <form class="blog__form-submit" name="nameSearch">
                <input id="live-search" class="main-blog__search-input" type="text" placeholder="  Search input">
                <button type="submit" class="main-blog__submit"><img src="${block.value[1]}"alt="search"></button>
                </form>
                <div class="listByReject">Your request must start with a capital letter and at least 3 characters, also no more than 59 and may contain ( ! : ? . , - )</div>
          </div>
        </div>
      </div>
    </section>
`;
}

function blogMediaCard() {
    return `
   <section class="blog__media-cards">
      <div class="wrapper">
        <div class="blog__card"></div>
        <button type="submit" class="blog__last-btn">Read more</button>
      </div>
    </section>
  `
}

function mainSection() {
    return `
<article class="post-main post-main__article">
      </article>
      <section class="post-main__grid">
        <div class="post-main__left">
        </div>
        <div class="post-main__right">
          <div class="post-main__latest-posts latest-posts">
            <h2 class="latest-posts__title"> Latest posts </h2>
            <hr>
            <div class="latest-posts__mini">
              <div class="latest-posts__img">
                <img src="./img/Latest-post-img-1.png" alt="confetti">
              </div>
              <div class="latest-posts__post">
                <h3>Much cure inappropriate could this restrictions …</h3>
                <p>20 oct, 2019 &nbsp; &#183; &nbsp; 10 min read &nbsp; &#183; &nbsp; <img
                    src="./img/icons/a-icon-comment.svg" alt="comment"> 11 </p>
              </div>
            </div>
            <div class="latest-posts__mini">
              <div class="latest-posts__img">
                <img src="./img/Latest-post-img-2.png" alt="mountains">
              </div>
              <div class="latest-posts__post">
                <h3>Much cure inappropriate could this restrictions …</h3>
                <p>20 oct, 2019 &nbsp; &#183; &nbsp; 10 min read &nbsp; &#183; &nbsp; <img
                    src="./img/icons/a-icon-comment.svg" alt="comment"> 11 </p>
              </div>
            </div>
            <button class="latest-posts__btn">More posts</button>
          </div>
          <div class="categories latest-posts">
            <h2 class="latest-posts__title"> Categories </h2>
            <hr>
            <div class="categories__accordeon">
              <div class="categories__accordeon-head accordeon-head">
                <a href="#!">Restaurant food (3)</a>
                <img src="./img/icons/a-icon-arrow.svg" alt="arrow">
              </div>
              <ul class="categories__accordeon-list accordeon-list">
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
              </ul>
              <div class="categories__accordeon-head accordeon-head">
                <a href="#!">Travel news (3)</a>
                <img class="arrow__open" src="./img/icons/a-icon-arrow.svg" alt="arrow">
              </div>
              <ul class="categories__accordeon-list accordeon-list">
                <li class="accordeon-list__item"><a href="#!">Hiking</a></li>
                <li class="accordeon-list__item"><a href="#!">Bicycle trip</a></li>
                <li class="accordeon-list__item"><a href="#!">Mountains trip</a></li>
              </ul>
              <div class="categories__accordeon-head accordeon-head">
                <a href="#!">Modern technology (6)</a>
                <img src="./img/icons/a-icon-arrow.svg" alt="arrow">
              </div>
              <ul class="categories__accordeon-list accordeon-list">
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
              </ul>
              <div class="accordeon-head">
                <a href="#!">Product (4)</a>
                <img src="./img/icons/a-icon-arrow.svg" alt="arrow">
              </div>
              <ul class="categories__accordeon-list accordeon-list">
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
              </ul>
              <div class="categories__accordeon-head accordeon-head">
                <a href="#!">Inspiration (2)</a>
                <img src="./img/icons/a-icon-arrow.svg" alt="arrow">
              </div>
              <ul class="categories__accordeon-list accordeon-list">
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
                <li class="accordeon-list__item"></li>
              </ul>
            </div>
          </div>
          <div class="tags latest-posts">
            <h2 class="latest-posts__title"> Tags </h2>
            <hr>
            <div class="tags__row tags__row--1">
              <button class="tags__btn-1">Love</button>
              <button class="tags__btn-2">Signs</button>
              <button class="tags__btn-3">Waterfall</button>
              <button class="tags__btn-4">Inspiration</button>
            </div>
            <div class="tags__row tags__row--2">
              <button class="tags__btn-5">Quotes</button>
              <button class="tags__btn-6">Sea</button>
              <button class="tags__btn-7">Sense</button>
              <button class="tags__btn-8">Coffee</button>
              <button class="tags__btn-9">Gold</button>
            </div>
            <div class="tags__row tags__row--3">
              <button class="tags__btn-10">Images</button>
              <button class="tags__btn-11">Courage</button>
              <button class="tags__btn-12">Dancing</button>
              <button class="tags__btn-13">Video</button>
            </div>
          </div>
        </div>
      </section>
`
}

function latestPostArticle() {
    return `
  <h1 class="post-main__title"> Fog up the river, where it flows among green aits and meadows </h1>
        <div class="post-main__card-head card-head">
          <img class="card-head__img-1" src="./img/Sarah.png" alt="Sarah">
          <div>
            <h5 class="card-head__title card-head__title--sarah">Sarah Healy</h5>
            <p class="posts__footer-title">02 oct, 2019 &nbsp; &#183; &nbsp; 12 min read &nbsp; &#183; &nbsp; <img
                src="./img/icons/a-icon-comment.svg" alt="comment"> 4 &nbsp; <img src="./img/icons/Star-1.svg"
                alt="star">
              <img src="./img/icons/Star-2.svg" alt="star">
              <img src="./img/icons/Star-2.svg" alt="star">
              <img src="./img/icons/Star-2.svg" alt="star">
              <img src="./img/icons/Star-2.svg" alt="star">
            </p>
          </div>
        </div>
  `
}

function latestPostLeftMedia() {
    return `
            <div class="post-main__img-workplace">
            <img src="./img/Post_main_img.png" alt="workplace">
          </div>
          <audio class="audio--blog" controls="controls">
            <source src="./img/Paradise.mp3" type="audio/mp3">
          </audio>
  `
}

function latestPostLeftTitle(block) {
    const p1 = block["p1"];
    const p1link = block["p1link"];
    const p1two = block["p1two"];
    const p2 = block["p2"];
    const p3 = block["p3"];
    const p3link = block["p3link"];
    const p3two = block["p3two"];
    return `
            <div class="post-main__post-title">
            <p class="post-main__post-title-p-1">${p1} <a href="#!">${p1link}</a>${p1two} </p>
            <p class="post-main__post-title-p-2">${p2}</p>
            <p class="post-main__post-title-p-3">${p3} <a href="#!">${p3link}</a> ${p3two}</p>
          </div>
  `
}

function latestPostLeftTechnoTitle2(block) {
    const title = block["title"];
    const p1 = block["p1"];
    const p2 = block["p2"];
    const p3 = block["p3"];
    const p4 = block["p4"];
    const like = block["like"];
    const linkFacebook = block["linkFacebook"];
    const iconFacabook = block["iconFacabook"];
    const linkDribble = block["linkDribble"];
    const iconDribble = block["iconDribble"];
    const linkInsta = block["linkInsta"];
    const iconInsta = block["iconInsta"];
    return `
            <div class="post-main__techno">
            <h2 class="post-main__techno-h"> ${title} </h2>
            <p class="post-main__techno-p">${p1} </p>
            <p class="post-main__techno-p"> ${p2[0]} <span>${p2[1]}</span> ${p2[2]} </p>
            <div class="post-main__techno-voice">
              <p class="post-main__techno-voice-p">
                <a href="#!">${p3[0]}</a> ${p3[1]} </p>
            </div>
            <div class="post-main__interface">
              <h2>${p4[0]}</h2>
              <p>${p4[1]} <a href="#!">${p4[2]}</a> ${p4[3]}</p>
              <div class="post-main__interface-link">
                <a href="#!">
                  <img src="${like}" alt="like">
                </a>
                <p> 75 likes</p>
                <ul class="post-main__social-links social-links">
                  <li class="social-links__link">
                    <a href="${linkFacebook}"><img src="${iconFacabook}"
                        alt="facebook"></a>
                  </li>
                  <li class="social-links__link">
                    <a href="${linkDribble}"><img src="${iconDribble}" alt="dribbble"></a>
                  </li>
                  <li class="social-links__link">
                    <a href="${linkInsta}"><img src="${iconInsta}"
                        alt="instagram"></a>
                  </li>
                </ul>
              </div>
              <hr>
            </div>
          </div>
  `
}

function latestPostLeftReview(block) {
    const title = block['title'];
    const socialIcon = block['socialIcon'];
    const message1 = block['message1'];
    const message2 = block['message2'];
    const message3 = block['message3'];
    return `
          <div class="post-main__review review">
            <h2 class="review__title"> ${title} </h2>
            <img class="review__circle" src="./img/icons/perfect-circle_icon-icons.com_53928.svg" alt="circle">
            <div class="post-main__review-card review-card">
              <img class="review-card__img review-card__img--first" src="${socialIcon[0]}" alt="Sarah">
              <div class="review-card__message review-card__message--first">
                <div class="review-card__header">
                  <p class="review-card__title"> ${message1[0]} <img class="review-card__star"
                      src="${message1[1]}" alt="star">
                    <img class="review-card__star" src="${message1[2]}" alt="star">
                    <img class="review-card__star" src="${message1[2]}" alt="star">
                    <img class="review-card__star" src="${message1[2]}" alt="star">
                    <img class="review-card__star" src="${message1[2]}" alt="star">
                  </p>
                  <p class="review-card__ago">
                    <img src="${message1[3]}" alt="time ago"> &nbsp; ${message1[4]} </p>
                </div>
                <p class="review-card__sub-title"> ${message1[5]} </p>
                <p class="review-card__link"><a href="${message1[6]}">Read more</a></p>
              </div>
            </div>
            <div class="review-card">
              <img class="review-card__img" src="${socialIcon[1]}" alt="Sarah">
              <div class="review-card__message review-card__message--second">
                <div class="review-card__header">
                  <p class="review-card__title"> ${message2[0]} <img class="review-card__star" src="${message2[1]}"
                      alt="star">
                    <img class="review-card__star" src="${message2[1]}" alt="star">
                    <img class="review-card__star" src="${message2[1]}" alt="star">
                    <img class="review-card__star" src="${message2[1]}" alt="star">
                    <img class="review-card__star" src="${message2[1]}" alt="star">
                  </p>
                  <p class="review-card__ago">
                    <img src="${message2[3]}" alt="time ago"> &nbsp; ${message2[4]} </p>
                </div>
                <p class="review-card__sub-title review-card__sub-title--second"> ${message2[5]} </p>
                <p class="review-card__link"><a href="${message2[6]}">Read less</a></p>
              </div>
            </div>
            <div class="review-card">
              <img class="review-card__img" src="${socialIcon[2]}" alt="Sarah">
              <div class="review-card__message review-card__message--last">
                <div class="review-card__header">
                  <p class="review-card__title"> ${message3[0]} <img class="review-card__star" src="${message3[1]}"
                      alt="star">
                    <img class="review-card__star" src="${message3[1]}" alt="star">
                    <img class="review-card__star" src="${message3[2]}" alt="star">
                    <img class="review-card__star" src="${message3[3]}" alt="star">
                    <img class="review-card__star" src="${message3[3]}" alt="star">
                  </p>
                  <p class="review-card__ago">
                    <img src="${message3[4]}" alt="time ago"> &nbsp; ${message3[5]} </p>
                </div>
                <p class="review-card__sub-title"> ${message3[6]} </p>
              </div>
            </div>
            <p>
              <img class="review__circle review__circle--last" src="./img/icons/perfect-circle_icon-icons.com_53928.svg"
                alt="circle">
            </p>
            <button class="review__btn-more-contents">More comments</button>
          </div>
  `
}

export const section = {
    sectionPost,
    portfolio,
    testimonials,
    blogAbout,
    blogMediaCard,
    mainSection,
    latestPostArticle,
    latestPostLeftMedia,
    latestPostLeftTitle,
    latestPostLeftTechnoTitle2,
    latestPostLeftReview,
};
