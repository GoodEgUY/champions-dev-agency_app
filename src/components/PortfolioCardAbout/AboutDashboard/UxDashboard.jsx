import React from "react";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";

import "./DashboardClasses.css";

const UxDashboard = () => {
  return (
    <Tabs>
      <div className="aboutDashboard">
        <div className="aboutDashboardNav">
          <div className="dashboardRow">
            <TabLink to="about">
              <img
                src="../images/PortfolioCardsImages/Icons/Icon-6.png"
                alt=""
              />
              <p>User person</p>
            </TabLink>
            <TabLink to="problem">
              <img
                src="../images/PortfolioCardsImages/Icons/Icon-7.png"
                alt=""
              />
              <p>Site map</p>
            </TabLink>
            <TabLink to="result">
              <img
                src="../images/PortfolioCardsImages/Icons/Icon-8.png"
                alt=""
              />
              <p>Functional Map</p>
            </TabLink>
          </div>

          <div className="dashboardRow">
            <TabLink to="goals">
              <img
                src="../images/PortfolioCardsImages/Icons/Icon-9.png"
                alt=""
              />
              <p>Impact Map</p>
            </TabLink>
            <TabLink to="time">
              <img
                src="../images/PortfolioCardsImages/Icons/Icon-10.png"
                alt=""
              />
              <p>User Flow</p>
            </TabLink>
            <TabLink to="stages">
              <img
                src="../images/PortfolioCardsImages/Icons/Icon-11.png"
                alt=""
              />
              <p>Lean Canvas</p>
            </TabLink>
          </div>
        </div>
        <div className="aboutDashboardScreen">
          <TabContent for="about">
          <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть фото</p>
              </div>
            </div>
            <p>
              Агрегатор доставки еды на дом по регионам России. Стартап
              мобильное приложение для android с нуля.
            </p>
          </TabContent>
          <TabContent for="problem">
          <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть фото</p>
              </div>
            </div>
            <p>
              test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2
              test 2 test 2 test 2
            </p>
          </TabContent>
          <TabContent for="result">
            <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть фото</p>
              </div>
            </div>
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
          <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть фото</p>
              </div>
            </div>
            <p>
              
              test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4
              test 4 test 4 test 4
            </p>
          </TabContent>
          <TabContent for="time">
          <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть фото</p>
              </div>
            </div>
            <p>
              
              test 5 test 5 test 5 test 5 test 5 test 5 test 5 test 5test 5 test
              5test 5 test 5
            </p>
          </TabContent>
          <TabContent for="stages">
          <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть фото</p>
              </div>
            </div>
            <p>
              
              test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6
              test 6 test 6 test 6
            </p>
          </TabContent>
        </div>
      </div>
    </Tabs>
  );
};

export default UxDashboard;
