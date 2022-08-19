import React,{ useState } from "react";
import "./portfoliocardabout.css";

import {Link } from "react-router-dom";
import StartDashboard from "./AboutHelpPointDashBoard/StartDashboardHH";
import UiDashboard from "./AboutHelpPointDashBoard/UiDashboardHH";


const PortfolioCardAbout = () => {
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
    <div className="portfolioItemContent">
      
      <div className="portfolioAboutNav">
        <div className="backToMain">
        <img src="../images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
        <Link to="/portfolio">Назад</Link>
      </div>
        <p className={startOpened ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openStart}>
          Начало 
        </p>
        <p  className={UiProject ? "aboutPortfolioNavLink activeAbNL" : "aboutPortfolioNavLink"} onClick={openUiProject}>
          Ui Визуал
        </p>
       
      </div>
      {startOpened ?<StartDashboard/> : null}
      {UiProject ? <UiDashboard/> : null}
      
    </div>
  );
};
export default PortfolioCardAbout;