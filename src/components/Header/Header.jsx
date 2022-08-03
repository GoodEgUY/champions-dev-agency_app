import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <img src="../images/logo-ill.png" alt="Logo" className="partLogo" />
          <img src="../images/logo.png" alt="Logo" className="partLogo" />
        </div>
        <Link to="/">
          <p className="headerNavLink">Главная</p>
        </Link>
        <Link to="/benefits">
          <p className="headerNavLink">Премущества</p>
        </Link>
        <Link to="/portfolio">
          <p className="headerNavLink">Портфолио</p>
        </Link>
        <Link to="/services">
          <p className="headerNavLink">Услуги </p>
        </Link>
        <Link to="/team">
          <p className="headerNavLink">Команда </p>
        </Link>
        <Link to="/callback">
          <p className="headerNavLink">Связаться</p>
        </Link>
      </div>
        
      </header>
    </div>
    </>
  );
};
export default Header;
