
import React from 'react';

function Register(props){

  function handleSubmit(evt){
    evt.preventDefault();
  }

  return (
    <div className="register">
      <h2 className="form__title">{props.title}</h2>
      <form name={props.name} className="form" onSubmit={handleSubmit}>        
        <input 
          name="email-input" 
          type="email" 
          className="form__input form__input_type_email" 
          placeholder="Email" 
          required 
          autoComplete="email" 
          maxLength="50" />
        <span className="form__input-error" id="email-input-error" />
        
        <input 
          name="password-input" 
          type="password" 
          className="form__input form__input_type_password" 
          placeholder="Пароль" 
          required 
          autoComplete="password" 
          minLength="8" 
          maxLength="100" 
          readOnly />
        <span className="form__input-error" id="password-input-error" />
        
        <button type="submit" className="form__submit-button"></button>
      </form>
    </div>
  );
}

export default Register;