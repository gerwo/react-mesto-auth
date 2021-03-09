
import React from 'react';
import logo from '../images/logo.svg';
import { NavLink, Route } from 'react-router-dom';

function  Header(props) {
  return (
    <header className="header">
      <div className="header__menu">
        <NavLink></NavLink>
      </div>
      <img src={logo} className="logo" alt="Логотип Mesto"/>
    </header>
  );
}

export default Header;