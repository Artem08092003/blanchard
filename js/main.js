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
  simulateTouch: false, // запретить свайп только на мыши
  navigation: {
    nextEl: '.gallery__subblock--arrows .swiper-button-next',
    prevEl: '.gallery__subblock--arrows .swiper-button-prev',
  },
});


// gallery-numbering---------------------------------------------------------------------------------------------------------
document.querySelector('.gallery__swiper-button-prev').addEventListener('click', function () {
  document.querySelector('.gallery__numbering--1').classList.add('gallery__numbering--active');
  document.querySelector('.gallery__numbering--2').classList.remove('gallery__numbering--active');
});

document.querySelector('.gallery__swiper-button-next').addEventListener('click', function () {
  document.querySelector('.gallery__numbering--1').classList.remove('gallery__numbering--active');
  document.querySelector('.gallery__numbering--2').classList.add('gallery__numbering--active');
});


// catalog-accordion-------------------------------------------------------------------------------------------------------------
new Accordion('.catalog__accordion--container', {
  elementClass: 'catalog__accordion--content',
  triggerClass: 'catalog__accordion--trigger',
  panelClass: 'catalog__accordion--panel',
  activeClass: 'catalog__accordion--active'
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
const eventsSwiper = new Swiper('.events__block', {
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
});


// projects-swiper---------------------------------------------------------------------------------------------------------------------------------------
const projectsSwiper = new Swiper('.projects__swiper', {
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
});
