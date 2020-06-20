// Wrappers
const editPopup = document.querySelector(".popup_type_edit");
const editForm = editPopup.querySelector(".form");

const addPlacePopup = document.querySelector(".popup_type_add-place");
const addPlaceForm = addPlacePopup.querySelector(".form");

const imagePopup = document.querySelector(".popup_type_image");
const imageClickedPopup = document.querySelector(".popup__image");
const imagePopupTitle = document.querySelector(".popup__image-title");

const popupContainer = document.querySelector(".popup__container");

// Buttons and other DOM Elements
const editButton = document.querySelector(".profile__edit-btn");
const editCloseButton = editPopup.querySelector(".popup__close");

const openAddPlacePopup = document.querySelector(".profile__add-btn");
const closeAddPlacePopup = addPlacePopup.querySelector(".popup__close");

const closeImagePopup = imagePopup.querySelector(".popup__close");

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

function togglePopup(modal) {
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
  togglePopup(modalClick);
}

function closeModalEsc(evt) {
  const modalEsc = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    togglePopup(modalEsc);
  }
  evt.target.removeEventListener("keydown", closeModalEsc);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  togglePopup(editPopup);
}

editForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", () => {
  togglePopup(editPopup);
});
editCloseButton.addEventListener("click", () => {
  togglePopup(editPopup);
});

openAddPlacePopup.addEventListener("click", () => {
  togglePopup(addPlacePopup);
});
closeAddPlacePopup.addEventListener("click", () => {
  togglePopup(addPlacePopup);
});

closeImagePopup.addEventListener("click", () => {
  togglePopup(imagePopup);
});

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

const cardTemplate = document
  .querySelector(".card-element")
  .content.querySelector(".element");
const listWrapper = document.querySelector(".elements__list");

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");
  const cardLikeButton = cardElement.querySelector(
    ".element__like-btn_default"
  );
  const cardDeleteButton = cardElement.querySelector(".element__delete-btn");

  cardTitle.textContent = card.name;
  cardImage.style.backgroundImage = "url(" + card.link + ")";

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("element__like-btn_clicked");
  });

  cardDeleteButton.addEventListener("click", () => {
    const listItem = cardDeleteButton.closest(".element");
    listItem.remove();
  });

  cardImage.addEventListener("click", () => {
    imageClickedPopup.src = card.link;
    imagePopupTitle.textContent = card.name;
    togglePopup(imagePopup);
  });
  return cardElement;
}

function placeCard(card) {
  listWrapper.prepend(card);
}

initialCards.forEach((card) => {
  placeCard(createCard(card));
});

addPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let card = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  placeCard(createCard(card));
  togglePopup(addPlacePopup);
});

document.addEventListener("click", closeModalClick);
document.addEventListener("keydown", closeModalEsc);
