import logo from "../images/logo.png";
import "../styles/layout/_header.scss";
import "../styles/core/_reset.scss"
import { AiFillGithub  } from "react-icons/ai";

const Header = () => {
  return <header className="header"><img src= {logo} alt="" className="header__logo"></img>
  
  <a href="http://beta.adalab.es/modulo-3-evaluacion-final-Carmenyo/"> <AiFillGithub className="header__icon"/>
  </a>

   </header>
};

export default Header;

