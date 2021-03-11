
import logo from '../images/logo.svg';
import { Route, Link } from 'react-router-dom';

function  Header(props) {

  return (
    <header className="header">
      <div className="header__menu">
        <Route path="/signin">
          <Link to="signup" className="header__link">Регистрация</Link>
        </Route>
        <Route path="/signup">
          <Link to="signin" className="header__link">Войти</Link>
        </Route>
        {props.isLoggedIn &&
        <>
          <p className="header__user-login">{props.userLogin}</p>
          <Link className="header__link" onClick={props.onSignOut}>Выйти</Link >
        </>
        }
      </div>
      <img src={logo} className="logo" alt="Логотип Mesto"/>
    </header>
  );
}

export default Header;