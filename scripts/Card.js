import { closeModalClick } from "./index.js";

const imagePopupTitle = document.querySelector(".popup__image-title");
const imageClickedPopup = document.querySelector(".popup__image");
const imagePopup = document.querySelector(".popup_type_image");
const imagePopupClose = imagePopup.querySelector(".popup__close");

const openModal = (modalWindow) => {
  modalWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEsc);
  document.addEventListener("click", closeModalClick);
};

const closeModal = (modalWindow) => {
  modalWindow.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEsc);
};

const ESC_KEY = 27;

const handleEsc = (evt) => {
  evt.preventDefault();

  const activePopup = document.querySelector(".popup_opened");

  if (evt.which === ESC_KEY) {
    closeModal(activePopup);
  }
};

class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardTemplate;
  }

  _setEventListeners() {
    this._card
      .querySelector(".element__like-btn_default")
      .addEventListener("click", this._handleLikeIcon);
    this._card
      .querySelector(".element__delete-btn")
      .addEventListener("click", this._handleDeleteCard);
    this._card
      .querySelector(".element__image")
      .addEventListener("click", (evt) => {
        this._handlePreviewPicture(evt);
      });
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle("element__like-btn_clicked");
  }

  _handleDeleteCard(evt) {
    evt.target.closest(".element").remove();
  }

  _handlePreviewPicture() {
    imageClickedPopup.src = "";
    imageClickedPopup.src = `${this._link}`;
    imagePopupTitle.textContent = `${this._name}`;
    openModal(imagePopup);
  }

  getCard() {
    this._card = this._getCardTemplate();

    this._card.querySelector(
      ".element__image"
    ).style.backgroundImage = `url("${this._link}")`;
    this._card.querySelector(".element__title").textContent = this._name;

    this._setEventListeners();

    return this._card;
  }
}

imagePopupClose.addEventListener("click", () => {
  closeModal(imagePopup);
});

export default Card;
