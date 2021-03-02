import React, { useEffect } from 'react';

import Form from './Form';

export default function Login(props) {
  useEffect(() => {
    props.setHeaderNavLinkData('/signup', 'Регистрация');

    return () => {
      props.setHeaderNavLinkData('/', '');
    }
  }, [props]);

  return (
    <div className="auth">
      <Form
        name="login"
        onSubmit={props.onSubmit}
        title="Вход"
        isLoading={props.isLoading}
        loadingButtonTitle="Вход..."
        buttonName="Войти"
      />
    </div>
  )
}