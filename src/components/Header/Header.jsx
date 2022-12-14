import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalContact from "../ModalContact/ModalContact";
import "./header.css";
import ModalVacancies from "../ModalVacancies/ModalVacancies";

const Header = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened ? (
        <ModalVacancies closeModal={() => setModalOpened(false)} />
      ) : null}
      <div className="header">
        <header>
          <div className="burgerHeader">
            <div className="logo">
              <img src="../images/Logo.png" alt="Logo" className="partLogo" />
            </div>
            <NavLink to="/">
              <div className="headerLaptopNavItem">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="#181A43"
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
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#181A43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.69021 9.12C3.50021 8.93 3.29021 8.84 3.04021 8.84C2.63021 8.84 2.32021 9.03 2.12021 9.42C1.92021 9.81 1.97021 10.18 2.29021 10.53C3.47021 11.59 4.22021 12.34 4.54021 12.78C4.95021 13.34 5.15021 14.16 5.15021 15.22C5.15021 16.53 5.65021 17.5 6.65021 18.17C7.21021 18.61 7.82021 18.94 8.50021 19.16V15.27C8.50021 14.33 8.17021 13.55 7.54021 12.92M16.4602 12.97C15.8402 13.59 15.5002 14.36 15.5002 15.27V19.2C16.4602 18.86 17.2602 18.33 17.9202 17.63C18.5702 16.93 18.9002 16.16 18.9002 15.22C18.9002 14.09 19.0902 13.28 19.4702 12.78C19.5602 12.62 19.7302 12.42 20.0002 12.17C20.2302 11.92 20.4702 11.68 20.7102 11.46C20.9402 11.25 21.1702 11.03 21.3902 10.81L21.7202 10.53C21.9102 10.34 22.0002 10.12 22.0002 9.87C22.0002 9.59 21.9102 9.34 21.7202 9.14C21.5302 8.94 21.3002 8.84 21.0002 8.84C20.7002 8.84 20.5002 8.93 20.3102 9.12M12.0002 20C12.6902 20 13.3602 19.91 14.0002 19.72V16.15C14.0002 15.56 13.8202 15.1 13.4102 14.66C13.0002 14.22 12.5302 14 12.0002 14C11.4702 14 11.0002 14.2 10.6202 14.61C10.2202 15 10.0002 15.46 10.0002 16.06V19.72C10.6402 19.91 11.3102 20 12.0002 20ZM9.00021 8.5C9.00021 9.33 8.33021 10 7.50021 10C6.67021 10 6.00021 9.33 6.00021 8.5C6.00021 7.67 6.67021 7 7.50021 7C8.33021 7 9.00021 7.67 9.00021 8.5ZM18.0002 8.5C18.0002 9.33 17.3302 10 16.5002 10C15.6702 10 15.0002 9.33 15.0002 8.5C15.0002 7.67 15.6702 7 16.5002 7C17.3302 7 18.0002 7.67 18.0002 8.5ZM13.5002 5.5C13.5002 6.33 12.8302 7 12.0002 7C11.1702 7 10.5002 6.33 10.5002 5.5C10.5002 4.67 11.1702 4 12.0002 4C12.8302 4 13.5002 4.67 13.5002 5.5ZM13.5002 11C13.5002 11.83 12.8302 12.5 12.0002 12.5C11.1702 12.5 10.5002 11.83 10.5002 11C10.5002 10.17 11.1702 9.5 12.0002 9.5C12.8302 9.5 13.5002 10.17 13.5002 11Z" />
                </svg>

                <p className="headerNavLink">Польза</p>
              </div>
            </NavLink>
            <NavLink to="/services">
              <div className="headerLaptopNavItem">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#181A43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.9998 3C16.8998 3 19.9998 6.1 19.9998 10C19.9998 12.8 18.3998 15.2 15.9998 16.3V21H8.99977V18H7.99977C6.89977 18 5.99977 17.1 5.99977 16V13H4.49977C4.09977 13 3.79977 12.5 4.09977 12.2L5.99977 9.7C6.19977 5.9 9.19977 3 12.9998 3ZM12.9998 1C8.39977 1 4.59977 4.4 4.09977 8.9L2.49977 11C1.89977 11.8 1.89977 12.8 2.29977 13.6C2.69977 14.3 3.29977 14.8 3.99977 14.9V16C3.99977 17.9 5.29977 19.4 6.99977 19.9V23H17.9998V17.5C20.4998 15.8 21.9998 13.1 21.9998 10C21.9998 5 17.9998 1 12.9998 1ZM13.9998 14H11.9998V13H13.9998V14ZM15.5998 9.5C15.2998 9.9 14.9998 10.3 14.4998 10.6V12H11.4998V10.6C10.0998 9.8 9.59977 7.9 10.3998 6.5C11.1998 5.1 13.0998 4.6 14.4998 5.4C15.8998 6.2 16.3998 8.1 15.5998 9.5Z" />
                </svg>
                <p className="headerNavLink">Решения</p>
              </div>
            </NavLink>
            <NavLink to="/portfolio">
              <div className="headerLaptopNavItem">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#181A43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.97 7.2698C21.36 6.8798 21.36 6.2498 20.97 5.8598L18.14 3.0298C17.75 2.6398 17.12 2.6398 16.73 3.0298L12.24 7.5198L8.35 3.6298C7.57 2.8498 6.3 2.8498 5.52 3.6298L3.62 5.5298C2.84 6.3098 2.84 7.5798 3.62 8.3598L7.51 12.2498L3 16.7598V20.9998H7.24L11.76 16.4798L15.65 20.3698C16.6 21.3198 17.88 20.9698 18.48 20.3698L20.38 18.4698C21.16 17.6898 21.16 16.4198 20.38 15.6398L16.49 11.7498L20.97 7.2698ZM5.04 6.9398L6.93 5.0398L8.2 6.3098L7.02 7.4998L8.43 8.9098L9.62 7.7198L10.82 8.9198L8.92 10.8198L5.04 6.9398ZM16.27 14.3798L15.08 15.5698L16.49 16.9798L17.68 15.7898L18.95 17.0598L17.05 18.9598L13.16 15.0698L15.06 13.1698L16.27 14.3798ZM6.41 18.9998H5V17.5898L14.61 7.9798L15.91 9.2798L16.02 9.3898L6.41 18.9998ZM16.02 6.5598L17.43 5.1498L18.84 6.5598L17.43 7.9698L16.02 6.5598Z"
                    
                  />
                </svg>
                <p className="headerNavLink">Работы</p>
              </div>
            </NavLink>

            <NavLink to="/team">
              <div className="headerLaptopNavItem">
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="#181A43"
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
                fill="#181A43"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.17 2L14 6.83V18H2V2H9.17ZM10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6L10 0ZM8 12C9.1 12 10 11.1 10 10C10 8.9 9.1 8 8 8C6.9 8 6 8.9 6 10C6 11.1 6.9 12 8 12ZM12 15.43C12 14.62 11.52 13.9 10.78 13.58C9.93 13.21 8.99 13 8 13C7.01 13 6.07 13.21 5.22 13.58C4.48 13.9 4 14.62 4 15.43V16H12V15.43Z" />
              </svg>

              <p className="headerNavLink">Контакты</p>
            </div>
            <div
              className="headerLaptopNavItem"
              onClick={() => setModalOpened(true)}
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="#181A43"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.99994 0V1.38C7.16994 1.05 6.27994 0.88 5.38994 0.88C3.59994 0.88 1.80994 1.56 0.439941 2.93L3.76994 6.26H4.87994V7.37C5.73994 8.23 6.85994 8.68 7.98994 8.73V11H4.99994V14C4.99994 15.1 5.89994 16 6.99994 16H16.9999C18.6599 16 19.9999 14.66 19.9999 13V0H7.99994ZM6.88994 6.41V4.26H4.60994L3.56994 3.22C4.13994 3 4.75994 2.88 5.38994 2.88C6.72994 2.88 7.97994 3.4 8.92994 4.34L10.3399 5.75L10.1399 5.95C9.62994 6.46 8.94994 6.75 8.21994 6.75C7.74994 6.75 7.28994 6.63 6.88994 6.41ZM17.9999 13C17.9999 13.55 17.5499 14 16.9999 14C16.4499 14 15.9999 13.55 15.9999 13V11H9.99994V8.41C10.5699 8.18 11.0999 7.84 11.5599 7.38L11.7599 7.18L14.5899 10H15.9999V8.59L9.99994 2.62V2H17.9999V13Z" />
              </svg>

              <p className="headerNavLink">Вакансии</p>
            </div>

            <div className="headerLaptopNavItem">
              <a href="tel:+79198805916">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="#181A43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54V2ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02V14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" />
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
