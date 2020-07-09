const imageClickedPopup = document.querySelector(".popup__image");
const imagePopupTitle = document.querySelector(".popup__image-title");
const imagePopup = document.querySelector(".popup_type_image");

const openModal = (modalWindow) => {
  modalWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEsc);
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
    // this._card
    //   .querySelector(".element")
    //   .addEventListener("click", this._handleDeleteCard);
    this._card
      .querySelector(".element__image")
      .addEventListener("click", this._handlePreviewPicture);
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

  _handleLikeIcon(evt) {
    evt.target.classList.toggle("element__like-btn_clicked");
  }

  _handleDeleteCard(evt) {
    evt.target.closest(".element").remove();
  }

  _handlePreviewPicture() {
    imageClickedPopup.src = this._link;
    imagePopupTitle.textContent = this._name;
    openModal(imagePopup);
  }
}

export default Card;
