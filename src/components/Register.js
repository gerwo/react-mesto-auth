
import React, {useEffect} from 'react';
import Form from './Form';

function Register(props){

  useEffect(() => {
    props.setHeaderNavLinkData('/signin', 'Войти');

    return () => {
      props.setHeaderNavLinkData('/', '');
    }
  }, [props]);

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