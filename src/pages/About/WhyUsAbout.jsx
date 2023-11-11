import React from "react";
import "./WhyUsAbout.css";
import icon1 from "./img/Frame.svg";
import icon2 from "./img/Frame (1).svg";
import icon3 from "./img/Frame (2).svg";

export function WhyUsAbout(){
  return (
    <div className="about_why-us">
      <h2 className="about_title">Why Us?</h2>
      <div className="about_container">
        <div className="about_contents">
          <div className="about_content">
            <div className="content-block">
              <img src={icon1} alt="icon" />
            </div>
            <p>More than 149 travel titles currently in print</p>
          </div>
          <div className="about_content">
            <div className="content-block">
              <img src={icon2} alt="icon" />
            </div>
            <p>Supporting millions of travellers since 1982</p>
          </div>
          <div className="about_content">
            <div className="content-block">
                <img src={icon3} alt="icon" />
              </div>
              <p>Our utstanding customer satisfaction</p>
          </div>
          </div>
      </div>
    </div>
  );
};


