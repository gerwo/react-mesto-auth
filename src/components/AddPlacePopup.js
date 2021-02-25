import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    props.onAddPlace({name, link});  

    setTimeout(() => {
      setName('');
      setLink('');
    }, 700)
  }

  return (
    <PopupWithForm 
      title="Новое место" 
      buttonName="Создать" 
      name="card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      isLoading={props.isLoading}
      onSubmit= {handleSubmit}
      loadingButtonTitle = 'Сохранение...'>
      <input 
        value={name}
        onChange={handleChangeName}
        type="text" 
        className="popup__input popup__input_image-title" 
        name="image-title" 
        placeholder="Название" 
        required 
        minLength="2" 
        maxLength="30" 
        id="image-title"/>
      <span id="image-title-error" className="popup__error"></span>
      
      <input 
        value={link}
        onChange={handleChangeLink}
        type="url" 
        className="popup__input popup__input_image-link" 
        name="image-link" 
        placeholder="Ссылка на картинку" 
        required
        id="image-link"/>
      <span id="image-link-error" className="popup__error"></span>
   
   </PopupWithForm>
  )
}

export default AddPlacePopup;