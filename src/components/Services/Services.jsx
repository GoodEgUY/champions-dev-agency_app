import React, { useState } from "react";
import "./services.css";

import axios from "axios";
import ModalCallback from "../ModalCallback/ModalCallback";

const Services = () => {
  const [landingPage, setLandingPage] = useState(true);
  const [internetShop, setInternetShop] = useState(false);

  const openLandingPage = () => {
    setLandingPage(true);
    setInternetShop(false);
  };
  const openInternetShop = () => {
    setLandingPage(false);
    setInternetShop(true);
  };
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const botToken = "5587720022:AAGPlmL4fMRtfrYhucq4deEwBAGHJwzfh6E";
  const urlApi = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const chatId = "-1001526555815";
  const [success, setSuccess] = useState(false);

  const sendAlert = (e) => {
    e.preventDefault();

    let message = `<b>🤩Заявка на обратный звонок🤩</b>\n`;
    message += `<b>Имя клиента:</b> ${clientName}\n`;
    message += `<b>Телефон клиента:</b> ${clientPhone}`;
    axios
      .post(urlApi, {
        chat_id: chatId,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
      })
      .finally(() => {});
  };
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened ? (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}
      {success ? (
        <div className="modalWrapper">
          <div className="modalCallbackBody">
            <img
              src="./images/cross.png"
              className="closeModal"
              alt="Close"
              width="24"
              height="24"
              onClick={() => setSuccess(false)}
            />

            <span className="successAlert">
              Данные успешно
              <br /> отправлены. С вами свяжется
              <br /> менеджер в течение 30 минут.
            </span>
          </div>
        </div>
      ) : null}
      <div className="servicesContent">
        <h3>12 решений почему подключают Eat and meet</h3>
        <div className="servicesHeader">
          <p
            onClick={openLandingPage}
            className={
              landingPage ? "servicesNavLink activeAbNL" : "servicesNavLink"
            }
          >
            Почему мы
          </p>
          <p
            onClick={openInternetShop}
            className={
              internetShop ? "servicesNavLink activeAbNL" : "servicesNavLink"
            }
          >
            Плюсы mobile app
          </p>
        </div>
        <div className="services">
          <div className="servicesScreen">
            {landingPage ? (
              <div className="landingPageService">
                <div className="servicesCards">
                  <div className="servicesRow">
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon1.png" alt="" />
                      </div>
                      <div className="serviceTitle">
                        <h5>Больше выручки</h5>
                        <p>
                          Внедрение мобильного приложение поможет вам получить
                          примерно на 20% больше выручки.
                        </p>
                      </div>
                    </div>
                    {/* 2 card */}
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon2.png" alt="" />
                      </div>
                      <div className="serviceTitle">
                        <h5>Оплата за результат</h5>
                        <p>
                          Оплата за конкретный результат, мы берем всего 10% от
                          суммы заказа, а не 30-35% как в других приложениях.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3 card */}
                  <div className="servicesRow">
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon3.png" alt="" />
                      </div>
                      <div className="serviceTitle">
                        <h5>Улучшения за счет интервью</h5>
                        <p>
                          Мы постоянно проводим интервью и ux тесты с
                          пользователями, за счет чего улучшаем mobile app.
                        </p>
                      </div>
                    </div>
                    {/* 4 card */}
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon4.png" alt="" />
                        <div className="aboutService"></div>
                      </div>
                      <div className="serviceTitle">
                        <h5>Автоматизация процессов</h5>
                        <p>
                          Функция автоматического приема за-казов и интеграция с
                          вашей системой учета и аналитикой для отслеживания.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {internetShop ? (
              <div className="landingPageService">
                <div className="servicesCards">
                  <div className="servicesRow">
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon5.png" alt="" />
                      </div>
                      <div className="serviceTitle">
                        <h5>Push-уведомления</h5>
                        <p>
                          Push-уведомление можно пересылать клиентам даже если у
                          них выключено само приложение.
                        </p>
                      </div>
                    </div>
                    {/* 2 card */}
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon6.png" alt="" />
                      </div>
                      <div className="serviceTitle">
                        <h5>Высокая скорость</h5>
                        <p>
                          Приложение загружается очень быстро, все экраны и
                          функции в приложении открываются без задержек.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3 card */}
                  <div className="servicesRow">
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon7.png" alt="" />
                      </div>
                      <div className="serviceTitle">
                        <h5>Быстрый доступ</h5>
                        <p>
                          Клиенту, желающему воспользоваться услугой не придется
                          вводить запрос в любых поисковых системах.
                        </p>
                      </div>
                    </div>
                    {/* 4 card */}
                    <div className="serviceCard">
                      <div className="servicePrice">
                        <img src="./images/Services/Icon8.png" alt="" />
                        <div className="aboutService"></div>
                      </div>
                      <div className="serviceTitle">
                        <h5>Удобство интерфейса</h5>
                        <p>
                          На экране отображаются только необ-ходимые данные и
                          функции, которые не перегружают самого пользователя.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="navForm">
            <div className="servicesHeaderLaptop">
              <p
                onClick={openLandingPage}
                className={
                  landingPage ? "servicesNavLink activeAbNL" : "servicesNavLink"
                }
              >
                Почему мы
              </p>
              <p
                onClick={openInternetShop}
                className={
                  internetShop
                    ? "servicesNavLink activeAbNL"
                    : "servicesNavLink"
                }
              >
                Плюсы mobile app
              </p>
            </div>
            
            <div className="callServiceFormBody">
              <div className="callServiceFormContent">
                <h4>
                  Подключим ваш бизнес к мобильному super app приложению по
                  всему миру
                </h4>
                <div className="priceDoService">
                  <p>
                    Оставьте свои контакты и мы свяжемся с вами, чтобы обсудить
                    ваш продукт
                  </p>
                </div>
                
                <form
                  action=""
                  className="callServiceForm"
                  onSubmit={sendAlert}
                >
                  <input
                    type="textr"
                    placeholder="Введите ваше имя"
                    value={clientName}
                    onChange={(event) => setClientName(event.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="+XXX XXX XXX"
                    value={clientPhone}
                    onChange={(event) => setClientPhone(event.target.value)}
                  />
                  <button className="callServiceBtn">ОТПРАВИТЬ</button>
                </form>
                <div className="policyTitle">
                  Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
                  <a href="#">политикой конфиденциальности</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="orderButton">
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
export default Services;
