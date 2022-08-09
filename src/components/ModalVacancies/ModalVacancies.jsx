import React, { useState } from "react";
import "./modalvacancies.css";
import "./DragZone/dragzone.css";
import axios from "axios";

const ModalVacancies = (props) => {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState([]);
  const [drop, setDrop] = useState(false);
  const botToken = "5587720022:AAGPlmL4fMRtfrYhucq4deEwBAGHJwzfh6E";
  const urlApi = `https://api.telegram.org/bot${botToken}/sendDocument`;
  const chatId = "-1001526555815";
  const [success, setSuccess] = useState("");

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
    setDrop(false);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    setFile(...e.dataTransfer.files);
    setDrop(true);
    setDrag(false);
  }

  function dropFile (e) {
    
  }
  const sendAlert = (e) => {
    e.preventDefault();

    let message = `<b>🤩Новый кандидат в команду🤩</b>\n`;
    message += `<b>Имя клиента:</b> ${clientName}\n`;
    message += `<b>Телефон клиента:</b> ${clientPhone}`;
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("document", file);
    formData.append("parse_mode", "html");
    formData.append("caption", message);
    axios
      .post(urlApi, formData)
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
      })
      .finally(() => {});
  };

  return (
    <div className="modalWrapper">
      <div className="modalVacanciesBody">
        <img
          src="./images/cross.png"
          className="closeModal"
          alt="Close"
          width="24"
          height="24"
          onClick={props.closeModal}
        />
        <div className="vacanciesFormContent">
          <h4>
            Требуется в продуктовую команду cпециалист по маракетингу и backend
            development
          </h4>

          <form className="vacanciesForm" onSubmit={sendAlert}>
            <div className="inputRowVacancies">
              <input
                type="textr"
                placeholder="Введите ваше имя"
                className="mg-r-10"
                value={clientName}
                onChange={(event) => setClientName(event.target.value)}
              />
              <input
                type="tel"
                placeholder="+XXX XXX XXX"
                value={clientPhone}
                onChange={(event) => setClientPhone(event.target.value)}
              />
            </div>
            <div className="inputRowVacancies">
              <input
                type="textr"
                placeholder="Введите ваше имя"
                className="mg-r-10"
              />
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <div className="dragAndDropZone">
              {drop ? (
                <div className="fileList">
                  <img
                    src="./images/documentIcon.png"
                    alt="Document"
                    height={20}
                    className="mg-r-10"
                  />
                  <p>{file.name}</p>
                </div>
              ) : drag ? (
                <div className="dragHover">
                  <img
                    src="./images/drag.png"
                    alt="Cloud"
                    className="cloudImg"
                  />
                </div>
              ) : (
                <div className="dragEmpty">
                  <img src="./images/drag.png" alt="Cloud" />
                  <p className="dragTitle">
                    Перетащите мышкой резюме в окно или нажмите на облочко
                  </p>
                </div>
              )}

              <div 
                className="dragMaster"
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                onDrop={(e) => onDropHandler(e)}
              ></div>
            </div>
            <button className="vacanciesModalBtn">ОТПРАВИТЬ</button>
          </form>
          <span className="policyTitle">
            Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
            <a href="#">политикой конфиденциальности</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalVacancies;
