import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const isOwn = props.owner._id === currentUser._id;

  const isLiked = props.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `button button_type_like opacity ${isLiked ? 'button_type_like_active' : ''}`
  );

  const cardDeleteButtonClassName = (
    `button button_type_delete-card ${isOwn ? 'button_type_delete-card-visible' : 'button_type_delete-card-hidden'}`
  );

  function handleClick() {
    props.onCardClick(props);
  }

  function handleLikeClick() {
    props.onCardLike(props);
  }

  function handleDeleteClick(){
    //console.log(props);
    props.onConfirmClick(props);
  }

  return (
    <li className="card"> 
      <img className="card__image" alt={`Изображение ${props.name}`} src={props.link} onClick={handleClick}/>
      <div className="card__content">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-block">
          <button className={cardLikeButtonClassName}  aria-label="Нравиться" type="button" onClick={handleLikeClick}></button>
          <p className="card__like-count">{props.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
    </li>
  );
}

export default Card;