import React, { useState } from "react";
import axios from "axios";
import "./modalcallback.css";

const ModalCallback = (props) => {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const botToken = "5587720022:AAGPlmL4fMRtfrYhucq4deEwBAGHJwzfh6E";
  const urlApi = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const chatId = "-1001526555815";
  const [success, setSuccess] = useState("");

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

  return (
    <>
      {success ? (
        <div className="modalWrapper">
          <div className="modalCallbackBody">
            <img
              src="./images/cross.png"
              className="closeModal"
              alt="Close"
              width="24"
              height="24"
              onClick={props.closeModal}
            />
            
              <span className="successAlert">Данные успешно<br/> отправлены. С вами свяжется<br/> менеджер в течение 30 минут.</span>
            
          </div>
        </div>
      ) : (
        <div className="modalWrapper">
          <div className="modalCallbackBody">
            <img
              src="./images/cross.png"
              className="closeModal"
              alt="Close"
              width="24"
              height="24"
              onClick={props.closeModal}
            />
            <div className="callbackFormContent">
              <h4> Подключим ваш бизнес общепита к mobile super app приложение по России</h4>
              <p>
              Оставьте свои контакты и мы свяжемся с вами, чтобы обсудить ваш продукт
              </p>
              <form action="" className="callbackForm" onSubmit={sendAlert}>
                <input
                  type="name"
                  name="name"
                  placeholder="Введите ваше имя"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+XXX XXX XXX"
                  value={clientPhone}
                  onChange={(event) => setClientPhone(event.target.value)}
                />
                <button className="callbackModalBtn" type="submit">
                  ОТПРАВИТЬ
                </button>
              </form>
              <span className="policyTitle">
                Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
                <a href="#">политикой конфиденциальности</a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCallback;
