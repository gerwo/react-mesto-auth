import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup(props){

  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirm(props);
  }

  return (
    <PopupWithForm 
      title="Вы уверены?" 
      buttonName="Да" 
      name="confirm" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      isLoading={props.isLoading}
      onSubmit={handleSubmit}
      loadingButtonTitle = 'Удаление...'
      >
    </PopupWithForm>
  );
}

export default ConfirmPopup;