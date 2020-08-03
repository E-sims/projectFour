import { openModal, closeModal } from "../utils/utils.js";

const imagePopupTitle = document.querySelector(".popup__image-title");
const imageClickedPopup = document.querySelector(".popup__image");
const imagePopup = document.querySelector(".popup_type_image");
const imagePopupClose = imagePopup.querySelector(".popup__close");

class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
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
      .addEventListener("click", this._handleCardClick);
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
