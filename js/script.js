var link = document.querySelector('.feedback-form');
var popup = document.querySelector('.modal-form');

if (popup) {

  var close = popup.querySelector('.modal-close');

  var form = popup.querySelector('form');
  var login = popup.querySelector('[name=user-name]');
  var email = popup.querySelector('[name=user-email]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
  });

  form.addEventListener('submit', function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value);
        localStorage.setItem('email', email.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        popup.classList.remove('modal-error');
      }
    }
  });


  var mapLink = document.querySelector('.map');

  var mapPopup = document.querySelector('.modal-map');
  var mapClose = mapPopup.querySelector('.modal-close');

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        mapPopup.classList.remove('modal-show');
      }
    }
  });

}

var catalog = document.querySelector('.js-catalog');

if (catalog) {
  var modalBasket = document.querySelector('.modal-basket');

  modalBasket.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('js-modal-close')) {
      evt.preventDefault();
      modalBasket.classList.remove('modal-show');
    }
  });

  catalog.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('button-buy')) {
      evt.preventDefault();
      modalBasket.classList.add('modal-show');
    }
  });

  window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalBasket.classList.contains('modal-show')) {
      modalBasket.classList.remove('modal-show');
    }
  }
});
}


// Слайдер

// Определяет индекс кнопки
var getIndex = function (buttons, button) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] === button) {
      return i;
    }
  }
  return null;
}

// Инициализация слайдера
var initSlider = function(buttons, buttonActive, slides, slideActive) {

  var switchSlide = function (button) {
    buttonActive.classList.remove('active');
    button.classList.add('active');
    buttonActive = button;
    var index = getIndex(buttons, button);

    // Поменять на классы
    slideActive.classList.remove('js-slide-active');
    slides[index].classList.add('js-slide-active');

    slideActive = slides[index];
  }

  var addClickHandler = function (button) {
    button.addEventListener('click', function (evt) {
      if (!evt.target.classList.contains('active')) {
        switchSlide(evt.target);
      }
    });
  }

  for (var i = 0; i < buttons.length; i++) {
    addClickHandler(buttons[i]);
  }
}

// Слайдер 1
var sliderButtons = document.querySelectorAll('.js-slider-btn');
var sliderButtonActive = document.querySelector('.js-slider-btn.active');
var sliderSlides = document.querySelectorAll('.js-slide');
var activeSlideActive = document.querySelector('.js-slide-active');

if (sliderButtons && sliderSlides) {
  initSlider(sliderButtons, sliderButtonActive, sliderSlides, activeSlideActive);
}


// Слайдер 2
var servicesButtons = document.querySelectorAll('.services-button');
var servicesButtonActive = document.querySelector('.services-button.active');
var servicesSlides = document.querySelectorAll('.services-slider .slide');
var servicesSlideActive = document.querySelector('.active-slide');

if (servicesButtons && servicesSlides) {
  initSlider(servicesButtons, servicesButtonActive, servicesSlides, servicesSlideActive);
}
