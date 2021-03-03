
import React from 'react';
import Form from './Form';

function Register(props){

  return (

    <div className="register">
      <Form
        name="registration"
        isLoading = {props.isLoading}
        onSubmit={props.onSubmit}
        title = "Регистрация"
        loadingButtonTitle = "Регистрация..."
        buttonTitle = "Зарегистрироваться"
      />
    </div>
  );
}

export default Register;