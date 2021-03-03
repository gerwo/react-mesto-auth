import React, {useEffect} from 'react';
import Form from './Form';

function Login(props) {

  useEffect(() => {
    props.setHeaderNavLinkData('/sign-up', 'Регистрация');

    return () => {
      props.setHeaderNavLinkData('/', '');
    }
  }, [props]);

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