import React from "react";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";

const UiDashboard = () => {
  return (
    <Tabs>
      <div className="aboutDashboard">
        <div className="aboutDashboardNav">
          <div className="dashboardRow">
            <TabLink to="about">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-12.png"
                alt=""
              />
              <p>Цвета</p>
            </TabLink>
            <TabLink to="problem">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-13.png"
                alt=""
              />
              <p>Типографика</p>
            </TabLink>
            <TabLink to="result">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-14.png"
                alt="Icon"
              />
              <p>Сетка</p>
            </TabLink>
          </div>

          <div className="dashboardRow">
            <TabLink to="goals">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-15.png"
                alt="Icon"
              />
              <p>Ui-kit</p>
            </TabLink>
            <TabLink to="time">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-16.png"
                alt=""
              />
              <p>Дизайн</p>
            </TabLink>
            <TabLink to="stages">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-17.png"
                alt=""
              />
              <p>Видео</p>
            </TabLink>
          </div>
        </div>
        <div className="aboutDashboardScreen">
          {/* 1 UI TAB */}
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
                Цвет - это прежде всего эмоция и мощный инструмент коммуникация.
                Цвет задает настроение, подчеркивает контент расставляет
                акценты. Так является важной состав-ляющей любого бренда.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UiMap1mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 1 UI TAB */}

          {/* 2 UI TAB */}
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
                Типографика - это свод правил оформления текста и графических
                элементов, кото-рый несет определенный посыл, воздействует на
                эмо-ции и мотивирует посети-теля к совершению действий.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UiMap2mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 2 UI TAB */}

          {/* 3 UI TAB */}
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
                Сетка 4 колоночная с отсту-пами кратные 8 dp, более мелкие
                элементы как с иконки и текст делали кратные 4 dp.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UiMap3mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 3 UI TAB */}

          {/* 4 UI TAB */}
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
                Пример Ui-kit. единый набор элементов пользовательского
                интерфейса. Eдиный набор элементов пользовательского интерфейса.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UiMap4mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 4 UI TAB */}

          {/* 5 UI TAB */}
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
                Пару слайдов дизайна темной и светлой темы mobile app для
                ознакомления.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UiMap5mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 5 UI TAB */}

          {/* 6 UI TAB */}
          <TabContent for="stages">
            <div className="headerTab">
              <img
                src="../images/PortfolioCardsImages/happydelMiniLogo.png"
                alt="Happy Del Logo"
              />
              <div className="fullscreen">
                <img src="../images/fullscreen.png" alt="" />
                <p>Открыть видео</p>
              </div>
            </div>
            <div className="dashboardTitle">
              <p>
                Коротенькое видео кликабельного прототипа мобильного приложения.
              </p>

              <img
                src="../images/PortfolioCardsImages/happyDel/Maps/UiMap6mini.png"
                alt=""
              />
            </div>
          </TabContent>
          {/* 6 UI TAB */}
        </div>
      </div>
    </Tabs>
  );
};

export default UiDashboard;
