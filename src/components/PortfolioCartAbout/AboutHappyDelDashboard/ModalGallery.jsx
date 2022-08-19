import React from "react";



const ModalGallery = (props) => {


  
  return (
  <div className="galleryWrapper">
    <div className="galleryBody">
      <img src="../images/cross.png" className="closeMap" alt="Close" width="24" height="24" onClick={props.closeModal} />
        
      <div className="lightboxWrapper">

        {props.content}
      </div>
        
    </div>
  </div>
  
  
  );
}

export default ModalGallery;