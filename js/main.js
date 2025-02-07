const menuVisible = document.querySelector(".menu__visible");
const navbarVisible = document.querySelector(".navbar__visible");
const menuActive = document.querySelector('.menu__active');
const navbarHiddenVisible = document.querySelector('.navbar-hidden__visible');
const navbarAngleRight = document.querySelectorAll('.navbar__angle-right');
const navbarAngleDownMobile = document.querySelectorAll('.navbar-angle-down--mobile');
 

menuVisible.addEventListener("click", function () {
  event.preventDefault();
  document.querySelector(".navbar").classList.toggle("navbar--active");
});

menuActive.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href').replace('#', '');

  document.querySelector('.menu__active').classList.toggle('menu__active--active');
  document.querySelector('.navbar-hidden').classList.toggle('navbar-hidden--active');
  document.getElementById(id).classList.toggle('navbar-angle-down--mobile_active');
});

navbarHiddenVisible.addEventListener('click', function (e) {
  event.preventDefault(e);
  const id = e.target.getAttribute('href').replace('#', '');

  document.querySelector('.navbar-hidden__link').classList.toggle('navbar-hidden__link--active');
   document.getElementById(id).classList.toggle('navbar-angle-down--mobile_active');
  document
    .querySelector('.navbar-services').classList.toggle('navbar-services--active');
});

navbarVisible.addEventListener("click", function () {
  event.preventDefault();
  document.querySelector(".drop").classList.toggle("drop--active");
  //  document
  //   .querySelector(".navbar__visible")
  //   .classList.toggle("navbar__visible--active");
});

document.querySelectorAll('.navbar__visible').forEach((angle) =>
  angle.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    // document.querySelectorAll('.navbar__visible').forEach((ang) =>
    //   ang.classList.remove('navbar__visible--active')
    // );

    //  document.querySelectorAll('.navbar__angle-right').forEach((ang) =>
    //   ang.classList.remove('navbar__angle-right--active')
    // );

    angle.classList.toggle('navbar__visible--active');
    document.getElementById(id).classList.toggle('navbar__angle-right--active');
  })
);

document.querySelectorAll(".install-box__button").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document.querySelectorAll(".install-box__button").forEach(
      (child) => child.classList.remove("install-box__button--active")
    );
    document
      .querySelectorAll(".install-box__text-wrap")
      .forEach((child) =>
        child.classList.remove("install-box__text-wrap--active")
      );

    item.classList.add("install-box__button--active");
    document.getElementById(id).classList.add("install-box__text-wrap--active");
  })
);

document.querySelector(".install-box__button").click();

const faqCardIcon = document.querySelector(".faq-card__icon");

document.querySelectorAll(".faq-card__icon").forEach((Icon) =>
  Icon.addEventListener("click", function (event) {
    event.preventDefault();
    const id = event.target.getAttribute("href").replace("#", "");
    document
      .querySelectorAll(".faq-card__icon")
      .forEach((child) => child.classList.remove("faq-card__icon--active"));
    document
      .querySelectorAll(".faq-card__text")
      .forEach((child) => child.classList.remove("faq-card__text--active"));
    Icon.classList.toggle("faq-card__icon--active");
    document.getElementById(id).classList.add("faq-card__text--active");
  })
);

document.querySelector(".faq-card__icon").click();

let menuNav = document.querySelector('.menu-nav');
menuNav.addEventListener('click', function () {
  document.querySelector('.menu').classList.add('menu--active');
});

let menuMobileButton = document.querySelector('.menu__mobile-button');
menuMobileButton.addEventListener('click', function () {
  document.querySelector('.menu').classList.remove('menu--active');
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  longSwipesMs: 300,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
})



// now add mouseover and mouse out events on '.swiper-slide' elemnts to pause and resume the autoplay;

$('.swiper-slide').on('mouseover', function () {
  swiper.autoplay.stop();
});

$('.swiper-slide').on('mouseout', function () {
  swiper.autoplay.start();
});

$(document).ready(function () {

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(e) {
    e.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // function openModal() {
  //   let targetModal = $(this).attr("data-href");
  //   $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  //   $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  // }

  // function closeModal(event) {
  //   event.preventDefault();
  //   let modalOverlay = $(".modal__overlay");
  //   let modalDialog = $(".modal__dialog");
  //   modalOverlay.removeClass("modal__overlay--visible");
  //   modalDialog.removeClass("modal__dialog--visible");
  // }

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      let modalOverlay = $(".modal__overlay");
      let modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

});