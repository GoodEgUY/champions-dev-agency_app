import React, { useState, useRef } from "react";
import "./modalvacancies.css";
import "./DragZone/dragzone.css";
import axios from "axios";
import Select from "../Select/Select";

const ModalVacancies = (props) => {
  const [clientName, setClientName] = useState("Не указано");
  const [clientPhone, setClientPhone] = useState("Не указано");
  const [clientTg, setClientTg] = useState("Не указано");
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState([]);
  const [drop, setDrop] = useState(false);
  const [method, setMethod] = useState("sendMessage");
  const botToken = "5587720022:AAGPlmL4fMRtfrYhucq4deEwBAGHJwzfh6E";
  const urlApi = `https://api.telegram.org/bot${botToken}/${method}`;
  const chatId = "-1001526555815";
  const [success, setSuccess] = useState("");
  const fileLoader = useRef(null);
  // SELECT ZONE

  const [selected, setSelected] = useState("Специальность");
  const [anim, setAnim] = useState(false);
  const [opened, setOpened] = useState(false);
  const [focus, setFocus] = useState(false);

  const dropdown = (e) => {
    e.preventDefault();
    setAnim(!anim);
    setOpened(!opened);
  };

  const valueSelectF = () => {
    setFocus(true);
    setSelected("BackEnd Developer");
    setOpened(false);
    setAnim(false);
  };
  const valueSelectS = () => {
    setFocus(true);
    setSelected("Marketing");
    setOpened(false);
    setAnim(false);
  };
  // SELECT ZONE

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
    message += `<b>Специальность:</b> <i>${selected}</i>`;
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
                  {/* SELECT ZONE */}
                  <div className="select">
                    <button
                      className="dropdownSelect"
                      onClick={(e) => dropdown(e)}
                    >
                      <p
                        className={focus ? "selectedItem" : "selectedItem grey"}
                      >
                        {selected}
                      </p>
                      <svg
                        className={anim ? "crossAnim" : ""}
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="#9A9A9A"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" />
                      </svg>
                    </button>
                    {opened ? (
                      <div className="dropdownMenu">
                        <p className="dropdownItem1 " onClick={valueSelectF}>
                          BackEnd
                        </p>
                        <p className="dropdownItem2" onClick={valueSelectS}>
                          MArketing
                        </p>
                      </div>
                    ) : null}
                  </div>
                  {/* SELECT ZONE */}
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
