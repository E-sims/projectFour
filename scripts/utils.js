function modalPopup(modal) {
  modal.classList.toggle("popup_opened");
}

function closeModalClick(evt) {
  const modalClick = evt.target;
  if (!modalClick.classList.contains("popup_opened")) {
    return;
  }
  modalPopup(modalClick);
}
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

export { modalPopup, closeModalClick, openModal, closeModal, handleEsc };
