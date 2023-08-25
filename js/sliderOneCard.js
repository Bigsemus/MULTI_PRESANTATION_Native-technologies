import { template } from "./templates.js";

export class TestimonialsSlider {
  step = 0;
  offset = 0;
  interval;
  slide;
  slides;

  constructor(button, $testimonialsCardWrap, arrAllCards, arrAllCardsReverse) {
    this.button = button;
    this.$testimonialsCardWrap = $testimonialsCardWrap;
    this.arrAllCards = arrAllCards;
    this.arrAllCardsReverse = arrAllCardsReverse;
    this.offSet2 = 0;
  }

  addEventButton() {
    this.button.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        this.moveCard(event);
      });
    });
    this.button.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        this.createCard(event);
      });
    });
  };

  createCard(event) {
    if (event && event.currentTarget.classList[2] === 'btn-next') {
      this.createCardIfButtonNext()
    } else {
      this.createCardIfButtonPrev()
    }
    if (this.step + 1 === this.arrAllCards.length) {
      this.step = 0;
    } else {
      this.step++;
    }
    this.offset = 1;
  };

  createCardIfButtonNext() {
    this.$testimonialsCardWrap.insertAdjacentHTML('afterbegin', template.createTestimonialsCard(this.arrAllCards[this.step]));
    this.slides = document.querySelector(`.testimonials__card-block`);
    this.slides.style.right = this.offset * 560 + 'px';
  }

  createCardIfButtonPrev() {
    this.$testimonialsCardWrap.insertAdjacentHTML('afterbegin', template.createTestimonialsCard(this.arrAllCardsReverse[this.step]));
    this.slides = document.querySelector(`.testimonials__card-block`);
    this.slides.style.left = this.offset * 560 + 'px';
  }

  moveCard(event) {
    this.slide = document.querySelectorAll(`.testimonials__card-block`);
    this.offSet2 = 0;
    for (let i = 1; i >= 0; i--) {
      if (event && event.currentTarget.classList[2] === 'btn-next' && this.slide[i]) {
          this.slide[i].style.right = this.offSet2 * 560 - 560 + 'px';
      } else if (this.slide[i]) {
          this.slide[i].style.left = this.offSet2 * 560 - 560 + 'px';
      }
      this.offSet2++;
    }
      while (this.$testimonialsCardWrap.children.length > 3) {
        this.$testimonialsCardWrap.lastChild.remove()
      }
  };


  addIntervalEventOnCard ()  {
    this.$testimonialsCardWrap.addEventListener('mouseover', () => clearInterval(this.interval), false);
    this.$testimonialsCardWrap.addEventListener('mouseout', () => {
      this.interval = setInterval( () => {
        this.caruselAction();
      }, 3010);
    }, false);
}

  addIntervalEventOnButton ()  {
    this.button.forEach((btn) => {
      btn.addEventListener('mouseover', () => clearInterval(this.interval), false);
    });
    this.button.forEach((btn) => {
      btn.addEventListener('mouseout', () => {
        this.interval = setInterval( () => {
          this.caruselAction()
        }, 3010);
      }, false);
    });
  }

  caruselAction () {
    this.createCard();
    setTimeout(() => {
      this.moveCard();
    }, 0);
}

  caruselSlider() {
    this.interval = setInterval(() => {
      this.caruselAction();
    }, 3010);
    this.addIntervalEventOnCard()
    this.addIntervalEventOnButton()
  };
}