import React from "react";
import "./devservices.css";

const DevServices = () => {
  return (
    <div className="servicesCards">
      <div className="servicesRow">
        <div className="serviceCard">
          <div className="servicePrice">
            <img src="./images/Services/Icon.png" alt="" />
            <h5>От 30 000 руб</h5>
          </div>
          <div className="serviceTitle">
            <h5>Разработка Landing page</h5>
            <p>
              Получите уникальный landing page под ключ, который отстроит вас от
              конкурентов и увеличит ваш доход.
            </p>
            <button className="aboutServiceBtn">ПОДРОБНЕЕ</button>
          </div>
        </div>
        {/* 2 card */}
        <div className="serviceCard">
          <div className="servicePrice">
            <img src="./images/Services/Icon1.png" alt="" />
            <h5>От 50 000 руб</h5>
          </div>
          <div className="serviceTitle">
            <h5>Многостраничный сайт </h5>
            <p>
            У вас много товаров или услуг? Разработаем многостраничный 
            сайт где каждая услуга landing page                   
            </p>
            <button className="aboutServiceBtn">ПОДРОБНЕЕ</button>
          </div>
        </div>
      </div>
      {/* 3 card */}
      <div className="servicesRow">
        <div className="serviceCard">
          <div className="servicePrice">
            <img src="./images/Services/Icon2.png" alt="" />
            <h5>От 80 000 руб</h5>
          </div>
          <div className="serviceTitle">
            <h5>Интернет-магазин</h5>
            <p>
            Разработаем интернет-магазин 
            с удобной навигацией и дизайном необходимыми интеграциями.
            </p>
            <button className="aboutServiceBtn">ПОДРОБНЕЕ</button>
          </div>
        </div>
        {/* 4 card */}
        <div className="serviceCard">
          <div className="servicePrice">
            <img src="./images/Services/Icon3.png" alt="" />
            <h5>От 100 000 руб</h5>
          </div>
          <div className="serviceTitle">
            <h5>Мобильное приложение</h5>
            <p>
            Удобное и понятное мобильное приложение,
             которым будут пользоваться с удовольствием.
            </p>
            <button className="aboutServiceBtn">ПОДРОБНЕЕ</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DevServices;
