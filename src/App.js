import React, {Fragment} from "react";
import Media from "react-media";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    
    
    <div className="mainScreen">
      <div className="App">
        <Media queries={{
      small: "(max-width: 800px)",
      medium: "(min-width: 800px) and (max-width: 1400px)",
      large: "(min-width: 1400px)"
    }}>
      {matches => (
       <Fragment>
          {matches.small && <div className="coming">Mobile Version "Champions" <br/> Coming soon...<img src="./Images/clockLoad.svg" height={32}></img></div>}
          {matches.medium && <Main/>}
          {matches.large && <Main/> }
       </Fragment>
      )}
    </Media>
      </div>
    </div>
    </>
  );
}

export default App;
