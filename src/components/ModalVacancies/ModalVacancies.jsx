import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./modalvacancies.css";
import { useDropzone } from "react-dropzone";
import DragZone from "./DragZone/DragZone";

const ModalVacancies = (props) => {
  
  return (
    <div className="modalWrapper">
      <div className="modalVacanciesBody">
        <img
          src="./images/cross.png"
          className="closeModal"
          alt="Close"
          width="24"
          height="24"
          onClick={props.closeModal}
        />
        <div className="vacanciesFormContent">
          <h4>
            Требуется в продуктовую команду cпециалист по маракетингу и backend
            development
          </h4>

          <form action="" className="vacanciesForm">
            <div className="inputRowVacancies">
              <input
                type="textr"
                placeholder="Введите ваше имя"
                className="mg-r-10"
              />
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <div className="inputRowVacancies">
              <input
                type="textr"
                placeholder="Введите ваше имя"
                className="mg-r-10"
              />
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <DragZone/>
            <button className="vacanciesModalBtn">ОТПРАВИТЬ</button>
          </form>
          <span className="policyTitle">
            Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
            <a href="#">политикой конфиденциальности</a>
          </span>
         
        </div>
      </div>
    </div>
  );
};

export default ModalVacancies;
