import React from "react";



const ModalAboutService = (props) => {
  return (
  <div className="modalWrapper">
    <div className="modalCallbackBody">
      <img src="./images/cross.png" className="closeModal" alt="Close" width="24" height="24" onClick={props.closeModal} />
        <div className="callbackFormContent">
        <ol>
            <li>1. Знакомство с компанией и продуктом (начальный бриф)</li>
            <li>2. Маркетинговые исследования для лендинга </li>
        </ol>
        </div>
    </div>
  </div>
  
  
  );
}

export default ModalAboutService;