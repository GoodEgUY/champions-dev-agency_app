import React from "react";
import "./portfoliocardabout.css";

import {Link } from "react-router-dom";
import { useState } from "react";
import StartDashboard from "./AboutHappyDelDashboard/StartDashboard";
import UxDashboard from "./AboutHappyDelDashboard/UxDashboard";
import UiDashboard from "./AboutHappyDelDashboard/UiDashboard";

const PortfolioCardAbout = (props) => {

  
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
    <div className="portfolioItemContent" onLoad={props.makeHidden}>
      
      <div className="portfolioAboutNav">
        
        <div className="backToMain">
        <img src="../images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
        <Link onClick={props.makeUnHidden} to="/portfolio">Назад</Link>
      </div><h3 className="contentTitle">Подробно о портфолио champions</h3>
      <div className="portNavigation">
        <p className={startOpened ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openStart}>
          Начало
        </p>
        <p  className={UxProject ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openUxProject}>
          UX проектирование
        </p>
        <p className={UiVisual ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openUiVisual}>
          UI визуал 
        </p>
        </div>
      </div>
      {startOpened ?<StartDashboard/> : null}
      {UxProject ? <UxDashboard/> : null}
      {UiVisual ? <UiDashboard/> : null }
    </div>
  );
};
export default PortfolioCardAbout;
