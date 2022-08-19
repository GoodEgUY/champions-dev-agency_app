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
            <span>Лучшее</span> решение для <br />
            Вашего бизнеса
          </h3>
          <p className="introParag">
            Создание сайтов и мобильных приложений для любого ресторана россии и
            мира.
          </p>
          <button
            className="callbackBtn"
            onClick={() => {
              setModalOpened(true);
            }}
          >
            заказать проект
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
