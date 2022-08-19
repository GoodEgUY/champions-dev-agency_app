import React from "react";

import { Tabs, TabContent, TabLink } from "react-tabs-redux";

const StartDashboardHH = () => {
  return (
    <Tabs>
      <div className="aboutDashboard">
        <div className="aboutDashboardNav">
          <div className="dashboardRow">
            <TabLink to="about">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon.png"
                alt=""
              />
              <p>Описание</p>
            </TabLink>
            <TabLink to="problem">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-1.png"
                alt=""
              />
              <p>Идея</p>
            </TabLink>
            <TabLink to="result">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-2.png"
                alt=""
              />
              <p>Цель и задачи</p>
            </TabLink>
          </div>

          <div className="dashboardRow">
            <TabLink to="goals">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-3.png"
                alt=""
              />
              <p>Результат</p>
            </TabLink>
            <TabLink to="time">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-4.png"
                alt=""
              />
              <p>Время</p>
            </TabLink>
            <TabLink to="stages">
              <img
                src="../images/PortfolioCardsImages/happyDel/Icons/Icon-5.png"
                alt=""
              />
              <p>Детали</p>
            </TabLink>
          </div>
        </div>
        <div className="aboutDashboardScreen">
          <TabContent for="about">
            <img
              src="../images/PortfolioCardsImages/helppMiniLogo.png"
              alt="Happy Del Logo"
              width={100}
              height={37.33}
            />

            <p>
              Все начинается с идеи и у моего клиента в голове проснулось
              следующее. Это веб - сайт по психологической помощи онлайн. Они
              одни из первых запускали этот продукт в России.
            </p>
          </TabContent>
          <TabContent for="problem">
            <img
              src="../images/PortfolioCardsImages/helppMiniLogo.png"
              alt="Happy Del Logo"
              width={100}
              height={37.33}
            />
            <p>
              Плохо была проработана визуальная часть и удобство. Дизайн веб
              сайта был no friendly. Не сходилась юнит-экономика у продукта
              заказы были но мало. Продви-жение веб сайта было в основном о SEO
              яндекс.
            </p>
          </TabContent>
          <TabContent for="result">
            <img
              src="../images/PortfolioCardsImages/helppMiniLogo.png"
              alt="Happy Del Logo"
              width={100}
              height={37.33}
            />
            <h3>Цель</h3>
            <ol>
              <li>1.Повысить юзабилити сайта и его внешний вид .</li>
            </ol>
            <h3>Задачи</h3>
            <ol>
              <li>Генерация новых фичей с нуля.</li>
              <li>Создавал новые экраны интерфейса.</li>
              <li>Подбирал более гармоничные цвета и шрифты.</li>
              <li>Создавал с нуля дизайн систему.</li>
              <li>Проводил UX test.</li>
            </ol>
          </TabContent>
          <TabContent for="goals">
            <img
              src="../images/PortfolioCardsImages/helppMiniLogo.png"
              alt="Happy Del Logo"
              width={100}
              height={37.33}
            />
            <p>
              Обратная связь по моему дизайну была от команды и от их постоянных
              клиентов. Всем понравился результат моей работы стало более
              удобнее и более приятнее для глаз.
            </p>
          </TabContent>
          <TabContent for="time">
            <img
              src="../images/PortfolioCardsImages/helppMiniLogo.png"
              alt="Happy Del Logo"
              width={100}
              height={37.33}
            />
            <p>
              Около 64 часов было инвестировано времени в целом на редизайн веб
              сайта. В день тратилось около 8 часов.
            </p>
          </TabContent>
          <TabContent for="stages">
            <img
              src="../images/PortfolioCardsImages/helppMiniLogo.png"
              alt="Happy Del Logo"
              width={100}
              height={37.33}
            />
            <p>
              Стоит сказать конкретнее что это был стартап. И у команды был
              очень малый объём ресурсов, что бы дальше разви-вать продукт и
              временно пришлось заморозить даль-нейшие действия связанные с
              веб-сайтом. Важно учесть что я участвовал не в роли продуктового
              дизайнера.
            </p>
          </TabContent>
        </div>
      </div>
    </Tabs>
  );
};

export default StartDashboardHH;
