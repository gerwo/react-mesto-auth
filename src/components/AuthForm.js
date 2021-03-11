import React, {useState} from 'react';

function AuthForm(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(evt){
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt){
    setPassword(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    props.onSubmit({email, password});
  }


  return (
      <form onSubmit={handleSubmit} name={props.name} className="form">
        <h2 className="form__title">{props.title}</h2>
        <input 
          value = {email}
          onChange = {handleEmailChange}
          name="email-input" 
          type="email" 
          className="form__input form__input_type_email" 
          placeholder="Email" 
          required 
          autoComplete="email" 
          maxLength="50" />
        <span className="form__input-error" id="email-input-error" />
          
        <input 
          value = {password}
          onChange = {handlePasswordChange}
          name="password-input" 
          type="password" 
          className="form__input form__input_type_password" 
          placeholder="Пароль" 
          required 
          autoComplete="password" 
          minLength="8" 
          maxLength="100"/>
        <span className="form__input-error" id="password-input-error" />
        
        <button type="submit" className="button button_type_submit-form opacity">{props.isLoading ? props.loadingButtonTitle : props.buttonTitle}</button>
      </form>
  )
}

export default AuthForm;