function showInputError(form, input, rest) {
  
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    //hideError
  } else {
    //showError
  }
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(inputSelector)];
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(form, input, rest);
        //toggleButton();
      });      
    });
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
