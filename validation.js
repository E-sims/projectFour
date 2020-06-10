function checkInputValidity(form, input) {}

function enableValidation({formSelector, inputSelector, ...rest}) {
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(settings.inputSelector)];
    inputs.forEach((input) => {
      //checkInputValidity();
      //toggleButton();
    });
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});