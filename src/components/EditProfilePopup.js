import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm 
      title="Редактировать профиль" 
      buttonName="Сохранить" 
      name="profile" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      isLoading={props.isLoading}
      onSubmit={handleSubmit}
      loadingButtonTitle = 'Сохранение...'>
      <input 
        type="text" 
        className="popup__input popup__input_full-name" 
        name="name" 
        placeholder="ФИО" 
        required 
        minLength="2" 
        maxLength="20"
        id="full-name"
        value={name}
        onChange={handleChangeName}/>
      <span id="full-name-error" className="popup__error"></span>
      <input 
        type="text" 
        className="popup__input popup__input_occupation" 
        name="occupation" 
        placeholder="Род деятельности" 
        required 
        minLength="2" 
        maxLength="200"
        id="occupation"
        value={description}
        onChange={handleChangeAbout}/>
      <span id="occupation-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;