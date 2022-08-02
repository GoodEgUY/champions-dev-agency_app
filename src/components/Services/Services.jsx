import React, {useState} from "react";
import "./services.css"
import DevServices from "./DevServices/DevServices";

const Services = () => {
    const [landingPage, setLandingPage] = useState(true);
    const [internetShop, setInternetShop] = useState(false);
    const [multipageSite, setMultipageSite] = useState(false);
    const [mobileApp, setMobileApp] = useState(false)


    const openLandingPage = () => {
        setLandingPage(true);
        setInternetShop(false);
        setMultipageSite(false);
        setMobileApp(false);

    }
    const openInternetShop = () => {
        setLandingPage(false);
        setInternetShop(true);
        setMultipageSite(false);
        setMobileApp(false);

    }
    const openMultipageSite = () => {
        setLandingPage(false);
        setInternetShop(false);
        setMultipageSite(true);
        setMobileApp(false);

    }
    const openMobileApp = () => {
        setLandingPage(false);
        setInternetShop(false);
        setMultipageSite(false);
        setMobileApp(true);

    }
    return(
        <div className="servicesContent">
            <h3>Услуги по разработке IT продуктов</h3>
             <div className="servicesHeader">
                <p onClick={openLandingPage} className={landingPage ? "servicesNavLink activeAbNL" : "servicesNavLink"}>Landing page</p>
                <p onClick={openInternetShop} className={internetShop ? "servicesNavLink activeAbNL" : "servicesNavLink"}>Internet shop</p>
                <p onClick={openMultipageSite} className={multipageSite ? "servicesNavLink activeAbNL" : "servicesNavLink"}>Multipage site</p>
                <p onClick={openMobileApp} className={mobileApp ? "servicesNavLink activeAbNL" : "servicesNavLink"}>Mobile web app</p>
            </div> 
            {landingPage ? <DevServices/> : null}
            {internetShop ? <div>TEST 2</div> : null}
            {multipageSite ? <div>TEST 3</div> : null}
            {mobileApp ? <div>TEST 4</div> : null}
        </div>
    );
}
export default Services;