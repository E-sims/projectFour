import "../styles/index.css";
import FormValidtor from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { modalPopup, formSubmitHandler } from "../utils/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import {
  initialCards,
  defaultConfig,
  editPopup,
  addPlacePopup,
  editForm,
  addPlaceForm,
  editButton,
  editCloseButton,
  openAddPlacePopup,
  closeAddPlacePopup,
  placeNameInput,
  placeLinkInput,
  cardTemplateSelector,
  listWrapper,
} from "../utils/constants.js";

const editFormValidator = new FormValidtor(defaultConfig, editPopup);
const cardFormValidator = new FormValidtor(defaultConfig, addPlacePopup);
const photoPopup = new PopupWithImage("popup_type_image");

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

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

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplateSelector, () => {
        photoPopup.open({
          link: item.link,
          name: item.name,
        });
      });
      const cardElement = card.getCard();
      defaultCardList.addItem(cardElement);
    },
  },
  listWrapper
);

defaultCardList.renderItem();

addPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };

  renderItem(card, listWrapper);
  modalPopup(addPlacePopup);
});
