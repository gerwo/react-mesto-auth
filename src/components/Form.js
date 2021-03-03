import React, {useState} from 'react';

function Form(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(evt){
    setEmail(evt.target.value);
    console.log(email);
  }

  function handlePassw0rdChange(evt){
    setPassword(evt.target.value);
    console.log(email);
  }

  return (
      <form onSubmit={props.onSubmit} name={props.name} className="form">
        <h2 className="form__title">{props.title}</h2>
        <input 
          value = {email}
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
        <button type="submit" className="">{props.isLoading ? props.loadingButtonTitle : props.buttonTitle}</button>
      </form>
  )
}

export default Form;