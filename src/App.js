import React, {Fragment} from "react";
import Media from "react-media";
import "./App.css";
import Main from "./components/Main/Main";


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
          {matches.small && <Main/>}
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
