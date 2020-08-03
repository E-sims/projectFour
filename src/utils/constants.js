export const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
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

export const editPopup = document.querySelector(".popup_type_edit");
export const addPlacePopup = document.querySelector(".popup_type_add-place");

// Wrappers
export const editForm = editPopup.querySelector(".form");
export const addPlaceForm = addPlacePopup.querySelector(".form");

// Buttons and other DOM Elements
export const editButton = document.querySelector(".profile__edit-btn");
export const editCloseButton = editPopup.querySelector(".popup__close");

export const openAddPlacePopup = document.querySelector(".profile__add-btn");
export const closeAddPlacePopup = addPlacePopup.querySelector(".popup__close");

// Inputs
export const userName = document.querySelector(".profile__name");
export const userJob = document.querySelector(".profile__about");

// Form Data
export const nameInput = editForm.querySelector(".form__input_type_name");
export const jobInput = editForm.querySelector(".form__input_type_job");

export const placeNameInput = addPlaceForm.querySelector(
  ".form__input_type_place-name"
);
export const placeLinkInput = addPlaceForm.querySelector(
  ".form__input_type_link"
);
export const cardTemplateSelector = ".card-element";
export const listWrapper = ".elements__list";
export const popupImage = ".popup_type_image";