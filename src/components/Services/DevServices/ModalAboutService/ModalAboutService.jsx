import React from "react";
import "./modalaboutservice.css"


const ModalAboutService = (props) => {
  return (
  <div className="modalWrapper">
    <div className="modalAboutServiceBody">
      <img src="./images/cross.png" className="closeModal" alt="Close" width="24" height="24" onClick={props.closeModal} />
        <div className="aboutServiceFormContent">
        <ol>
            <li>Знакомство с компанией и продуктом (начальный бриф)</li>
            <li>Маркетинговые исследования для лендинга </li>
            <li>Анализ продукта (индивидуальный бриф на 40-60 вопросов)</li>
            <li>Создание прототипа в Moqups на основе проведенных исследований</li>
            <li>Отрисовка дизайна лендинга на тильде/Figma</li>
            <li>Адаптивная верстка</li>
            <li>Технические настройки</li>

        </ol>
        </div>
    </div>
  </div>
  
  
  );
}

export default ModalAboutService;