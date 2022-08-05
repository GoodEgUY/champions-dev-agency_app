import React from "react";
import "./modalvacancies.css";

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
              <input type="textr" placeholder="Введите ваше имя" className="mg-r-10" />
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <div className="inputRowVacancies">
              <input type="textr" placeholder="Введите ваше имя" className="mg-r-10"/>
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <div className="dragAndDropZone">
              <div className="dragTitle">
                <img src="./images/drag.png" alt="Cloud" />
              <p>Перетащите мышкой резюме в окно или нажмите на облочко</p>
              </div>             
            </div>
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
