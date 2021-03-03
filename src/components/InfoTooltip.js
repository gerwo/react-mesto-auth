import React, {useRef} from 'react';

function  InfoTooltip(props) {

  const popup = useRef();

  function handleLayoutClick() {
    props.onLayout(popup.current);
  }

  return (
    <div ref={popup} className={`popup popup__${props.name} ${props.isOpen && 'popup_opened'}`} role="dialog" onClick={handleLayoutClick}>
      <div className="popup__container">
        <button className="button button_type_close opacity" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <img src={props.image}/>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;