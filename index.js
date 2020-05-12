const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__about');

const togglePopup = () => {
  popup.classList.toggle('popup_opened');
}

const closePopup = () => {
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