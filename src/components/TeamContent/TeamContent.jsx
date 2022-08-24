import React from "react";
import "./teamcontent.css"


const TeamContent = () => {
    return(
        <div className="teamContent">
        <h3 className="contentTitle">Наша команда профессионалов мечты</h3>
        <div className="teamList">
          <div className="teamItem">
            <div className="teamItemImg">
            <div className="teamItemTitle">
                <h3>Андрей Момотов</h3>
                <p>Product designer</p>
              </div>
              <img src="./images/team/Card team.png" alt="" />
            </div>
          </div>
          <div className="teamItem">
            <div className="teamItemImg">
            <div className="teamItemTitle">
                <h3>Илья Пугачьов</h3>
                <p>Web development</p>
              </div>
              <img src="./images/team/Card team-1.png" alt="" />
            </div>
          </div>
          <div className="teamItem">
            <div className="teamItemImg">
              <div className="teamItemTitle">
                <h3>Лидия Лебедева</h3>
                <p>Marketer</p>
              </div>
              <img src="./images/team/Card team-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default TeamContent;