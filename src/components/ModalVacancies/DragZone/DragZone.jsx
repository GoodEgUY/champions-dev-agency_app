import React, { useState } from "react";
import "./dragzone.css";
import axios from "axios";

const DragZone = (props) => {
  const [drag, setDrag] = useState(false);

 
  function dragStartHandler (e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler (e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler (e) {
    e.preventDefault()
    let files = [...e.dataTransfer.files];
    const formData = new FormData()
    formData.append('file',files[0])
    
    console.log(files);
    setDrag(false);
  }
  return (
    <div className="dragAndDropZone">
      {drag ? (
        <div
          className="dragHover"
        >
          <img src="./images/drag.png" alt="Cloud" className="cloudImg"/>
        </div>
      ) : (
        <div
          className="dragEmpty"
        >
          <img src="./images/drag.png" alt="Cloud" />
          <p className="dragTitle">Перетащите мышкой резюме в окно или нажмите на облочко</p>  
        </div>
      )}
      <div className="dragMaster"
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDrop={(e) => onDropHandler(e)}
      
      ></div> 
      
    </div>
   
  );
};

export default DragZone;
