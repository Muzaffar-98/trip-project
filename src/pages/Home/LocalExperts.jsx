import React from "react";
import "./LocalExperts.css";
import expertImg1 from "./img/Callcenter1.png";
import expertImg2 from "./img/Callcenter2.png";
import textImg1 from "./img/text_blank.png";
import textImg2 from "./img/text_blank1.png";


export function LocalExperts(){
  return (
    <div className="local-experts">
      <div className="title">Our Local Experts</div>
      <div className="container">
        <div className="experts-wrapper">
          <div className="first-photo">
            <img src={expertImg1} alt="expertImg" />

            <div className="text">
              <div className="text-inner">
                <img src={textImg1} alt="text" />
                <p>
                  Why trust Gary in Florida to plan your trip to South Africa?
                </p>
              </div>
            </div>
          </div>
          <div className="second-photo">
          <img src={expertImg2} alt="expertImg1" />

            <div className="text">
              <div className="text-inner">
                <img src={textImg2} alt="text" />
                <p>When Angela in Johannesburg knows best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

