import React from "react";
import "./modalcallback.css";


const ModalCallback = (props) => {
  return (
  <div className="modalWrapper">
    <div className="modalCallbackBody">
      <img src="./images/cross.png" className="closeModal" alt="Close" width="24" height="24" onClick={props.closeModal} />
        <div className="callbackFormContent">
        <h4>Обсудить проект</h4>
        <p>Оставьте свои контакты и мы свяжемся, чтобы обсудить ваш проект.</p>
        <form action="" className="callbackForm" >
          <input type="textr"  placeholder="Введите ваше имя"/>
          <input type="tel" placeholder="+XXX XXX XXX"/>
          <button className="callbackMOdalBtn" callbackMOdalBtn>ОТПРАВИТЬ</button>
        </form>
        <span className="policyTitle">Нажимая кнопку «Отправить», Вы соглашаетесь с<br/><a href="">политикой конфиденциальности</a></span>
        </div>
    </div>
  </div>
  
  
  );
}

export default ModalCallback;