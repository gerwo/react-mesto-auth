import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register(props){

  return (
    <div className="register">
      <AuthForm
        name="registration"
        isLoading = {props.isLoading}
        onSubmit={props.onSubmit}
        title = "Регистрация"
        loadingButtonTitle = "Регистрация..."
        buttonTitle = "Зарегистрироваться"
      />
      <p className="auth__text">Уже зарегистрированы? <Link to="/signin" className="auth__link opacity">Войти</Link></p>
    </div>
  );
}

export default Register;