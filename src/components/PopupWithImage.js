import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ link, name }) {
    const imagePopupTitle = this._popupElement.querySelector(
      ".popup__image-title"
    );
    const imageClickedPopup = this._popupElement.querySelector(".popup__image");

    imageClickedPopup.src = link;
    imageClickedPopup.alt = name;
    imagePopupTitle.textContent = name;

    super.open();
  }
}

export default PopupWithImage;
