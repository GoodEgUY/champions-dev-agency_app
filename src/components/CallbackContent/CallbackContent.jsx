import React from "react";
import "./callbackcontent.css"

const CallbackContent = () => {
    return(
        <div className="callbackContent">
        <img src="./images/userLetter.png" alt="" width={558} height={458} />
        <div className="windowCallbackBody">
          <div className="callbackFormContent">
            <h4>Будьте на шаг впереди ваших конкурентов</h4>
            <p>
              Оставьте ваши контакты и мы <br />
              перезвоним вам для достижения ваших больших или маленьких целей
            </p>
            <form action="" className="callbackForm">
              <input type="textr" placeholder="Введите ваше имя" />
              <input type="tel" placeholder="+XXX XXX XXX" />
              <button className="callbackModalBtn" >
                ОТПРАВИТЬ
              </button>
            </form>
            <span className="policyTitle">
              Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
              <a href="">политикой конфиденциальности</a>
            </span>
          </div>
        </div>
      </div>
    );
}
export default CallbackContent;