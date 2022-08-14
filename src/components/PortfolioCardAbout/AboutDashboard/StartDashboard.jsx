import React from "react";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";

const StartDashboard = () => {
  return (
    <Tabs>
      <div className="aboutDashboard">
        <div className="aboutDashboardNav">
          <div className="dashboardRow">
            <TabLink to="about">
              <img src="../images/PortfolioCardsImages/happyDel/Icons/Icon.png" alt="" />
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
              src="../images/PortfolioCardsImages/happydelMiniLogo.png"
              alt="Happy Del Logo"
            />
            
            <p>
              Все начинается с идеи и в моей голове проснулось следующее. Это
              стартап мобильное приложение под android. Агрегатор доставки еды
              на дом из ресторанов и магазинов по регионам России. В дальнейшем
              масштабировать на целый мир.
            </p>
          </TabContent>
          <TabContent for="problem">
          <img
              src="../images/PortfolioCardsImages/happydelMiniLogo.png"
              alt="Happy Del Logo"
            />
            <p>
              Мы предполагаем, что в регионах России очень мало качественных
              сервисов мобильного приложения доставки еды на дом из ресторанов и
              магазинов. Что в России плохо развиты услуги в конкретный
              бизнесов.
            </p>
          </TabContent>
          <TabContent for="result">
            <img
              src="../images/PortfolioCardsImages/happydelMiniLogo.png"
              alt="Happy Del Logo"
            />
            <h3>Цель</h3>
            <ol>
              <li>
                Создать лучший сервис по доставки еды из ресторанов и магазинов
                через мобильное приложение по всей России.
              </li>
            </ol>
            <h3>Задачи</h3>
            <ol>
              <li>
                Проводил исследование рынка, решенческое интервью, ux tests,
                проблемное интервью и интервью с экспертами.
              </li>
              <li>Прорабатывал УТП и SWAT анализ.</li>
              <li>
                Создавал user person из интервью и сегментировал целевую
                аудиторию.
              </li>
              <li>
                Использовал такие артефакты как Impact Map, Functional Map, User
                Flow, Site Map.
              </li>
              <li>
                Генерировал гипотезы по HADI и SMART с Lean Startup Canvas.
              </li>
              <li>Создание дизайн-макета с темной и светлой темы.</li>
              <li>
                Проектирование кликабельного прототипа Prototyping
                High-Fidelity.
              </li>
              <li>Создание презентации для ресторанов и магазинов.</li>
            </ol>
          </TabContent>
          <TabContent for="goals">
          <img
              src="../images/PortfolioCardsImages/happydelMiniLogo.png"
              alt="Happy Del Logo"
            />
            <p>
              Получил первые 25 потенциальных установок приложения от конечных
              пользователей и так же от 4 ресторанов для подключения их к
              приложению. Так же нашёл разработчика. 25 пользователей давали
              обратную связь, то что им было более удобно пользоваться мобильным
              приложением которое я создал.
            </p>
            <p>
              А у Яндекс еды и у других конкурентов было менее удобно и
              конкурентам не хватало еще некоторых функций и
              клиентоориентированности. Использовал Protopie что бы
              протестировать продукт. Важно что тесты проводились на на не
              знакомых и мало знакомых мне людях.
            </p>
          </TabContent>
          <TabContent for="time">
          <img
              src="../images/PortfolioCardsImages/happydelMiniLogo.png"
              alt="Happy Del Logo"
            />
            <p>
              Около 96 часов было инвестировано времени в целом на мобильное
              приложение это три месяца. В день тратилось около 8 часов. Даже во
              время отдыха приходили гениальные мысли на создание чудесного.
            </p>
          </TabContent>
          <TabContent for="stages">
          <img
              src="../images/PortfolioCardsImages/happydelMiniLogo.png"
              alt="Happy Del Logo"
            />
            <p>
              Стартап начался за три месяца до ситуации в мире. И конечно же об
              этой ситуации никто не знал что такое произойдёт. В команде было
              всего два человека продуктовый дизайнер и разработчик, без
              инвесторов. Имея свой опыт, свои знания и свой минимальный бюджет.
            </p>
          </TabContent>
        </div>
      </div>
    </Tabs>
  );
};

export default StartDashboard;
