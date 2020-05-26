// Wrappers
const editPopup = document.querySelector(".popup_type_edit");
const editForm = editPopup.querySelector(".form");

const addPlacePopup = document.querySelector(".popup_type_add-place");
const addPlaceForm = addPlacePopup.querySelector(".form");

// Buttons and other DOM Elements
const editButton = document.querySelector(".profile__edit-btn");
const editCloseButton = editPopup.querySelector(".popup__close");

const openAddPlacePopup = document.querySelector(".profile__add-btn");
const closeAddPlacePopup = addPlacePopup.querySelector(".popup__close");

// Inputs
const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__about");

// Form Data
const nameInput = editForm.querySelector(".form__input_type_name");
const jobInput = editForm.querySelector(".form__input_type_job");

function togglePopup(modal) {
  if (!modal.classList.contains("popup_opened")) {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  }

  modal.classList.toggle("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  togglePopup();
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
  const cardImage = cardTemplate.querySelector(".element__image");
  const cardTitle = cardTemplate.querySelector(".element__title");
  const cardLikeButton = cardTemplate.querySelector(".element__like-icon");
  const cardDeleteButton = cardTemplate.querySelector("element__delete-btn");

  cardTitle.textContent = card.name;
  cardImage.style.backgroundImage = "url(" + card.link + ")";

  // cardLikeButton.addEventListener("click", () => {
  //   // changeLikeColor()
  // });

  // cardDeleteButton.addEventListener("click", () => {
  //   // deleteCardInstance()
  // });
  return cardElement;
}

initialCards.forEach((card) => {
  listWrapper.prepend(createCard(card));
});
