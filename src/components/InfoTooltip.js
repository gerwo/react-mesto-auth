import React, {useRef} from 'react';

function  InfoTooltip(props) {

  const popup = useRef();

  function handleLayoutClick() {
    props.onLayout(popup.current);
  }

  return (
    <div ref={popup} className={`popup popup__${props.name} ${props.isOpen && 'popup_opened'}`} role="dialog" onClick={handleLayoutClick}>
      <div className="popup__container popup__info">
        <button className="button button_type_close opacity" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <img src={props.image} className="popup__info_image" alt="Изображение результата запроса"/>
        <p className="popup__info_message"> {props.message}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;