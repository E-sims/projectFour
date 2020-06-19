function showInputError(form, input, {errorClass, inputErrorClass, ...rest}) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = input.validationMessage;
}

function hideInputError(form, input, {errorClass, inputErrorClass, ...rest}) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    hideInputError(form, input, rest);
  } else {
    showInputError(form, input, rest);
  }
}

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButton(inputs, button) {
  if (hasInvalidInput(inputs)) {
    button.classList.add("popup__btn_disabled");
  } else {
    button.classList.remove("popup__btn_disabled");
  }
}

function enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest }) {
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
    toggleButton(inputs, button);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(form, input, rest);
        toggleButton(inputs, button);
      });      
    });
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
});
