import React, {useState} from "react";
import Header from "../Header/Header";

function Main () {
    const [blur,setBlur] = useState("blur(0px)");
    
    return ( 
    <div style={{filter:{blur}}}>
        <Header blurWrapper={() => setBlur("blur(4px)")}/>

    </div>
        
    );
}

export default Main;