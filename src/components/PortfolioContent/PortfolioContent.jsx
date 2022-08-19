import React from "react";
import "./portfoliocontent.css"
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const PortfolioContent = () => {
  const portfolioBase = [
    {
      name: "Happy Del",
      title:
        "Агрегатор доставки еды на дом по регионам России. Стартап мобильное приложение для android с нуля.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard1.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard1Hover.png",
      url: "/portfolio/happy-del",
    },
    {
      name: "HelpPoint",
      title:
        "Сервис психологической онлайн помощи. Редизайн всего веб сайта, улучшенное юзабилити.",
      imageUrlUnHover: "./images/PortfolioCardsImages/portCard2.png",
      imageUrlHover: "./images/PortfolioCardsImages/portCard2Hover.png",
      url: "/portfolio/helppoint",
    },
  ];
  return (
    <div className="portfolioContent">
      <h3 className="portfolioTitle">Портфолио нашей команды</h3>
      <div className="portfolioCarts">
        {portfolioBase.map((obj) => (
          <PortfolioCard
            name={obj.name}
            title={obj.title}
            urluh={obj.imageUrlUnHover}
            urlh={obj.imageUrlHover}
            url={obj.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
