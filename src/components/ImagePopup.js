import React, {useRef} from 'react';

function ImagePopup(props) {
  const card = props.card;

  const popup = useRef();

  function handleLayoutClick() {
    props.onLayout(popup.current);
  }
  
  return (
    <div ref={popup} className={`popup popup_image ${props.isOpen ? 'popup_opened' : ''}`}  role="dialog" onClick={handleLayoutClick}>
      <div className="popup__image-container">
        <button className="button button_type_close opacity" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <img className="popup__image" alt={`Изображение ${card.name}`} src={card.link}/>
        <h2 className="popup__image-title">{card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;