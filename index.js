let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__about');

let togglePopup = () => {
  popup.classList.toggle('popup_opened');
}

let closePopup = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  togglePopup();
})