import React, { useState, useRef } from "react";
import "./modalvacancies.css";
import "./DragZone/dragzone.css";
import axios from "axios";

const ModalVacancies = (props) => {
  const [clientName, setClientName] = useState("Не указано");
  const [clientPhone, setClientPhone] = useState("Не указано");
  const [clientTg, setClientTg] = useState("Не указано");
  const [clientDo, setClientDo] = useState("Не указано");
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState([]);
  const [drop, setDrop] = useState(false);
  const [method, setMethod] = useState("sendMessage");
  const botToken = "5587720022:AAGPlmL4fMRtfrYhucq4deEwBAGHJwzfh6E";
  const urlApi = `https://api.telegram.org/bot${botToken}/${method}`;
  const chatId = "-1001526555815";
  const [success, setSuccess] = useState("");
  const fileLoader = useRef(null);

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

  function onLoadHandler(event) {
    setFile(event.target.files[0]);
    console.log(file);
    setMethod("sendDocument");
    setDrop(true);
  }
  function openFilePicker() {
    fileLoader.current.click();
  }
  const sendAlert = (e) => {
    e.preventDefault();

    let message = `<b>🤩Новый кандидат в команду🤩</b>\n`;
    message += `<b>Имя:</b> ${clientName}\n`;
    message += `<b>Телефон:</b> ${clientPhone}\n`;
    message += `<b>Телеграм:</b> ${clientTg}\n`;
    message += `<b>Специальность:</b> <i>${clientDo}</i>`;
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("document", file);
    formData.append("parse_mode", "html");
    formData.append("caption", message);
    formData.append("text", message);
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

            <span className="successAlert">
              Данные успешно
              <br /> отправлены. С вами свяжется
              <br /> менеджер в течение 30 минут.
            </span>
          </div>
        </div>
      ) : (
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
                Требуется в продуктовую команду cпециалист по маракетингу и
                backend development
              </h4>

              <form className="vacanciesForm" onSubmit={sendAlert}>
                <div className="inputRowVacancies">
                  <input
                    type="textr"
                    placeholder="Введите ваше имя"
                    className="mg-r-10"
                    
                    onChange={(event) => setClientName(event.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="+XXX XXX XXX"
                    
                    onChange={(event) => setClientPhone(event.target.value)}
                  />
                </div>
                <div className="inputRowVacancies">
                  <select
                    name="spec"
                    placeholder="Специальность"
                    className="select-css mg-r-10"
                    value={clientDo}
                    onChange={(event) => setClientDo(event.target.value)}
                  >
                    <option disabledv selected hidden value={"No info"}>
                      Специальность
                    </option>
                    <option value={"marketManager"}>Marketing Manger</option>
                    <option value={"backendDev"}>Back End Developer</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Ник в телеграм"
                    
                    onChange={(event) => setClientTg(event.target.value)}
                  />
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
                      <p>
                        Отпустите файл и мы его запульнём на сервак через axios
                        ахпхапхахп{" "}
                      </p>
                    </div>
                  ) : (
                    <div className="dragEmpty">
                      <img src="./images/drag.png" alt="Cloud" />
                      <p className="dragTitle">
                        Перетащите мышкой резюме в окно или нажмите на облочко
                      </p>
                    </div>
                  )}

                  <input
                    ref={fileLoader}
                    type="file"
                    name="files"
                    onChange={(event) => onLoadHandler(event)}
                    className="fileInput"
                  />
                  <div
                    onClick={openFilePicker}
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
      )}
    </>
  );
};

export default ModalVacancies;
