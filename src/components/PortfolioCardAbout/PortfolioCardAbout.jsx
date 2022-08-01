import React from "react";
import "./portfoliocardabout.css";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";

const PortfolioCardAbout = () => {
  return (
    <div className="portfolioItemContent">
      <div className="backToMain">
        <img src="./images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
        <a href="/">Назад</a>
      </div>
      <div className="portfolioAboutNav">
        <a href="/" className="headerNavLink">
          Начало продукта
        </a>
        <a href="/" className="headerNavLink">
          UX проектирование
        </a>
        <a href="/" className="headerNavLink">
          UI визуализация
        </a>
      </div>
      <Tabs>
        <div className="aboutDashboard">
          <div className="aboutDashboardNav">
            <div className="dashboardRow">
              <TabLink to="about">
                <img src="./images/dashboardnav.png" alt="" />
                <p>Описание</p>
              </TabLink>
              <TabLink to="problem">
                <img src="./images/dashboardnav.png" alt="" />
                <p>Проблема</p>
              </TabLink>
              <TabLink to="result">
                <img src="./images/dashboardnav.png" alt="" />
                <p>Результаты</p>
              </TabLink>
            </div>

            <div className="dashboardRow">
              <TabLink to="goals">
                <img src="./images/dashboardnav.png" alt="" />
                <p>Задачи</p>
              </TabLink>
              <TabLink to="time">
                <img src="./images/dashboardnav.png" alt="" />
                <p>Время</p>
              </TabLink>
              <TabLink to="stages">
                <img src="./images/dashboardnav.png" alt="" />
                <p>Этапы</p>
              </TabLink>
            </div>
          </div>
          <div className="aboutDashboardScreen">
            <TabContent for="about">
              <img
                src="./images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <p>
                Агрегатор доставки еды на дом по регионам России. Стартап
                мобильное приложение для android с нуля.
              </p>
            </TabContent>
            <TabContent for="problem">
              <p> /* coghzgdghdfgfdgdf */</p>
            </TabContent>
            <TabContent for="result">
              <img
                src="./images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <p>
                Получил первые продажи от конечных пользователей и так же от 4
                ресторанов для подключения их к приложению. Так же нашёл
                разработчика. 25 пользователей давали обратную связь, то что им
                было более удобно пользоваться мобильным приложением которое я
                создал.
              </p>
              <p>
                Получил первые продажи от конечных пользователей и так же от 4
                ресторанов для подключения их к приложению. Так же нашёл
                разработчика. 25 пользователей давали обратную связь, то что им
                было более удобно пользоваться мобильным приложением которое я
                создал.
              </p>
            </TabContent>
            <TabContent for="goals">
              <p> /* coghzgdghdfgfdgdf */</p>
            </TabContent>
            <TabContent for="time">
              <p> /* content for tab #1 */</p>
            </TabContent>
            <TabContent for="stages">
              <p> /* coghzgdghdfgfdgdf */</p>
            </TabContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};
export default PortfolioCardAbout;
