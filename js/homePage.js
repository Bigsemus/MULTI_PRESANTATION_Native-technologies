import { ajaxRequests } from "./ajaxRequests.js";
import { section } from "./section.js";
import { template } from "./templates.js";
import { constructorTags } from "./constructorTags.js";
import { TestimonialsSlider } from "./sliderOneCard.js";
import { mapApp } from "./googleMap.js";

function introAboutUsSections($main) {
  constructorTags.then((makeElement) => {
    if ($main) {
      const sectionHome = document.createElement('section');
      sectionHome.id = 'home';
      sectionHome.className = 'main__intro intro';
      const wrapper = document.createElement('div');
      wrapper.className = 'wrapper';
      $main.append(sectionHome);
      sectionHome.append(wrapper);
      wrapper.append(makeElement('h1', 'intro__title'));
      wrapper.append(makeElement('p', 'intro__sub-title'));
      wrapper.append(makeElement('button', 'intro__button-explore'));
      wrapper.append(makeElement('button', 'intro__button-learn'));
    }
    if ($main) {
      const sectionAbout = document.createElement('section');
      sectionAbout.id = 'about';
      sectionAbout.className = 'about';
      const wrapper2 = document.createElement('div');
      wrapper2.className = 'wrapper';
      $main.append(sectionAbout);
      sectionAbout.append(wrapper2);
      wrapper2.append(makeElement('div', 'about__section-header section-header'));
      const aboutHeader = document.querySelector('.about__section-header');
      aboutHeader.append(makeElement('h2', 'section-header__title'));
      aboutHeader.append(makeElement('hr', 'section-header__sub-line'));
      aboutHeader.append(makeElement('div', 'section-header__line'));
      aboutHeader.append(makeElement('p', 'section-header__sub-title'));
      wrapper2.append(makeElement('div', 'about__grid'));
      const aboutGrid = document.querySelector('.about__grid');
      aboutGrid.append(makeElement('div', 'about__col1'));
      aboutGrid.append(makeElement('div', 'about__col2'));
      const aboutGridCol1 = document.querySelector('.about__col1');
      aboutGridCol1.append(makeElement('div', 'about__folder1'));
      aboutGridCol1.append(makeElement('div', 'about__folder2'));
      aboutGridCol1.append(makeElement('div', 'about__folder3'));
      const aboutFolder1 = document.querySelector('.about__folder1');
      const aboutFolder2 = document.querySelector('.about__folder2');
      const aboutFolder3 = document.querySelector('.about__folder3');
      aboutFolder1.append(makeElement('img', 'about__svgCorner-1'));
      aboutFolder1.append(makeElement('img', 'about__svgTypography'));
      aboutFolder1.append(makeElement('p', 'about__svgTypography-p'));
      aboutFolder2.append(makeElement('img', 'about__svgCorner-2'));
      aboutFolder2.append(makeElement('img', 'about__svgIconset'));
      aboutFolder2.append(makeElement('p', 'about__svgIconset-p'));
      aboutFolder3.append(makeElement('img', 'about__svgCorner-3'));
      aboutFolder3.append(makeElement('img', 'about__svgAccurate'));
      aboutFolder3.append(makeElement('p', 'about__svgAccurate-p'));
      const aboutGridCol2 = document.querySelector('.about__col2');
      aboutGridCol2.append(makeElement('img', 'about__svgPlay'));
    }
  })
}

function formSection($main) {
  constructorTags.then((makeElement) => {
    if ($main) {
      const testImonials = document.querySelector('.testimonials');
      const sectionContact = document.createElement('section');
      sectionContact.id = 'contact';
      sectionContact.className = 'contact';
      testImonials.append(sectionContact)
      const wrapper3 = document.createElement('div');
      wrapper3.className = 'wrapper';
      sectionContact.append(wrapper3);
      wrapper3.append(makeElement('h2', 'contact__title'));
      wrapper3.append(makeElement('hr', 'contact__sub-line'));
      wrapper3.append(makeElement('div', 'contact__line'));
      wrapper3.append(makeElement('p', 'contact__sub-title'));
      wrapper3.append(makeElement('div', 'contact__grid'));
      const contactGrid = document.querySelector('.contact__grid');
      contactGrid.append(makeElement('div', 'contact__first-row-left'));
      const contactFirstRowLeft = document.querySelector('.contact__first-row-left');
      contactFirstRowLeft.append(makeElement('ul', 'contact__social-links social-links'));
      const contactSocialLinksUl = document.querySelector('.contact__social-links');
      contactSocialLinksUl.append(makeElement('li', 'social-links__link'));
      contactSocialLinksUl.append(makeElement('li', 'social-links__link'));
      contactSocialLinksUl.append(makeElement('li', 'social-links__link'));
      const socialLinkLi = document.querySelectorAll('.social-links__link');
      socialLinkLi[0].append(makeElement('a', 'social-link-a', "href", "https://www.facebook.com/enespanol"));
      socialLinkLi[1].append(makeElement('a', 'social-link-a', "href", "https://about.instagram.com/"));
      socialLinkLi[2].append(makeElement('a', 'social-link-a', "href", "https://dribbble.com/"));
      const link = document.querySelectorAll('.social-link-a');
      link[0].append(makeElement('img', 'social-img', 'src', './img/icons/a-icon-facebook.svg'));
      const facebookImg = document.querySelector('.social-img');
      facebookImg.alt = 'facebook';
      link[1].append(makeElement('img', 'social-img', 'src', './img/icons/a-icon-instagram.svg'));
      const instagramImg = document.querySelector('.social-img');
      instagramImg.alt = 'instagram';
      link[2].append(makeElement('img', 'social-img', 'src', './img/icons/a-icon-dribbble.svg'));
      const dribbbleImg = document.querySelector('.social-img');
      dribbbleImg.alt = 'dribbble';
      contactGrid.append(makeElement('div', 'contact__first-row-right'));
      const contactFirstRowRight = document.querySelector('.contact__first-row-right');
      contactFirstRowRight.append(makeElement('div', 'contact__first-row-right-flex'));
      const contactFirstRowRightFlex = document.querySelector('.contact__first-row-right-flex');
      contactFirstRowRightFlex.append(makeElement('img', '', 'src', './img/icons/a-icon-mail.svg'));
      contactFirstRowRightFlex.append(makeElement('p', 'contact__first-row-right-flex-title'));
      sectionContact.append(makeElement('div', 'contact-main'));
      const contactMain = document.querySelector('.contact-main');
      const wrapper4 = document.createElement('div');
      wrapper4.className = 'wrapper';
      contactMain.append(wrapper4);
      wrapper4.append(makeElement('div', 'contact__grid'));
      const contactGridAll = document.querySelectorAll('.contact__grid');
      contactGridAll[1].append(makeElement('div', 'contact__second-row-1-col-1'));
      const contactSecondRow1col1 = document.querySelector('.contact__second-row-1-col-1');
      contactSecondRow1col1.append(makeElement('h2', 'contact__step-head'));
      contactSecondRow1col1.append(makeElement('div', 'contact__step-block step-block'));
      const stepBlock = document.querySelector('.step-block');
      stepBlock.append(makeElement('div', 'step-block__title'));
      const stepBlockTitle = document.querySelector('.step-block__title');
      stepBlockTitle.append(makeElement('div', 'step-block__title-ul'));
      const stepBlockTitleUl = document.querySelector('.step-block__title-ul');
      stepBlockTitleUl.append(makeElement('div', 'step-block__title-li step-block__li1'));
      stepBlockTitleUl.append(makeElement('div', 'step-block__title-li-txt'));
      stepBlockTitleUl.append(makeElement('div', 'step-block__title-li step-block__li2'));
      stepBlockTitleUl.append(makeElement('div', 'step-block__title-li-txt'));
      stepBlockTitleUl.append(makeElement('div', 'step-block__title-li step-block__li3'));
      stepBlockTitleUl.append(makeElement('div', 'step-block__title-li-txt'));
      const stepBlockTitleTxt = document.querySelectorAll('.step-block__title-li-txt');
      stepBlockTitleTxt[0].append(makeElement('p', 'step-block__title-p1-txt'));
      stepBlockTitleTxt[1].append(makeElement('p', 'step-block__title-p2-txt'));
      stepBlockTitleTxt[2].append(makeElement('p', 'step-block__title-p3-txt'));
      contactGridAll[1].append(makeElement('div', 'contact__second-row-1-col-2'));
      const contactSecondRow1col2 = document.querySelector('.contact__second-row-1-col-2');
      contactSecondRow1col2.append(makeElement('div', 'contact__form-wrap'));
      const contactFormWrap = document.querySelector('.contact__form-wrap');
      contactFormWrap.append(makeElement('form', 'contact__form'));
      const contactForm = document.querySelector('.contact__form');
      contactForm.append(makeElement('p', 'contact__input-password-title contact__input-password-title--1'));
      contactForm.append(makeElement('input', 'contact__input'));
      contactForm.append(makeElement('p', 'contact__input-password-title contact__input-password-title--2'));
      contactForm.append(makeElement('input', 'contact__input'));
      contactForm.append(makeElement('p', 'contact__input-password-title contact__input-password-title--3'));
      contactForm.append(makeElement('input', 'contact__input'));
      const contactInput = document.querySelectorAll('.contact__input');
      contactInput[0].type = 'text';
      contactInput[1].type = 'email';
      contactInput[2].type = 'password';
      const contactInputTitleShowPass = document.querySelector('.contact__input-password-title--3');
      contactInputTitleShowPass.append(makeElement('img', 'contact__showpass', 'src', './img/icons/a-icon-showpass.svg'));
      const showPassImg = document.querySelector('.contact__showpass');
      showPassImg.alt = 'showpass';
      contactInputTitleShowPass.append(makeElement('span', 'contact__showpass-span'));
      contactForm.append(makeElement('input', 'contact__input contact__input--submit', 'value', 'Send message'));
      const btnForm = document.querySelector('.contact__input--submit');
      btnForm.type = 'submit';
      contactForm.append(makeElement('p', 'form-message'));
      const formMessage = document.querySelector('.form-message');
      formMessage.append(makeElement('a', 'form-link', 'href', '#!'));
      const map = document.createElement('div');
      map.id = 'contact__map';
      contactSecondRow1col2.append(map);
      mapApp() ////// GOOGLE MAP  /////////
    }
  });
}


export const promiseByHomePage = ajaxRequests.sendRequestForModelSite('GET', ajaxRequests.requestUrlForModel)
  .then(model => {
    return new Promise(resolve => {
      introAboutUsSections($main); // INTRO_ABOUT_US_SECTIONS
      resolve();
    }).then(() => {
      return new Promise(resolve => {
        const $blog = document.querySelector('#appBlog');
        const $post = document.querySelector('#appPost');
        model.forEach(block => {
          const toHtmlHomeSection = section[block.home];
          const toHtmlBlogSection = section[block.blog];
          const toHtmlPostSection = section[block.latestPost];
          if (toHtmlHomeSection && $main) {
            $main.insertAdjacentHTML('beforeend', toHtmlHomeSection(block));
          } else if (toHtmlBlogSection && $blog) {
            $blog.insertAdjacentHTML('beforeend', toHtmlBlogSection(block));
          } else if (toHtmlPostSection && $post) {
            $post.insertAdjacentHTML('beforeend', toHtmlPostSection(block));
          }
        });
        model.forEach(card => {
          const postInsert = template[card.home];
          if (postInsert === template.createPost && $main) {
            const $post = document.querySelector('.posts__grid');
            $post.insertAdjacentHTML('beforeend', postInsert(card));
          }
        });
        model.forEach(card => {
          const portfolioTestimonialsCardInsert = template[card.home];
          if (portfolioTestimonialsCardInsert === template.createPortfolioCard && $main) {
            const $portfolioCard = document.querySelector('.posts__grid--portfolio');
            $portfolioCard.insertAdjacentHTML('beforeend', portfolioTestimonialsCardInsert(card));
          }
        });
        if ($main) { // SLIDER
          let arrOfObjectsForSlide = [];
          model.forEach(obj => {
            const testimonialsCardInsert = template[obj.home]
            if (testimonialsCardInsert === template.createTestimonialsCard && $main) {
              arrOfObjectsForSlide.push(obj);
            }
          });
          let reverseArrAllCardSlide = Object.assign([], arrOfObjectsForSlide).reverse();
          const $testimonialsCardWrap = document.querySelector('.testimonials__card-block-wrap');
          const button = document.querySelectorAll('.testimonials__btn');
          const slider = new TestimonialsSlider(button, $testimonialsCardWrap, arrOfObjectsForSlide, reverseArrAllCardSlide);
          slider.createCard();
          slider.moveCard();
          slider.addEventButton();
          slider.caruselSlider();
        }
        formSection($main); // FORM_SECTION
        const $postArticle = document.querySelector('.post-main__article');
        const $postLeft = document.querySelector('.post-main__left');
        model.forEach(block => {
          const toHtmlLatestPostArticle = section[block.latestPostArticle];
          const toHtmlLatestPostMedia = section[block.latestPostLeftMedia];
          if (toHtmlLatestPostArticle && $postArticle) {
            $postArticle.insertAdjacentHTML('afterbegin', toHtmlLatestPostArticle(block));
          } else if (toHtmlLatestPostMedia && $postLeft) {
            $postLeft.insertAdjacentHTML('afterbegin', toHtmlLatestPostMedia(block));
          }
        });
        const $postAudio = document.querySelector('.audio--blog');
        model.forEach(block => {
          const toHtmlLatestPostTitle = section[block.latestPostLeftTitle]
          if (toHtmlLatestPostTitle && $postAudio) {
            $postAudio.insertAdjacentHTML('afterend', toHtmlLatestPostTitle(block));
          }
        });
        const $postTitle1 = document.querySelector('.post-main__post-title');
        model.forEach(block => {
          const toHtmlLatestPostTitleSecondTechno = section[block.latestPostLeftTechnoTitle2];
          if (toHtmlLatestPostTitleSecondTechno && $postTitle1) {
            $postTitle1.insertAdjacentHTML('afterend', toHtmlLatestPostTitleSecondTechno(block));
          }
        });
        const $postSecondTechno = document.querySelector('.post-main__techno');
        model.forEach(block => {
          const toHtmlLatestPostTitleReview = section[block.latestPostLeftReview]
          if (toHtmlLatestPostTitleReview && $postSecondTechno) {
            $postSecondTechno.insertAdjacentHTML('afterend', toHtmlLatestPostTitleReview(block));
          }
        });
        resolve('resolve promiseByHomePage for testSlider/BlogRender');
      });
    })
      .catch(err => console.log(err));
  });
export const $main = document.querySelector('#app');
setTimeout(() => {
  $(document).ready(() => {
    //setTimeout(() => {
    $('.jquery-modal').simpleMWP({
      title: "Subscribe",
      message: 'Subscribe to this blog and be the first to know about updates.',
      backgroundColor: '#7ac7f8',
      height: 200,
      width: 400,
      typeWindow: 'subscribe',
      button: 1,
    })
    // }, 1700)
  })
}, 2000)




