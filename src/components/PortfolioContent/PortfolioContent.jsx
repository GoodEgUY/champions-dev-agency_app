import React from "react";
import "./portfoliocontent.css"
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const PortfolioContent = (props) => {
  const portfolioBase = [
    {
      name: "Happy Del",
      title:
        "Агрегатор доставки еды на дом по регионам России. Стартап мобильное приложение для android с нуля.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard1.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard1Hover.png",
      url: "/portfolio/happy-del",
      imageLaptopUnhover: "./images/PortfolioCardsImages/portCard1Laptop.png",
      imageLaptopHover:"./images/PortfolioCardsImages/portCard1LaptopHover.png"
    
    },
    {
      name: "HelpPoint",
      title:
        "Сервис психологической онлайн помощи. Редизайн всего веб сайта, улучшенное юзабилити.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard2.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard2Hover.png",
      url: "/portfolio/helppoint",
      imageLaptopUnhover: "./images/PortfolioCardsImages/portCard2Laptop.png",
      imageLaptopHover:"./images/PortfolioCardsImages/portCard2LaptopHover.png"
    },
  ];
  return (
    <div className="portfolioContent">
      <h3 className="portfolioTitle">Портфолио нашей команды</h3>
      <div className="portfolioScreen">
      <div className="portfolioCarts">
        {portfolioBase.map((obj) => (
          <PortfolioCard
            name={obj.name}
            title={obj.title}
            urluh={obj.imageUrlUnHover}
            urlh={obj.imageUrlHover}
            url={obj.url}
            urlluh = {obj.imageLaptopUnhover}
            urllh = {obj.imageLaptopHover}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
