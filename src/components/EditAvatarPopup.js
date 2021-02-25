import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props){

  const avatarRef = React.useRef();

  function handleSubmit(e){
    e.preventDefault();
    
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    
    setTimeout(() => {
      avatarRef.current.value = '';
    }, 700);
  }

  return (
    <PopupWithForm 
      title="Обновить аватар" 
      buttonName="Сохранить" 
      name="avatar" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      isLoading={props.isLoading}
      onSubmit={handleSubmit}
      loadingButtonTitle = 'Сохранение...'
      >
      <input
        ref={avatarRef}
        type="url" 
        className="popup__input popup__input_avatar-link" 
        name="avatar" 
        placeholder="Ссылка на картинку" 
        required
        id="avatar"/>
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;