import React from "react";
import "./portfoliocard.css"
import {Link } from "react-router-dom";

const PortfolioCard = (props) => {
    
    return (
        <div className="portfolioCard1">
            
            <img src={props.urluh} alt="" className="portfolioCardImageUnHover"/>
            <img src={props.urlluh} alt="" className="portfolioCardImageLaptopUnHover" />
            <div className="portfolioCardTitle">
              <h5>
                {props.name}
                <img src="./images/PortfolioCardsImages/arrows/arrowBlack.png" alt="" />
              </h5>
              <p>
                {props.title}
              </p>
            </div>
            <Link to={props.url} >
            <div className="portfolioCard1Hover">
              <img src={props.urllh} alt="" className="portfolioCardImageLaptopHover" />
                <img src={props.urlh} alt="" className="portfolioCardImageHover"/>
                
              <div className="portfolioCardTitleHover"> 
                <h5>
                {props.name}
                  <img src="./images/PortfolioCardsImages/arrows/arrowWhite.png" alt="" />
                </h5>
                <p>
                {props.title}
                </p>
              </div>
            </div>
            </Link>
          </div>
    );
}

export default PortfolioCard;