import React from "react";
import "./modalcallback.css";


const ModalCallback = (props) => {
  return (
  <div className="modalWrapper">
    <div className="modalBody">
      <img src="./images/cross.png" className="closeModal" alt="Close" width="24" height="24" onClick={props.closeModal} />
        <p className="titleModal">Пишите, звоните, куда удобно всегда на связи. Ответим на любые вопросые.</p>
        <div className="modalNav">
          <img src="./images/telegram.png" alt="telegram"  className="icoModal"/>
          <a href="https" className="navLinkModal">Telegram</a>
          <img src="./images/whatsapp.png" alt="telegram"  className="icoModal"/>
          <a href="https" className="navLinkModal">Whats up</a>
        
        
        </div>
        
    </div>
  </div>
  
  
  );
}

export default ModalCallback;