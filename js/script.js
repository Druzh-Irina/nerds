// write-to-us-form

// Переменные
const contactsButton = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsForm = contactsPopup.querySelector(".write-to-us-form");
const contactsName = contactsPopup.querySelector(".login-icon-user");
const contactsMail = contactsPopup.querySelector(".login-icon-mail");
const contactsLetter = contactsPopup.querySelector(".login-icon-letter");

// Проверка работоспособности локального хранилища в браузерах
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

// Обработчик клика по кнопке "Напишите нам"
contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
    contactsName.value = storage;
    contactsMail.focus();
  } else {
    contactsName.focus();
  }
});

// Обработчик клика по кнопке "Закрыть"
contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

// Обработчик отправки данных в форме. Форму потрясет, если поля пустые.
contactsForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactsMail.value || !contactsLetter.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", contactsName.value);
    }
  }
});

// Обработчик закрытия модального окна по кнопке Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});



// Создание маркера на интерактивной карте
function initMap() {
  const coordinates = {lat: 59.938819, lng: 30.323026},

  map = new google.maps.Map(document.getElementById("interactive-map"), {
    center: coordinates
  });

  // Указываем свою иконку для маркера
  image = "img/map-marker.png";

  marker = new google.maps.Marker({

    // Указываем координаты маркера
    position: coordinates,

    // Указываем id карты, на которой должен появиться маркер
    map: map,

    // Указываем свою иконку для маркера
    icon: image
  });
}
