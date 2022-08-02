import React, {useState} from "react";
import "./devservices.css";
import ModalAboutService from "./ModalAboutService";

const DevServices = () => {
  const [aboutServiceOpened, setAboutServiceOpened] = useState(false)
  const closeModal = () => {
    setAboutServiceOpened(false);
  }
  return (
    
      <div className="landingPageService">
        {aboutServiceOpened ? <ModalAboutService closeModal ={() => 
    setAboutServiceOpened(false)}/> : null}
      <div className="servicesCards">
        <div className="servicesRow">
          <div className="serviceCard">
            <div className="servicePrice">
              <img src="./images/Services/Icon.png" alt="" />
            </div>
            <div className="serviceTitle">
              <h5>Цель</h5>
              <p>
                В нашем портфолио уже имеются крупные проекты, которыми можно
                поделиться и рассказать о них.
              </p>
            </div>
          </div>
          {/* 2 card */}
          <div className="serviceCard">
            <div className="servicePrice">
              <img src="./images/Services/Icon1.png" alt="" />
            </div>
            <div className="serviceTitle">
              <h5>Возможности</h5>
              <p>
                Мы качественно и ответственно делаем свою работу. Мы любим то
                чем занимаемся прямо сейчас.
              </p>
            </div>
          </div>
        </div>
        {/* 3 card */}
        <div className="servicesRow">
          <div className="serviceCard">
            <div className="servicePrice">
              <img src="./images/Services/Icon2.png" alt="" />
            </div>
            <div className="serviceTitle">
              <h5>Результаты</h5>
              <p>
                Мы работаем по всему миру и не ограничиваемся одной локацией мы
                везде, по всюду.
              </p>
            </div>
          </div>
          {/* 4 card */}
          <div className="serviceCard">
            <div className="servicePrice">
              <img src="./images/Services/Icon3.png" alt="" />
              <div className="aboutService">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="#2C2C2C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z" />
                </svg>
                <p onClick={() => setAboutServiceOpened(true)}>Подробно</p>
              </div>
            </div>
            <div className="serviceTitle">
              <h5>Этапы работы</h5>
              <p>
                Мы уже имеем большой багаж знаний и навыков. И нам не сложно
                решить поставленную задачу.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="callServiceFormBody">
        <div className="callServiceFormContent">
          <h4>Разработка landing page<br/> под ключ для вас</h4>
          <div className="priceDoService">
          <p>От 30 000 тысяч рублей<br/> От 14 до 30 рабочих дней</p>
          </div>
          <form action="" className="callServiceForm">
            <input type="textr" placeholder="Введите ваше имя" />
            <input type="tel" placeholder="+XXX XXX XXX" />
            <button className="callServiceBtn">ОТПРАВИТЬ</button>
          </form>
          <div className="policyTitle">
            Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
            <a href="#" className="tBlue">политикой конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DevServices;
