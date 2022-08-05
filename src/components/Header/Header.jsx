import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalContact from "../ModalContact/ModalContact";
import "./header.css";
import ModalVacancies from "../ModalVacancies/ModalVacancies";

const Header = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
    {modalOpened ? <ModalVacancies closeModal={() => setModalOpened(false)}/> : null}
      <div className="header">
        <header>
          <div className="burgerHeader">
            <div className="logo">
              <img
                src="../images/Logo.png"
                alt="Logo"
                className="partLogo" 
              />
            </div>
            <NavLink to="/" activeClassName="selected">
              <div className="headerLaptopNavItem">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69V2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z" />
                </svg>

                <p className="headerNavLink">Главная</p>
              </div>
            </NavLink>
            <NavLink to="/benefits">
              <div className="headerLaptopNavItem">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H4V18H14V16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM9 11C7.35 11 6 9.65 6 8V2H12V8C12 9.65 10.65 11 9 11ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z" />
                </svg>

                <p className="headerNavLink">Плюсы</p>
              </div>
            </NavLink>
            <NavLink to="/portfolio">
              <div className="headerLaptopNavItem">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.5 2.5C8.78 2.5 9 2.72 9 3V5H15V11H17C17.28 11 17.5 11.22 17.5 11.5C17.5 11.78 17.28 12 17 12H15V18H12.88C12.2 16.25 10.49 15 8.5 15C6.51 15 4.8 16.25 4.12 18H2V15.88C3.75 15.2 5 13.49 5 11.5C5 9.51 3.76 7.8 2.01 7.12L2 5H8V3C8 2.72 8.22 2.5 8.5 2.5ZM8.5 0.5C7.12 0.5 6 1.62 6 3H2C0.9 3 0.00999999 3.9 0.00999999 5V8.8H0.3C1.79 8.8 3 10.01 3 11.5C3 12.99 1.79 14.2 0.3 14.2H0V18C0 19.1 0.9 20 2 20H5.8V19.7C5.8 18.21 7.01 17 8.5 17C9.99 17 11.2 18.21 11.2 19.7V20H15C16.1 20 17 19.1 17 18V14C18.38 14 19.5 12.88 19.5 11.5C19.5 10.12 18.38 9 17 9V5C17 3.9 16.1 3 15 3H11C11 1.62 9.88 0.5 8.5 0.5Z" />
                </svg>
                <p className="headerNavLink">Работы</p>
              </div>
            </NavLink>
            <NavLink to="/services">
              <div className="headerLaptopNavItem">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.97 5.27005C18.36 4.88005 18.36 4.25005 17.97 3.86005L15.14 1.03005C14.75 0.640049 14.12 0.640049 13.73 1.03005L9.24 5.52005L5.35 1.63005C4.57 0.850049 3.3 0.850049 2.52 1.63005L0.62 3.53005C-0.16 4.31005 -0.16 5.58005 0.62 6.36005L4.51 10.25L0 14.76V19H4.24L8.76 14.48L12.65 18.3701C13.6 19.3201 14.88 18.9701 15.48 18.3701L17.38 16.47C18.16 15.69 18.16 14.42 17.38 13.64L13.49 9.75005L17.97 5.27005ZM2.04 4.94005L3.93 3.04005L5.2 4.31005L4.02 5.50005L5.43 6.91005L6.62 5.72005L7.82 6.92005L5.92 8.82005L2.04 4.94005ZM13.27 12.38L12.08 13.57L13.49 14.98L14.68 13.79L15.95 15.06L14.05 16.96L10.16 13.07L12.06 11.17L13.27 12.38ZM3.41 17H2V15.59L11.61 5.98005L12.91 7.28005L13.02 7.39005L3.41 17ZM13.02 4.56005L14.43 3.15005L15.84 4.56005L14.43 5.97005L13.02 4.56005Z" />
                </svg>
                <p className="headerNavLink">Услуги</p>
              </div>
            </NavLink>
            <NavLink to="/team">
              <div className="headerLaptopNavItem">
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 7C5.1 7 6 6.1 6 5C6 3.9 5.1 3 4 3C2.9 3 2 3.9 2 5C2 6.1 2.9 7 4 7ZM5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1ZM20 7C21.1 7 22 6.1 22 5C22 3.9 21.1 3 20 3C18.9 3 18 3.9 18 5C18 6.1 18.9 7 20 7ZM24 10.43C24 9.62 23.52 8.9 22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43ZM16.24 7.65C15.07 7.13 13.63 6.75 12 6.75C10.37 6.75 8.93 7.14 7.76 7.65C6.68 8.13 6 9.21 6 10.39V12H18V10.39C18 9.21 17.32 8.13 16.24 7.65ZM8.07 10C8.16 9.77 8.2 9.61 8.98 9.31C9.95 8.93 10.97 8.75 12 8.75C13.03 8.75 14.05 8.93 15.02 9.31C15.79 9.61 15.83 9.77 15.93 10H8.07ZM12 2C12.55 2 13 2.45 13 3C13 3.55 12.55 4 12 4C11.45 4 11 3.55 11 3C11 2.45 11.45 2 12 2ZM12 0C10.34 0 9 1.34 9 3C9 4.66 10.34 6 12 6C13.66 6 15 4.66 15 3C15 1.34 13.66 0 12 0Z" />
                </svg>

                <p className="headerNavLink">Команда</p>
              </div>
            </NavLink>
            {/* <NavLink to="/callback">
              <div className="headerLaptopNavItem">
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 7C5.1 7 6 6.1 6 5C6 3.9 5.1 3 4 3C2.9 3 2 3.9 2 5C2 6.1 2.9 7 4 7ZM5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1ZM20 7C21.1 7 22 6.1 22 5C22 3.9 21.1 3 20 3C18.9 3 18 3.9 18 5C18 6.1 18.9 7 20 7ZM24 10.43C24 9.62 23.52 8.9 22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43ZM16.24 7.65C15.07 7.13 13.63 6.75 12 6.75C10.37 6.75 8.93 7.14 7.76 7.65C6.68 8.13 6 9.21 6 10.39V12H18V10.39C18 9.21 17.32 8.13 16.24 7.65ZM8.07 10C8.16 9.77 8.2 9.61 8.98 9.31C9.95 8.93 10.97 8.75 12 8.75C13.03 8.75 14.05 8.93 15.02 9.31C15.79 9.61 15.83 9.77 15.93 10H8.07ZM12 2C12.55 2 13 2.45 13 3C13 3.55 12.55 4 12 4C11.45 4 11 3.55 11 3C11 2.45 11.45 2 12 2ZM12 0C10.34 0 9 1.34 9 3C9 4.66 10.34 6 12 6C13.66 6 15 4.66 15 3C15 1.34 13.66 0 12 0Z" />
                </svg>

                <p className="headerNavLink">О компании</p>
              </div>
            </NavLink> */}
          </div>
          <div className="headerLaptopContacs">
            <div className="headerLaptopNavItem">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="#2C2C2C"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17 2L14 6.83V18H2V2H9.17ZM10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6L10 0ZM8 12C9.1 12 10 11.1 10 10C10 8.9 9.1 8 8 8C6.9 8 6 8.9 6 10C6 11.1 6.9 12 8 12ZM12 15.43C12 14.62 11.52 13.9 10.78 13.58C9.93 13.21 8.99 13 8 13C7.01 13 6.07 13.21 5.22 13.58C4.48 13.9 4 14.62 4 15.43V16H12V15.43Z"
                  
                />
              </svg>

              <p className="headerNavLink">Контакты</p>
            </div>
            <div className="headerLaptopNavItem" onClick={() => setModalOpened(true)}>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="#2C2C2C"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99994 0V1.38C7.16994 1.05 6.27994 0.88 5.38994 0.88C3.59994 0.88 1.80994 1.56 0.439941 2.93L3.76994 6.26H4.87994V7.37C5.73994 8.23 6.85994 8.68 7.98994 8.73V11H4.99994V14C4.99994 15.1 5.89994 16 6.99994 16H16.9999C18.6599 16 19.9999 14.66 19.9999 13V0H7.99994ZM6.88994 6.41V4.26H4.60994L3.56994 3.22C4.13994 3 4.75994 2.88 5.38994 2.88C6.72994 2.88 7.97994 3.4 8.92994 4.34L10.3399 5.75L10.1399 5.95C9.62994 6.46 8.94994 6.75 8.21994 6.75C7.74994 6.75 7.28994 6.63 6.88994 6.41ZM17.9999 13C17.9999 13.55 17.5499 14 16.9999 14C16.4499 14 15.9999 13.55 15.9999 13V11H9.99994V8.41C10.5699 8.18 11.0999 7.84 11.5599 7.38L11.7599 7.18L14.5899 10H15.9999V8.59L9.99994 2.62V2H17.9999V13Z"
                  
                />
              </svg>

              <p className="headerNavLink">Вакансии</p>
            </div>
            
            <div className="headerLaptopNavItem" >
              <a href="tel:+79198805916">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#2C2C2C"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54V2ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02V14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z"
                  
                />
              </svg>
              <p className="headerNavLink">Позвонить</p>
              </a>
            </div>
            
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
