import React from "react";
import "./services.css"
import DevServices from "./DevServices/DevServices";

const Services = () => {
    return(
        <div className="servicesContent">
            <h3>Услуги по разработке IT продуктов</h3>
            <div className="servicesHeader">
                <a href="" className="servicesNavLink">Веб разработка</a>
                <a href="" className="servicesNavLink">UX/UI дизайн</a>
                <a href="" className="servicesNavLink">Маркетинг</a>
            </div>
            <DevServices/>
        </div>
    );
}
export default Services;