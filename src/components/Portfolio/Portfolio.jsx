import React, { useState } from "react";
import "./portfolio.css";
import ModalCallback from "../ModalCallback/ModalCallback";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Services from "../Services/Services";
import PortfolioCardAbout from "../PortfolioCardAbout/PortfolioCardAbout";

const Portfolio = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const portfolioBase = [
    {
      name: "Happy Del",
      title:
        "Агрегатор доставки еды на дом по регионам России. Стартап мобильное приложение для android с нуля.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard1.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard1Hover.png",
      url: "/happy-del"
    },
    {
      name: "Helpoint",
      title:
        "Сервис психологической онлайн помощи. Редизайн всего веб сайта, улучшенное юзабилити.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard2.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard2Hover.png",
      url: "/happy-del"
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
            <PortfolioCard
              name={obj.name}
              title={obj.title}
              urluh={obj.imageUrlUnHover}
              urlh={obj.imageUrlHover}
              url={obj.url}
            />
          ))}
        </div>
      </div>
      <Services />
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
              <button className="callbackMOdalBtn" callbackMOdalBtn>
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
      <div className="teamContent">
        <h3>Наша команда профессионалов мечты</h3>
        <div className="teamList">
          <div className="teamItem">
            <div className="teamItemImg">
            <div className="teamItemTitle">
                <h3>Андрей Момотов</h3>
                <p>Product designer</p>
              </div>
              <img src="./images/team/Card team.png" alt="" />
            </div>
          </div>
          <div className="teamItem">
            <div className="teamItemImg">
            <div className="teamItemTitle">
                <h3>Илья Пугачьов</h3>
                <p>Web development</p>
              </div>
              <img src="./images/team/Card team-1.png" alt="" />
            </div>
          </div>
          <div className="teamItem">
            <div className="teamItemImg">
              <div className="teamItemTitle">
                <h3>Лидия Лебедева</h3>
                <p>Marketer</p>
              </div>
              <img src="./images/team/Card team-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
