import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _getInputValues() {}

  setEventListeners() {
    super.setEventListeners();
  }

  close() {
    super.close();
  }
}

export default PopupWithForm;
