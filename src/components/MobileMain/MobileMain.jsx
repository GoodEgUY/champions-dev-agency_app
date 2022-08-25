import React, { Fragment } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./mobilemain.css";
import Media from "react-media";

// 1 stage pages
import IntroContent from "../IntroContent/IntroContent";
import BenefitsContent from "../BenefitsContent/BenefitsContent";
import PortfolioContent from "../PortfolioContent/PortfolioContent";
import Services from "../Services/Services";
import CallbackContent from "../CallbackContent/CallbackContent";
import TeamContent from "../TeamContent/TeamContent";


// 2 stage pages
import HappyDelAbout from "../PortfolioCartAbout/HappyDelAbout";
import HelpPointAbout from "../PortfolioCartAbout/HelpPointAbout";

import MobileNav from "../Footer/MobileNav";

const MobileMain = () => {
  return (
    <>
<BrowserRouter>
      
        
      <div className="screenContent">
        <div className="content">
          <MobileNav/>
          <Routes>
            <Route path="/" element={<IntroContent />} />
            <Route path="/benefits" element={<BenefitsContent />} />
            <Route path="/portfolio" element={<PortfolioContent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/callback" element={<CallbackContent />} />
            <Route path="/team" element={<TeamContent />} />
            <Route
              path="/portfolio/happy-del"
              element={<HappyDelAbout />}
            />
            <Route
            path="/portfolio/helppoint"
            element={<HelpPointAbout />}
          />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
};

export default MobileMain;
