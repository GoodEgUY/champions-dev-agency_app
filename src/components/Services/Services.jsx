import React, {useState} from "react";
import "./services.css"
import DevServices from "./DevServices/DevServices";

const Services = () => {
    const [landingPage, setLandingPage] = useState(true);
    const [internetShop, setInternetShop] = useState(false);
   


    const openLandingPage = () => {
        setLandingPage(true);
        setInternetShop(false);
       

    }
    const openInternetShop = () => {
        setLandingPage(false);
        setInternetShop(true);
      

    }
  
    return(
        <div className="servicesContent">
            <h3>Услуги по разработке IT продуктов</h3>
             <div className="servicesHeader">
                <p onClick={openLandingPage} className={landingPage ? "servicesNavLink activeAbNL" : "servicesNavLink"}>Landing page</p>
                <p onClick={openInternetShop} className={internetShop ? "servicesNavLink activeAbNL" : "servicesNavLink"}>Internet shop</p>
                
            </div> 
            {landingPage ? <DevServices/> : null}
            {internetShop ? <DevServices/> : null}
           
        </div>
    );
}
export default Services;