
import React, {useState, useEffect} from 'react';

function Register(props){

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setImage(props.image);
    setTitle(props.title);

    return () => {
      document.removeEventListener('keyup', props.onEscape);

      setImage('');
      setTitle('');
    };
  }, [props]);

  return (
    <div className={`popup popup__info ${props.isOpen && 'popup_opened'}`} role="dialog" >
      <div className="popup__container">
        <button className="button button_type_close opacity" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <form name={props.name} className="popup__form">
          <img src={image} alt="Результат запроса" className="popup__tooltip-image"/>
          <h2 className="popup__title popup__title_tooltip">{title}</h2>
        </form>
      </div>
    </div>
  );
}

export default Register;