
import logo from '../images/logo.svg';

function  Header(props) {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Логотип Mesto"/>
    </header>
  );
}

export default Header;