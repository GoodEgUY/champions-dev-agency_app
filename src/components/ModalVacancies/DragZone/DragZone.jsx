import React, { useState } from "react";
import "./dragzone.css";
import axios from "axios";

const DragZone = () => {
  const [drag, setDrag] = useState(false);

  // const onDrop = useCallback((acceptedFiles) => {
  //     setFiles(
  //       acceptedFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     );
  //   }, []);

  //   const thumbs = files.map((file) => (
  //     <div key={file.name}>
  //       <img src={file.preview} alt={file.name} width={170}/>
  //     </div>
  //   ));

  //   // clean up
  //   useEffect(
  //     () => () => {
  //       files.forEach((file) => URL.revokeObjectURL(file.preview));
  //     },
  //     [files]
  //   );
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
    axios.post('/', formData,{})
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
