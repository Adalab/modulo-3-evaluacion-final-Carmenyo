import logo from "../images/logo.png";
import "../styles/layout/_header.scss";


const Header = () => {
  return <header className="header"><img src= {logo} alt="" className="header__logo"></img>
  <hr className="hr" />
   </header>
};

export default Header;

