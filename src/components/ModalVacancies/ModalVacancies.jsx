import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./modalvacancies.css";
import { useDropzone } from "react-dropzone";

const ModalVacancies = (props) => {
  const baseStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    color: "#bdbdbd",
    transition: "border .3s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} width={170}/>
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
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

          <form action="" className="vacanciesForm">
            <div className="inputRowVacancies">
              <input
                type="textr"
                placeholder="Введите ваше имя"
                className="mg-r-10"
              />
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <div className="inputRowVacancies">
              <input
                type="textr"
                placeholder="Введите ваше имя"
                className="mg-r-10"
              />
              <input type="tel" placeholder="+XXX XXX XXX" />
            </div>
            <div className="dragAndDropZone" {...getRootProps({ style })}>
              <div className="dragTitle">
                <img src="./images/drag.png" alt="Cloud" />
                <input {...getInputProps()} />
                <aside>{thumbs}</aside>
                <div>
                  Перетащите мышкой резюме в окно или нажмите на облочко
                </div>
                <p></p>
              </div>
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
