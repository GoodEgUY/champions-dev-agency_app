import React from "react";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";

const StartDashboard = () => {

return(
    <Tabs>
        <div className="aboutDashboard">
          <div className="aboutDashboardNav">
            <div className="dashboardRow">
              <TabLink to="about">
                <img src="../images/PortfolioCardsImages/Icons/Icon.png" alt="" />
                <p>Описание</p>
              </TabLink>
              <TabLink to="problem">
                <img src="../images/PortfolioCardsImages/Icons/Icon-1.png" alt="" />
                <p>Проблема</p>
              </TabLink>
              <TabLink to="result">
                <img src="../images/PortfolioCardsImages/Icons/Icon-2.png" alt="" />
                <p>Результаты</p>
              </TabLink>
            </div>

            <div className="dashboardRow">
              <TabLink to="goals">
                <img src="../images/PortfolioCardsImages/Icons/Icon-3.png" alt="" />
                <p>Задачи</p>
              </TabLink>
              <TabLink to="time">
                <img src="../images/PortfolioCardsImages/Icons/Icon-4.png" alt="" />
                <p>Время</p>
              </TabLink>
              <TabLink to="stages">
                <img src="../images/PortfolioCardsImages/Icons/Icon-5.png" alt="" />
                <p>Этапы</p>
              </TabLink>
            </div>
          </div>
          <div className="aboutDashboardScreen">
            <TabContent for="about">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <p>
                Агрегатор доставки еды на дом по регионам России. Стартап
                мобильное приложение для android с нуля.
              </p>
            </TabContent>
            <TabContent for="problem">
              <p>test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2 test 2</p>
            </TabContent>
            <TabContent for="result">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
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
              <p> test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4 test 4</p>
            </TabContent>
            <TabContent for="time">
              <p> test 5 test 5 test 5 test 5 test 5 test 5 test 5 test 5test 5 test 5test 5 test 5</p>
            </TabContent>
            <TabContent for="stages">
              <p> test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6 test 6</p>
            </TabContent>
          </div>
        </div>
      </Tabs>
);
}

export default StartDashboard;