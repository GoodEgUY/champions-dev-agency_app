import React, { useState } from "react";
import "./introcontent.css";

import ModalCallback from "../ModalCallback/ModalCallback";

const IntroContent = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened ? (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}

      <div className="introContent">
        <div className="introText">
          <h3 className="introTitle">
            <span>Зарабатывайте</span> в 3 раза больше благодаря mobile super app при - ложению для общепита уже через 1 месяца работы с момента запуска
          </h3>
          <p className="introParag">
          У нас уже есть кликабельный прототип приложения с уникальными функциями которые проверенны реальными потенциальными пользователями
          </p>
          <button
            className="callbackBtn"
            onClick={() => {
              setModalOpened(true);
            }}
          >
            заказать услугу
          </button>
        </div>
        <div className="introImages">
          <img
            src="./images/intro.png"
            alt="SergeyRomanov"
            className="introImage"
          />
          <img src="./images/pizza.png" alt="" className="telImage" />
          <img src="./images/Rolls.png" alt="" className="noteImage" />
          <img src="./images/burger.png" alt="" className="pcImage" />
        </div>
      </div>
    </>
  );
};
export default IntroContent;
