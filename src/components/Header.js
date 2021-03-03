
import React from 'react';
import logo from '../images/logo.svg';
import { NavLink, Route } from 'react-router-dom';

function  Header(props) {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Логотип Mesto"/>
    </header>
  );
}

export default Header;