import React from "react";
import {Routes, Route } from "react-router-dom";

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
      <Header />
      <div className="content">
        
        
        <Routes>
          <Route path="/" element={<IntroContent/>} />
          <Route path="/benefits" element={<BenefitsContent/>} />
          <Route path="/portfolio" element={<PortfolioContent/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/callback" element={<CallbackContent/>} />
          <Route path="/team" element={<TeamContent /> } />
          <Route path="/portfolio/happy-del" element={<PortfolioCardAbout /> } />
          
        </Routes>
        
        
      </div>
      
      
    </>
  );
}

export default Main;
