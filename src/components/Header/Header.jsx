import React, {useState} from "react";
import ModalContact from "../ModalContact/ModalContact";
import "./header.css"


const Header = () => {
    const [modalOpened,setModalOpened] = useState(false);
    return (
        <div className="header">
        <header>
            {modalOpened ? <ModalContact closeModal={() => {setModalOpened(false)}}/> : null}
            <div className="logo">
                <img src="./images/logo-ill.png" alt="Logo" className="partLogo"/>
                <img src="./images/logo.png" alt="Logo" className="partLogo" />
                
            </div>
            <div className="headerNav">
               <a href="/" className="headerNavLink">Портфолио</a>
               <a href="/services" className="headerNavLink">Услуги</a>
               <a href="/about" className="headerNavLink">О компании</a>
               <a href="/vacancies" className="headerNavLink">Вакансии</a>
            </div>
            <button className="contactBtn" onClick={ () => {setModalOpened(true)}}>СВЯЗАТЬСЯ</button>
        </header>
        </div>
    );
}
export default Header;