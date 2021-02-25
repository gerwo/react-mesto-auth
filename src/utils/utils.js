//Cards
const addCardButtonSelector = '.button_type_add-card';
const addCardPopUpSelector = '.popup__card';
const cardsNodeSelector = '.cards__block';
const imageNodeSelector = '.popup_image-substrate';
const formAddNewCardSelector = '.popup__form_add-new-card';
const cardTemplate = document.querySelector('#card-template').content;


//Profile
const formEditeProfileSelector = '.popup__form_edite-profile';
const fullNameSelector = '.profile__full-name';
const nameInput = document.querySelector('.popup__input_full-name');
const occupationSelector = '.profile__occupation';
const aboutInput = document.querySelector('.popup__input_occupation');
const editButtonSelector = '.button_type_edite-profile';
const editPopUpSelector = '.popup__avatar';
const popupConfirmSelector = '.popup_confirm';
const avatarSelector = '.profile__avatar';
const formEditAvatarSelector = '.popup__form_edit-avatar';
const editAvatarPopupSelector = '.popup_edit-avatar';
const editButtonAvatarSelector = '.button_type_edite-avatar';

const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

export {
  addCardButtonSelector,
  formAddNewCardSelector,
  addCardPopUpSelector,
  cardsNodeSelector,
  imageNodeSelector,
  cardTemplate,
  formEditeProfileSelector,
  fullNameSelector,
  nameInput,
  occupationSelector,
  aboutInput,
  editButtonSelector,
  editPopUpSelector,
  config,
  popupConfirmSelector,
  avatarSelector,
  formEditAvatarSelector,
  editAvatarPopupSelector,
  editButtonAvatarSelector
}