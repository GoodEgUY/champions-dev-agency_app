import React from "react";
import "./portfoliocardabout.css";

import {Link } from "react-router-dom";
import { useState } from "react";
import StartDashboard from "./AboutDashboard/StartDashboard";

const PortfolioCardAbout = () => {


  const [startOpened, setStartOpened] = useState(true);

  const [UxProject, setUxProject] = useState(false);
  const [UiVisual, setUiVisual] = useState(false);

  const openStart = () => {
    setStartOpened(true);
    setUxProject(false);
    setUiVisual(false);
  }
  const openUxProject = () => {
    setStartOpened(false);
    setUxProject(true);
    setUiVisual(false);
  }
  const openUiVisual = () => {
    setStartOpened(false);
    setUxProject(false);
    setUiVisual(true);
  }
  return (
    <div className="portfolioItemContent">
      <div className="backToMain">
        <img src="./images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
        <Link to="/">Назад</Link>
      </div>
      <div className="portfolioAboutNav">
        <a className={startOpened ? "headerNavLink activeAbNL" : "headerNavLink"} onClick={openStart}>
          Начало продукта
        </a>
        <a  className={UxProject ? "headerNavLink activeAbNL" : "headerNavLink"} onClick={openUxProject}>
          UX проектирование
        </a>
        <a className={UiVisual ? "headerNavLink activeAbNL" : "headerNavLink"} onClick={openUiVisual}>
          UI визуализация
        </a>
      </div>
      {startOpened ?<StartDashboard/> : null}
      {UxProject ? <div>testt</div> : null}
      {UiVisual ? <div>tesstr3</div> : null }
    </div>
  );
};
export default PortfolioCardAbout;
