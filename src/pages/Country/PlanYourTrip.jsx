import React from "react";
import "./PlanYourTrip.css";
import icon1 from "./img/Frame1.svg";
import icon2 from "./img/Frame2.svg";
import icon3 from "./img/Frame3.svg";
import icon4 from "./img/Frame4.svg";
import icon5 from "./img/Frame5.svg";
import icon6 from "./img/Frame6.svg";


export function PlanYourTrip(){
  return (
    <div className="italy_why-us">
      <h2>Why Us?</h2>
      <div className="italy_container">
        <div className="italy_contents">
          <div className="italy_content">
            <div className="content-block">
              <img src={icon1} alt="icon" />
            </div>
            <p>More than 149 travel titles currently in print</p>
          </div>
          <div className="italy_content">
            <div className="content-block">
              <img src={icon2} alt="icon" />
            </div>
            <p>Supporting millions of travellers since 1982</p>
          </div>
          <div className="italy_content">
            <div className="content-block">
                <img src={icon3} alt="icon" />
              </div>
              <p>Our utstanding customer satisfaction</p>
          </div>
          <div className="italy_content">
            <div className="content-block">
                <img src={icon4} alt="icon" />
              </div>
              <p>Our utstanding customer satisfaction</p>
          </div>
          <div className="italy_content">
            <div className="content-block">
                <img src={icon5} alt="icon" />
              </div>
              <p>Our utstanding customer satisfaction</p>
          </div>
          <div className="italy_content">
            <div className="content-block">
                <img src={icon6} alt="icon" />
              </div>
              <p>Our utstanding customer satisfaction</p>
          </div>
          </div>
      </div>
    </div>
  );
};


