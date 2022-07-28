import React, {useState} from "react";
import "./portfolio.css"
import ModalCallback from "../ModalCallback/ModalCallback";

const Portfolio = () => {
    const[modalOpened,setModalOpened] = useState(false)
    return(
        <div className="content">
            {modalOpened ? <ModalCallback closeModal={() => setModalOpened(false)} /> : null}
            <div className="introContent">
                <div className="introText">
                    <h3 className="introTitle"><span>Лучшее</span> решение для <br/>Вашего бизнеса</h3>
                    <p className="introParag">Создание сайтов и мобильных приложений для любого ресторана россии и мира.</p>
                    <button className="callbackBtn" onClick={() => {setModalOpened(true)}}>заказать проект</button>
                </div>
                <div className="introImages">
                    <img src="./images/intro3.png" alt="SergeyRomanov" className="introImage"/>
                </div>
                
            </div>
        </div>
    );
}

export default Portfolio;