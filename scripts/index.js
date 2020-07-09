import FormValidtor from "./FormValidator.js";
import Card from "./Card.js";

const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

const editPopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_add-place");

const editFormValidator = new FormValidtor(defaultConfig, editPopup);
const cardFormValidator = new FormValidtor(defaultConfig, addPlacePopup);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// Wrappers
const editForm = editPopup.querySelector(".form");
const addPlaceForm = addPlacePopup.querySelector(".form");

// Buttons and other DOM Elements
const editButton = document.querySelector(".profile__edit-btn");
const editCloseButton = editPopup.querySelector(".popup__close");

const openAddPlacePopup = document.querySelector(".profile__add-btn");
const closeAddPlacePopup = addPlacePopup.querySelector(".popup__close");

// const closeImagePopup = imagePopup.querySelector(".popup__close");

// Inputs
const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__about");

// Form Data
const nameInput = editForm.querySelector(".form__input_type_name");
const jobInput = editForm.querySelector(".form__input_type_job");

const placeNameInput = addPlaceForm.querySelector(
  ".form__input_type_place-name"
);
const placeLinkInput = addPlaceForm.querySelector(".form__input_type_link");

function modalPopup(modal) {
  if (!modal.classList.contains("popup_opened")) {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  }
  modal.classList.toggle("popup_opened");
}

function closeModalClick(evt) {
  const modalClick = evt.target;
  if (!modalClick.classList.contains("popup_opened")) {
    return;
  }
  modalPopup(modalClick);
}

function closeModalEsc(evt) {
  const modalEsc = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    modalPopup(modalEsc);
  }
  evt.target.removeEventListener("keydown", closeModalEsc);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  modalPopup(editPopup);
}

editForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", () => {
  modalPopup(editPopup);
});
editCloseButton.addEventListener("click", () => {
  modalPopup(editPopup);
});

openAddPlacePopup.addEventListener("click", () => {
  modalPopup(addPlacePopup);
});
closeAddPlacePopup.addEventListener("click", () => {
  modalPopup(addPlacePopup);
});

// closeImagePopup.addEventListener("click", () => {
//   modalPopup(imagePopup);
// });

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const cardTemplateSelector = ".card-element";
// const cardTemplate = document
//   .querySelector(".card-element")
//   .content.querySelector(".element");
const list = document.querySelector(".elements__list");

// function createCard(card) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector(".element__image");
//   const cardTitle = cardElement.querySelector(".element__title");
//   const cardLikeButton = cardElement.querySelector(
//     ".element__like-btn_default"
//   );
//   const cardDeleteButton = cardElement.querySelector(".element__delete-btn");

//   cardTitle.textContent = card.name;
//   cardImage.style.backgroundImage = `url("${card.link}")`;

//   cardLikeButton.addEventListener("click", () => {
//     cardLikeButton.classList.toggle("element__like-btn_clicked");
//   });

//   cardDeleteButton.addEventListener("click", () => {
//     const listItem = cardDeleteButton.closest(".element");
//     listItem.remove();
//   });

//   cardImage.addEventListener("click", () => {
//     imageClickedPopup.src = card.link;
//     imagePopupTitle.textContent = card.name;
//     togglePopup(imagePopup);
//   });
//   return cardElement;
// }

const renderCard = (data, list) => {
  const card = new Card(data, cardTemplateSelector);
  list.prepend(card.getCard());
};

// function placeCard(card) {
//   listWrapper.prepend(card);
// }

initialCards.forEach((data) => {
  renderCard(data, list);
  // placeCard(createCard(card));
});

addPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  placeCard(createCard(card));
  togglePopup(addPlacePopup);
});

// document.addEventListener("click", closeModalClick);
// document.addEventListener("keydown", closeModalEsc);
