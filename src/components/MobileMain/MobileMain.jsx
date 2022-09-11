import React, { useState} from "react";
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

import MobileNav from "../MobileNav/MobileNav";
import MobileHeader from "../MobileHeader/MobileHeader";

const MobileMain = () => {
  
const [hidden, setHidden] = useState(true);
  return (
    <>
<BrowserRouter>
        
        
      <div className="screenContent">
        <div className="content">
          <MobileHeader/>
          <Routes>
            <Route path="/" element={<IntroContent />} />
            <Route path="/benefits" element={<BenefitsContent />} />
            <Route path="/portfolio" element={<PortfolioContent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/callback" element={<CallbackContent />} />
            <Route path="/team" element={<TeamContent />} />
            <Route
              path="/portfolio/happy-del"
              element={<HappyDelAbout makeHidden={() => setHidden(false)} makeUnHidden={() => setHidden(true)}/> }
            />
            <Route
            path="/portfolio/helppoint"
            element={<HelpPointAbout  makeHidden={() => setHidden(false)} makeUnHidden={() => setHidden(true)}/>}
          />
          </Routes>
           { hidden ? <MobileNav/> : null  }
        </div>
      </div>
      </BrowserRouter>
    </>
  );
};

export default MobileMain;
