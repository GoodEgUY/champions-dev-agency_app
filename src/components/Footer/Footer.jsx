import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerLogo">
        <div className="wrapperLogo">
          <img src="./images/logo-ill.png" alt="Logo" className="partLogo" />
          <img src="./images/logo.png" alt="Logo" className="partLogo" />
        </div>
        <p>Политика обработки персональных данных</p>
      </div>
      <div className="footerNav">
        <h5>Навигация</h5>
        <a href="">Портфолио</a>
        <a href="">Услуги</a>
        <a href="">О компании</a>
        <a href="">Вакансии</a>
      </div>
      <div className="footerMess">
        <h5>Мессенджеры</h5>
        <a href=""><img src="./images/telegBlack.png" alt="Telegram" />Telegram</a>
        <a href=""><img src="./images/whatsBlack.png" alt="Telegram" />WhatsApp</a>
      </div>
      <div className="footerContacts">
        <h5>Контакты</h5>
        <a href="tel:+79198805916">+7 (919) 880-59-16</a>
        <p>Пн-Вс с 9:00 до 22:00</p>
      </div>
    </footer>
  );
};
export default Footer;
