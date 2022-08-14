import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import Media from "react-media";

// 1 stage pages
import IntroContent from "../IntroContent/IntroContent";
import BenefitsContent from "../BenefitsContent/BenefitsContent";
import PortfolioContent from "../PortfolioContent/PortfolioContent";
import Services from "../Services/Services";
import CallbackContent from "../CallbackContent/CallbackContent";
import TeamContent from "../TeamContent/TeamContent";

// 2 stage pages
import PortfolioCardAbout from "../PortfolioCardAbout/PortfolioCardAbout";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
<BrowserRouter>
     
        <Header/>
      <div className="screenContent">
        <div className="content">
          <Routes>
            <Route path="/" element={<IntroContent />} />
            <Route path="/benefits" element={<BenefitsContent />} />
            <Route path="/portfolio" element={<PortfolioContent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/callback" element={<CallbackContent />} />
            <Route path="/team" element={<TeamContent />} />
            <Route
              path="/portfolio/happy-del"
              element={<PortfolioCardAbout />}
            />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
};

export default Main;
