
import React from 'react';
import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

function  Header(props) {
  console.log(props)
  return (
    <header className="header">
      <div className="header__menu">
        <p className="header__user-login">{props.userLogin}</p>
        <NavLink
            to={props.navlinkPath}
            onClick={props.onSignOut}
            className="header__link opacity">

          {props.navlinkText}
        </NavLink>
      </div>
      <img src={logo} className="logo" alt="Логотип Mesto"/>
    </header>
  );
}

export default Header;