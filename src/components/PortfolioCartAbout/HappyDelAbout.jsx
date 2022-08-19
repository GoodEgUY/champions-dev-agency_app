import React from "react";
import "./portfoliocardabout.css";

import {Link } from "react-router-dom";
import { useState } from "react";
import StartDashboard from "./AboutHappyDelDashboard/StartDashboard";
import UxDashboard from "./AboutHappyDelDashboard/UxDashboard";
import UiDashboard from "./AboutHappyDelDashboard/UiDashboard";

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
      
      <div className="portfolioAboutNav">
        <div className="backToMain">
        <img src="../images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
        <Link to="/portfolio">Назад</Link>
      </div>
        <p className={startOpened ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openStart}>
          Начало продукта
        </p>
        <p  className={UxProject ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openUxProject}>
          UX проектирование
        </p>
        <p className={UiVisual ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openUiVisual}>
          UI визуализация
        </p>
      </div>
      {startOpened ?<StartDashboard/> : null}
      {UxProject ? <UxDashboard/> : null}
      {UiVisual ? <UiDashboard/> : null }
    </div>
  );
};
export default PortfolioCardAbout;
