import React, { useEffect } from 'react';

export default function Login(props) {
  useEffect(() => {
    props.setHeaderNavLinkData('/signup', 'Регистрация');

    return () => {
      props.setHeaderNavLinkData('/', '');
    }
  }, [props]);

  return (
    <div className="auth">
      <h2 className="form__title">{props.title}</h2>
      <form onSubmit={props.onSubmit} name="login" title="Авторизация" className="form">
         <input 
          value={email || ''} 
          onChange={handleEmailChange} 
          name="email-input" 
          type="email" 
          className="form__input form__input_type_email" 
          placeholder="Email" 
          required 
          autoComplete="email" 
          maxLength="50" />
          <span className="form__input-error" id="email-input-error" />
          
          <input 
            value={password || ''} 
            onChange={handlePasswordChange} 
            name="password-input" 
            type="password" 
            className="form__input form__input_type_password" 
            placeholder="Пароль" 
            required 
            autoComplete="password" 
            minLength="8" 
            maxLength="100" 
            readOnly 
            onFocus={handleFocus} />
          <span className="form__input-error" id="password-input-error" />

      </form>
    </div>
  )
}