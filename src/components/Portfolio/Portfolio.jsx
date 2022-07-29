import React, { useState } from "react";
import "./portfolio.css";
import ModalCallback from "../ModalCallback/ModalCallback";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const portfolioBase = [
    {
      name: "Happy Del",
      title:"Агрегатор доставки еды на дом по регионам России. Стартап мобильное приложение для android с нуля.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard1.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard1Hover.png",
    },
    {
      name: "Helpoint",
      title:"Сервис психологической онлайн помощи. Редизайн всего веб сайта, улучшенное юзабилити.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard2.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard2Hover.png",
    }
  ];
  return (
    <div className="content">
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
          <img src="./images/telapp.png" alt="" className="telImage" />
          <img src="./images/note.png" alt="" className="noteImage" />
          <img src="./images/pc.png" alt="" className="pcImage" />
        </div>
      </div>
      <div className="benefitsContent">
        <img src="./images/benefitsImage.png" alt="" className="benefitsLogo" />
        <div className="benefitsTitle">
          <h3>Преимущества нашей сильной компании</h3>
          <div className="benefitsCartsFirst">
            <div className="benefitsCart">
              <img src="./images/benefitsIcon1.png" alt="" />
              <h5>Крупные проекты</h5>
              <p>
                В нашем портфолио уже имеются крупные проекты, которыми можно
                поделиться и рассказать о них.
              </p>
            </div>
            <div className="benefitsCart">
              <img src="./images/benefitsIcon2.png" alt="" />
              <h5>Гарантия качества</h5>
              <p>
                Мы качественно и ответственно делаем свою работу. Мы любим то
                чем занимаемся прямо сейчас.
              </p>
            </div>
          </div>
          <div className="benefitsCartsSecond">
            <div className="benefitsCart">
              <img src="./images/benefitsIcon3.png" alt="" />
              <h5>Работаем по всему миру</h5>
              <p>
                Мы работаем по всему миру и не ограничиваемся одной локацией мы
                везде, по всюду.{" "}
              </p>
            </div>
            <div className="benefitsCart">
              <img src="./images/benefitsIcon4.png" alt="" />
              <h5>5 лет опыта на рынке IT</h5>
              <p>
                Мы уже имеем большой багаж знаний и навыков. И нам не сложно
                решить поставленную задачу.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolioContent">
        <h3 className="portfolioTitle">Портфолио нашей команды</h3>
        <div className="portfolioCarts">
          {portfolioBase.map((obj) => (
            <PortfolioCard name={obj.name} title={obj.title} urluh={obj.imageUrlUnHover} urlh={obj.imageUrlHover} />
          ))}
          
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
