// header-табы-select------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const tabsBtns = document.querySelectorAll('.header__btn--select--bottom');
  const containers = document.querySelectorAll('.header__select--container');

  tabsBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      const areActive = Array.from(containers).some(function (container) {
        return container.classList.contains('header__select--container--active');
      });

      if (areActive) {
        containers.forEach(function (container) {
          container.classList.remove('header__select--container--active');
        });
        tabsBtns.forEach(function (btn) {
          btn.classList.remove('header__btn--select--bottom--active');
        });
      } else {
        tabsBtns.forEach(function (btn) {
          btn.classList.remove('header__btn--select--bottom--active');
        });

        e.currentTarget.classList.add('header__btn--select--bottom--active');

        containers.forEach(function (container) {
          container.classList.remove('header__select--container--active');
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (contentAdd) {
          contentAdd.classList.add('header__select--container--active');
        });
      }
    });
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const isContainer = target.classList.contains('header__select--container');
    const isButton = target.classList.contains('header__btn--select--bottom');

    if (!isContainer && !isButton) {
      containers.forEach(function (container) {
        container.classList.remove('header__select--container--active');
      });

      tabsBtns.forEach(function (btn) {
        btn.classList.remove('header__btn--select--bottom--active');
      });
    }
  });
});


// hero-swiper--------------------------------------------------------------------------------------
const swiperHero = new Swiper('.hero__section--swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});


// gallery-choices-select-------------------------------------------------------------------------------------
const elementGallerySelect = document.querySelector('#selectGalleryCustom');
const choices = new Choices(elementGallerySelect, {
  searchEnabled: false,
  shouldSort: false
});


// gallery-swiper--------------------------------------------------------------------------------------------------------
const elementGallerySwiper = document.querySelector('#gallerySwiper');

const gallerySwiper = new Swiper(elementGallerySwiper, {
  // параметры
  loop: false,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  effect: 'slide',
  speed: 700,
  navigation: {
    nextEl: '.gallery__subblock--arrows .swiper-button-next',
    prevEl: '.gallery__subblock--arrows .swiper-button-prev',
  },

  pagination: {
    el: ".gallery__subblock--arrows .gallery__swiper-pagination",
    type: 'fraction',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },
    // when window width is >= 1551px
    1551: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }
});


// catalog-accordion-------------------------------------------------------------------------------------------------------------
new Accordion('.catalog__accordion--container', {
  elementClass: 'catalog__accordion--content',
  triggerClass: 'catalog__accordion--trigger',
  panelClass: 'catalog__accordion--panel',
  activeClass: 'catalog__accordion--active',
  openOnInit: [0]
});


// catalog-tabs-------------------------------------------------------------------------------------------------------------------------
document.querySelectorAll('.catalog__button--panel--list').forEach(function (catalogTabsBtn) {

  catalogTabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__button--panel--list').forEach(function (btn) {

      btn.classList.remove('catalog__button--panel--list--active')
    });

    e.currentTarget.classList.add('catalog__button--panel--list--active');

    document.querySelectorAll('.catalog__subblock--article').forEach(function (catalogContentRem) {
      catalogContentRem.classList.remove('catalog__sublock--article--active')
    });

    document.querySelectorAll(`[data-target-catalog="${path}"]`).forEach(function (catalogContentAdd) {
      catalogContentAdd.classList.add('catalog__sublock--article--active');
    });

  });
});


// events-swiper--------------------------------------------------------------------------------------------------------------------------------
const elementEventsSwiper = document.querySelector('.events__block');

const eventsSwiper = new Swiper(elementEventsSwiper, {
  // параметры
  loop: false,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  effect: 'slide',
  speed: 700,
  navigation: {
    nextEl: '.events__container .swiper-button-next',
    prevEl: '.events__container .swiper-button-prev',
  },
  pagination: {
    el: ".events__container .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    // when window width is >= 767x
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35
    },
    // when window width is >= 1023x
    1023: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },
    // when window width is >= 1551px
    1551: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }
});


// projects-swiper---------------------------------------------------------------------------------------------------------------------------------------
const elementProjectsSwiper = document.querySelector('.projects__swiper');

const projectsSwiper = new Swiper(elementProjectsSwiper, {
  // параметры
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  effect: 'slide',
  speed: 700,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    // when window width is >= 767x
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    // when window width is >= 1023x
    1023: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },
    // when window width is >= 1551px
    1551: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }
});


// footer-contact-form---------------------------------------------------------------------------------------------------------------
var selectorFormFooterTel = document.querySelector("input[type='tel']");
var selectorFormFooterName = document.querySelector("input[name='name']");
var imFooter = new Inputmask("+7 (999)-999-99-99");
imFooter.mask(selectorFormFooterTel);

new JustValidate('.footer__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
      function: function (nameValue) {
        const nameFooter = selectorFormFooterName.value;
        return /^[A-Za-zА-Яа-я]+$/.test(nameFooter);
      }
    },

    tel: {
      required: true,
      function: function (name, value) {
        const phoneFooter = selectorFormFooterTel.inputmask.unmaskedvalue();
        return Number(phoneFooter) && phoneFooter.length === 10;
      }
    },
  },

  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Имя должно содержать больше 2 букв',
      maxLength: 'Имя должно содержать не более 20 букв',
      function: 'Недопустимый формат'
    },

    tel: {
      required: 'Укажите ваш телефон',
      function: 'Введите 10 цифр',
    },
  },
});


// footer-map--------------------------------------------------------------------------------------------------------------------------------------------------

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap-1", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    behaviors: ['default']
  });

  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  // удаление обьекты на карте
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('scrollZoom');

  // Запрет скроллинга карты с помощью мыши
  myMap.behaviors.disable('scrollZoom');

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}


// Burger menu header---------------------------------------------------------------------------------------------------------------------------------------------
const headerBurger = document.querySelector('.header__burger--btn');
const headerBurgerLine = document.querySelectorAll('.header__burger--line');
const headerMenu = document.querySelector('.header__nav');
const headerMenuLinks = headerMenu.querySelectorAll('.header__item .header__item--link');
const headerBtnLogin = document.querySelector('.header__btn--login');

headerBurger.addEventListener('click', function () {

  headerBurgerLine.forEach(function (line) {
    line.classList.toggle('header__burger--line--active');
  });

  headerMenu.classList.toggle('header__nav--active');

  headerBtnLogin.classList.toggle('header__btn--login--active');

  document.body.classList.toggle('header__stop--scroll');
});

headerMenuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    headerBurgerLine.forEach(function (line) {
      line.classList.remove('header__burger--line--active');
    });

    headerMenu.classList.remove('header__nav--active');

    headerBtnLogin.classList.remove('header__btn--login--active');

    document.body.classList.remove('header__stop--scroll');
  });
});


// search btn header-----------------------------------------------------------------------------------------------------------------------------------------------
const headerSearchForm = document.querySelector('.header__container--search--top'),
  headerSearchBtnOpen = document.querySelector('.header__btn--search--top'),
  headerSearchBtn = document.querySelector('.header__form--search--btn--top'),
  headerSearchBtnClose = document.querySelector('.header__form--search--close--top');

headerSearchBtnOpen.addEventListener('click', function (el) {
  headerSearchForm.classList.add('header__container--search--top--active');
  headerSearchBtnOpen.classList.add('header__form--search--close--top')
});

headerSearchBtnClose.addEventListener('click', function () {
  headerSearchForm.classList.remove('header__container--search--top--active');
  headerSearchBtnOpen.classList.remove('header__form--search--close--top')
});


// aria-label for swiper btn-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var nextButtons = document.querySelectorAll('.swiper-button-next');
var prevButtons = document.querySelectorAll('.swiper-button-prev');

// Устанавливаем aria-label для всех кнопок навигации
nextButtons.forEach(function (button) {
  button.setAttribute('aria-label', 'Следующий слайд');
});

prevButtons.forEach(function (button) {
  button.setAttribute('aria-label', 'Предыдущий слайд');
});
