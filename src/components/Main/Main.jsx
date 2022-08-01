import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import PortfolioCardAbout from "../PortfolioCardAbout/PortfolioCardAbout";

function Main() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/happy-del" element={<PortfolioCardAbout />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default Main;
