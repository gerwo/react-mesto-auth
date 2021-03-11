import AuthForm from './AuthForm';

function Login(props) {

  return (
    <div className="auth">
      <AuthForm
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