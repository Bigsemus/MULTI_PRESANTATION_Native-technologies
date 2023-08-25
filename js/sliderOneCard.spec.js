import { TestimonialsSlider } from "./sliderOneCard";
import { section } from "./section";

describe('sliderOneCard.js/ render .testimonials__card-block-wrap', () => {
  let Slider;
  const sliderWrap = document.createElement('div');
  document.body.appendChild(sliderWrap)
  let block = {
    "home": "testimonials",
    "value": "Testimonials",
    "image": [
      "./img/icons/a-icon-arrow.svg",
      "./img/icons/a-icon-arrow.svg"
    ]
  };

  const arrOfObjectsForSlide = [
    {
      "home": "createTestimonialsCard",
      "post": "We move at a fast pace. I’m always working on something. I am excited\n                                about it! ",
      "author": "Martin Oda",
      "work": "Product desgner",
      "photo": [
        "./img/User-img.png",
        "Sergio de Paula"
      ],
    },
    {
      "home": "createTestimonialsCard",
      "post": "I feel great as I lead my team confidently to victory.",
      "author": "Hanna Dukey",
      "work": "Team lead",
      "photo": [
        "./img/woman1.png",
        "Hanna"
      ],
    },
    {
      "home": "createTestimonialsCard",
      "post": "Great to work with and be part of my favorite team.",
      "author": "Jon Faster",
      "work": "System Administrator",
      "photo": [
        "./img/business-man-png.png",
        "Jon"
      ],
    },
    {
      "home": "createTestimonialsCard",
      "post": "Safety is my calling, everyone can feel at ease!",
      "author": "Margaret Bafol",
      "work": "information security specialist",
      "photo": [
        "./img/woman.png",
        "Margaret"
      ],
    },
    {
      "home": "createTestimonialsCard",
      "post": "I create apps and get inspiration from the team.",
      "author": "Ban Thuda",
      "work": "Developer",
      "photo": [
        "./img/man-arms-crossed-png.png",
        "Ban"
      ],
    },
  ];

  sliderWrap.insertAdjacentHTML('beforeend', section.testimonials(block))
  const $testimonialsCardWrap = document.querySelector('.testimonials__card-block-wrap');
  const button = document.querySelectorAll('.testimonials__btn');
  let reverseArrAllCardSlide = Object.assign([], arrOfObjectsForSlide).reverse();

  afterAll(() => {
    sliderWrap.innerHTML = '';
  })

  function newTestImonialsSlider(callback) {
    setTimeout(function () {
      Slider = new TestimonialsSlider(button, $testimonialsCardWrap, arrOfObjectsForSlide, reverseArrAllCardSlide);
      callback(Slider)

    }, 500);
  }

  describe('wait load homePage', function () {
    beforeEach(function () {
      jasmine.clock().install();
    });

    afterEach(function () {
      jasmine.clock().uninstall();
    });

    beforeEach(() => {
      const callback = jasmine.createSpy('callback');
      newTestImonialsSlider(callback);
      jasmine.clock().tick(1000);
    });

    describe('new TestimonialsSlider()', () => {

      it('does something after 1 seconds', function () {
        const callback = jasmine.createSpy('callback');
        newTestImonialsSlider(callback);
        jasmine.clock().tick(1000);
        expect(callback).toHaveBeenCalledWith(Slider);
      });

      it('export const slider.sliderOneCard', () => {
        expect(TestimonialsSlider).toBeDefined();
      });
      it('initialize $testimonialsCardWrap', () => {
        expect(Slider.$testimonialsCardWrap).toBe($testimonialsCardWrap);
      });
      it('initialize step = 0', () => {
        expect(Slider.step).toBe(0);
      });
      it('initialize offset = 0', () => {
        expect(Slider.offset).toBe(0);
      });
      it('initialize button', () => {
        expect(Slider.button).toBe(button);
      });
      it('initialize arrAllCards', () => {
        expect(Slider.arrAllCards).toEqual(arrOfObjectsForSlide);
      });
      it('initialize arrAllCardsReverse', () => {
        expect(Slider.arrAllCardsReverse).toEqual(reverseArrAllCardSlide);
      });
      it('arrAllCards.length = 5', () => {
        expect(Slider.arrAllCards.length).toBe(5);
      })
      it('arrAllCardsReverse.length = 5', () => {
        expect(Slider.arrAllCardsReverse.length).toBe(5);
      })
      it('Slider.button.length = 2', () => {
        expect(Slider.button.length).toBe(2);
      })
      it('Slider.slide = toBeDefined()', () => {
        expect(Slider.slide).not.toBeDefined();
        expect(Slider.slides).not.toBeDefined();
      })
    });

    describe('Slider.createCard()', () => {
      beforeEach(() => {
        Slider.createCard()
      });
      it('createCard() toHaveBeenCalled', () => {
        let spy = spyOn(Slider, 'createCard');
        let spy2 = spyOn(Slider, 'createCardIfButtonNext');
        Slider.createCard()
        Slider.createCardIfButtonNext();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalledTimes(1);
        expect(Slider.step).toBe(1);
        expect(Slider.offset).toBe(1);
      })
      it('lider.slides.style.left = 0px', () => {
        expect(Slider.slides.style.left).toBe('0px');
        expect(Slider.slides.style.right).toBe('');
      })
      it('Slider.offSet2 = 0', () => {
        expect(Slider.offSet2).toBe(0);
      })
      it('Slider.step = if/else', () => {
        let step = Slider.step + 1
        let arrAllCardsLength = Slider.arrAllCards.length
        if (step === arrAllCardsLength) {
          expect(Slider.step).toBe(0);
        }
        expect(Slider.step).toBe(1);
      })
      it('Slider.offset = 1', () => {
        expect(Slider.offset).toBe(1);
      })
      it('Slider.slide = toBeDefined()', () => {
        expect(Slider.slide).not.toBeDefined();
        expect(Slider.slides).toBeDefined();
      })
      it('Slider.slide = toBeDefined()', () => {
        let s = document.querySelector(`.testimonials__card-block`);
        expect(Slider.slide).not.toBeDefined();
        expect(Slider.slides).toBeDefined();
        expect(Slider.slides).toBe(s);
      })
    });

    describe('Slider.moveCard()', () => {
      beforeEach(() => {
        Slider.moveCard()
      });
      it('moveCard() toHaveBeenCalled', () => {
        let spy = spyOn(Slider, 'moveCard');
        Slider.moveCard()
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
      })
      it('Slider.offSet2 = 0', () => {
        expect(Slider.offSet2).toBe(2);
      })
      it('Slider.step = 0', () => {
        expect(Slider.step).toBe(0);
      })
      it('Slider.offset = 0', () => {
        expect(Slider.offset).toBe(0);
      })
      it('Slider.slide = toBeDefined()', () => {
        expect(Slider.slide).toBeDefined();
        expect(Slider.slides).not.toBeDefined();
      })
    });


    describe('click', () => {
      beforeEach(() => {
        Slider.addEventButton();
      });
      it('btnPrev one click', () => {
        let spy = spyOn(Slider, 'moveCard');
        const prevBtn = Slider.button[0];
        prevBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(Slider.slides).toBeDefined();
        expect(Slider.slides.style.left).toBe('0px');
        expect(Slider.slides.style.right).toBe('');
        expect(Slider.offSet2).toBe(0);
        expect(Slider.step).toBe(1);
        expect(Slider.offset).toBe(1);
      });
      it('btnPrev double click', () => {
        let spy = spyOn(Slider, 'moveCard');
        const prevBtn = Slider.button[0];
        prevBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(Slider.slides.style.left).toBe('0px');
        expect(Slider.slides.style.right).toBe('');
        prevBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(2);
        expect(Slider.slides).toBeDefined();
        expect(Slider.slides.style.left).toBe('560px');
        expect(Slider.slides.style.right).toBe('');
        expect(Slider.offSet2).toBe(0);
        expect(Slider.step).toBe(2);
        expect(Slider.offset).toBe(1);
        expect(Slider.slide).not.toBeDefined();
      });
    });


    describe('click', () => {
      beforeEach(() => {
        Slider.addEventButton();
      });
      it('nextBtn one click', () => {
        let spy = spyOn(Slider, 'moveCard');
        const nextBtn = Slider.button[1];
        nextBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(Slider.slides).toBeDefined();
        expect(Slider.offSet2).toBe(0);
        expect(Slider.step).toBe(1);
        expect(Slider.offset).toBe(1);
        expect(Slider.slides.style.left).toBe('');
        expect(Slider.slides.style.right).toBe('0px');

      })
      it('nextBtn double click', () => {
        let spy = spyOn(Slider, 'moveCard');
        const nextBtn = Slider.button[1];
        nextBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(Slider.slides.style.left).toBe('');
        expect(Slider.slides.style.right).toBe('0px');
        nextBtn.click();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(2);
        expect(Slider.slides).toBeDefined();
        expect(Slider.offSet2).toBe(0);
        expect(Slider.step).toBe(2);
        expect(Slider.offset).toBe(1);
        expect(Slider.slides.style.left).toBe('');
        expect(Slider.slides.style.right).toBe('560px');
        expect(Slider.slide).not.toBeDefined();
      });
    });

    describe('Slider.carusel()', () => {
      beforeEach(() => {
        Slider.addIntervalEventOnCard();
        Slider.addIntervalEventOnButton();
        Slider.caruselSlider();
        Slider.moveCard();
      });

      it('carusel()', () => {
        expect(Slider.offSet2).toBe(2);
        expect(Slider.step).toBe(0);
        expect(Slider.offset).toBe(0);
      });
      it('carusel() toHaveBeenCalled', () => {
        let spy = spyOn(Slider, 'moveCard');
        let spy2 = spyOn(Slider, 'addIntervalEventOnCard');
        let spy3 = spyOn(Slider, 'addIntervalEventOnButton');
        Slider.moveCard();
        Slider.caruselAction();
        Slider.caruselSlider();
        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
        expect(spy3).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalledTimes(1);
        expect(spy3).toHaveBeenCalledTimes(1);
        expect(Slider.interval).toBe(4);
        expect(Slider.slide).toBeDefined();
      });
    });

    describe('Slider.caruselAction()', () => {
      beforeEach(() => {
        Slider.addIntervalEventOnCard();
        Slider.addIntervalEventOnButton();
        Slider.caruselAction();
        Slider.moveCard();
        Slider.caruselSlider();
      });

      it('caruselAction()', () => {
        expect(Slider.offSet2).toBe(2);
        expect(Slider.step).toBe(1);
        expect(Slider.offset).toBe(1);
      });
      it('caruselAction() toHaveBeenCalled moveCard()', () => {
        let spy = spyOn(Slider, 'moveCard');
        let spy2 = spyOn(Slider, 'addIntervalEventOnCard');
        let spy3 = spyOn(Slider, 'addIntervalEventOnButton');
        let spy4 = spyOn(Slider, 'createCard');
        Slider.createCard()
        Slider.moveCard();
        Slider.caruselSlider();
        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
        expect(spy3).toHaveBeenCalled();
        expect(spy4).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(Slider.interval).toBe(4);
        expect(Slider.slide).toBeDefined();
        expect(Slider.slides).toBeDefined();
        expect(Slider.slides.style.left).toBe('0px');
        expect(Slider.slides.style.right).toBe('');
      });
    });

  });
});
