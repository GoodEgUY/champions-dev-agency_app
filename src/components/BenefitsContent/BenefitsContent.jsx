import React, {useState} from "react";
import "./benefitscontent.css";
import ModalCallback from "../ModalCallback/ModalCallback";
const BenefitsContent = () => {
  const [modalOpened, setModalOpened] = useState(false);
 
    
      
  return (
    <>
    {modalOpened ? (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}
    <div className="benefitsContent">
      <h3>4 пользы по которым выбирают Champions</h3>
      <div className="benefitsScreen">
        <img src="./images/benefitsImage.png" alt="" className="benefitsLogo" />
        <div className="benefitsScreenMobile">
          <div className="benefitsTitle">
            <div className="benefitsCartsFirst">
              <div className="benefitsCart">
                <img src="./images/Benefits/benefitsIcon1.png" alt="" />
                <h5>Крупные проекты</h5>
                <p>
                  В нашем портфолио уже имеются крупные проекты, которыми можно
                  поделиться и рассказать о них.
                </p>
              </div>
              <div className="benefitsCart">
                <img src="./images/Benefits/benefitsIcon2.png" alt="" />
                <h5>Гарантия качества</h5>
                <p>
                  Мы качественно и ответственно делаем свою работу. Мы любим то
                  чем занимаемся прямо сейчас.
                </p>
              </div>
            </div>
            <div className="benefitsCartsSecond">
              <div className="benefitsCart">
                <img src="./images/Benefits/benefitsIcon3.png" alt="" />
                <h5>Работаем по всему миру</h5>
                <p>
                  Мы работаем по всему миру и не ограничиваемся одной локацией
                  мы везде, по всюду.{" "}
                </p>
              </div>
              <div className="benefitsCart">
                <img src="./images/Benefits/benefitsIcon4.png" alt="" />
                <h5>5 лет опыта на рынке IT</h5>
                <p>
                  Мы уже имеем большой багаж знаний и навыков. И нам не сложно
                  решить поставленную задачу.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
            className="callbackBtn"
            onClick={() => {
              setModalOpened(true);
            }}
          >
            заказать услугу
          </button>
      </div>
    </div>
    </>
  );
};
export default BenefitsContent;
