import React from "react";

import { Routes, Route, } from "react-router-dom";

import Portfolio from "../Portfolio/Portfolio";

import PortfolioCardAbout from "../PortfolioCardAbout/PortfolioCardAbout";

function Main() {
  return (
    <>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/happy-del" element={<PortfolioCardAbout /> } />
        </Routes>
      </div>

      
    </>
  );
}

export default Main;
