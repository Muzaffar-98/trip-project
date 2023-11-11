import React from "react";
import "./WhyUsSection.css";
import icon1 from "./img/Frame.svg";
import icon2 from "./img/Frame 2.svg";
import icon3 from "./img/Frame 3.svg";


export function WhyUsSection(){
  return (
    <div className="why-us-home">
      <h2 className="title-whyUs-home">Why Us?</h2>
      <div className="container-whyUs-home">
        <div className="contents-home">
          <div className="content-home">
            <div className="content-block-home">
              <img src={icon1} alt="icon" />
            </div>
            <p>More than 149 travel titles currently in print</p>
          </div>
          <div className="content-home">
            <div className="content-block-home">
              <img src={icon2} alt="icon" />
            </div>
            <p>Supporting millions of travellers since 1982</p>
          </div>
          <div className="content-home">
            <div className="content-block-home">
                <img src={icon3} alt="icon" />
              </div>
              <p>Our utstanding customer satisfaction</p>
            </div>
          </div>
      </div>
    </div>
  );
};


