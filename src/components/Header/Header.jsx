import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import ModalContact from "../ModalContact/ModalContact";
import "./header.css";

const Header = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
  <>
    <div className="header">
      
      <header>
        <div className="burgerHeader">
      <div className="logo">
          <img src="../images/logo-ill.png" alt="Logo" className="partLogo" width={47} height={47}/>
          <img src="../images/logo.png" alt="Logo" className="partLogo"  width={60} height={10}/>
        </div>
        <NavLink to="/" activeClassName="selected">
          <p className="headerNavLink">Главная</p>
        </NavLink>
        <NavLink to="/benefits">
          <p className="headerNavLink">Плюсы</p>
        </NavLink>
        <NavLink to="/portfolio">
          <p className="headerNavLink">Работы</p>
        </NavLink>
        <NavLink to="/services">
          <p className="headerNavLink">Услуги</p>
        </NavLink>
        <NavLink to="/team">
          <p className="headerNavLink">Команда</p>
        </NavLink>
        <NavLink to="/callback">
          <p className="headerNavLink">О компании</p>
        </NavLink>
      </div>
        
      </header>
    </div>
    </>
  );
};
export default Header;
