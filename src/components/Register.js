
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';

function Register(props){

  useEffect(() => {
    props.setHeaderNavLinkData('/signin', 'Войти');

    return () => {
      props.setHeaderNavLinkData('/', '');
    }
  }, []);

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
      <p className="auth__text">Уже зарегистрированы? <NavLink to="/signin" className="auth__link">Войти</NavLink></p>
    </div>
  );
}

export default Register;