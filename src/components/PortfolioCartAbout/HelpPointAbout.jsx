import React,{ useState } from "react";
import "./portfoliocardabout.css";

import {Link } from "react-router-dom";
import StartDashboard from "./AboutHelpPointDashBoard/StartDashboardHH";
import UiDashboard from "./AboutHelpPointDashBoard/UiDashboardHH";


const PortfolioCardAbout = (props) => {
  const [startOpened, setStartOpened] = useState(true);
  const [UiProject, setUiProject] = useState(false);
  

  const openStart = () => {
    setStartOpened(true);
    setUiProject(false); 
  }
  const openUiProject = () => {
    setStartOpened(false);
    setUiProject(true); 
  }
 
  return (
    <div className="portfolioItemContent" onLoad={props.makeHidden}>
      
      <div className="portfolioAboutNav">
        <div className="backToMain">
        <img src="../images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
        <Link onClick={props.makeUnHidden} to="/portfolio">Назад</Link>
      </div>
      <h3 className="contentTitle">Подробно о портфолио champions</h3>
      <div className="portNavigation">
        <p className={startOpened ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openStart}>
          Начало 
        </p>
        <p  className={UiProject ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openUiProject}>
          Ui Визуал
        </p>
       </div>
      </div>
      {startOpened ?<StartDashboard/> : null}
      {UiProject ? <UiDashboard/> : null}
      
    </div>
  );
};
export default PortfolioCardAbout;