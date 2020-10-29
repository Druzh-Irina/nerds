const contactsButton = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsForm = contactsPopup.querySelector(".write-to-us-form");
const contactsName = contactsPopup.querySelector(".name-icon");
const contactsMail = contactsPopup.querySelector(".mail-icon");
const contactsLetter = contactsPopup.querySelector(".letter-icon");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

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

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

contactsForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactsMail.value || !contactsLetter.value) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-error");
  contactsPopup.offsetWidth = loginPopup.offsetWidth;
  contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", contactsName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});
