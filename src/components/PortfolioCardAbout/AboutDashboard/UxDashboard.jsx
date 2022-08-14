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
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-6.png"
                alt=""
              />
              <p>User person</p>
            </TabLink>
            <TabLink to="problem">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-7.png"
                alt=""
              />
              <p>Site map</p>
            </TabLink>
            <TabLink to="result">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-8.png"
                alt=""
              />
              <p>Functional Map</p>
            </TabLink>
          </div>

          <div className="dashboardRow">
            <TabLink to="goals">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-9.png"
                alt=""
              />
              <p>Impact Map</p>
            </TabLink>
            <TabLink to="time">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-10.png"
                alt=""
              />
              <p>User Flow</p>
            </TabLink>
            <TabLink to="stages">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-11.png"
                alt=""
              />
              <p>Lean Canvas</p>
            </TabLink>
          </div>
        </div>
        <div className="aboutDashboardScreen">
          {/* 1 TAB */}
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
            <div className="dashboardTitle">
              <p>
                Персона - это обобщенный представитель одной из групп целевой
                аудитории продукта. Персоны позволяют ответить на важный вопрос
                - для кого мы это делаем?
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UxMap1mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 1 TAB */}

          {/* 2 TAB */}
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
            <div className="dashboardTitle">
              <p>
                Карта сайта позволяет получить верхнеуровневый взгляд на
                структуру и иерар-хию продукта. Обычно ис-пользуется либо карта
                сайта, либо функциональная карта т.к во многом их задачи
                пересекаются.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UxMap2mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 2 TAB */}

          {/* 3 TAB */}
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
            <div className="dashboardTitle">
              <p>
                Информационная архитектура - это организация информации на
                экране и связь экранов друг с другом.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UxMap3mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 3 TAB */}

          {/* 4 TAB */}
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
            <div className="dashboardTitle">
              <p>
                Карта влияний - это мощный инструмент продакт-менеджера для
                декомпозиции цели развития продукта через призму влияния на ее
                дости-жение клиентов, инвесторов и других заинтересованных.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UxMap4mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 4 TAB */}

          {/* 5 TAB */}
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
            <div className="dashboardTitle">
              <p>
                User flow - помогает проследить путь пользователя по сайту. Это
                позволяет опре-делитьо, сколько экранов вам нужно в каком
                порядке они должны появляться и какие ключевые компоненты будут.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UxMap5mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 5 TAB */}

          {/* 6 TAB */}
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
            <div className="dashboardTitle">
              <p>
                Lean Canvas — это шаблон для построения бизнес-модели. В основе
                модели — философия бережливого мышления и методология Lean
                Startup.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UxMap6mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 6 TAB */}
        </div>
      </div>
    </Tabs>
  );
};

export default UxDashboard;
