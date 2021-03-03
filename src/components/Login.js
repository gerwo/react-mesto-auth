import React from 'react';
import Form from './Form';

function Login(props) {


  return (
    <div className="auth">
      <Form
        name="login"
        isLoading = {props.isLoading}
        onSubmit={props.onSubmit}
        title = "Войти"
        loadingButtonTitle = "Вход..."
        buttonTitle = "Войти"
      />
    </div>
  )
}

export default Login;