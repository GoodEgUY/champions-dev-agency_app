import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="mainScreen">
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
