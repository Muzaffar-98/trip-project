import React from "react";
import "./FeedbackItaly.css";
import backgroundImg from "./img/FeedbackImg.png";
import iconImg from "./img/FeedbackIcon.svg";
import starFull from "./img/Star1.svg";
import starEmpty from "./img/Star2.svg";


export function FeedbackItaly(){
  return (
    <div className="feedback">
      <img src={backgroundImg} alt="feedbackbg" />
    <div className="feedbacks">
        <div className="feedback-comment">
          <p>
          We have a very good time all the way. The 
          Capri boat ride is excellent and so much fun 
          with the crew! They are awesome.
          </p>
        </div>
        <div className="feedback-author">
          <div className="feedback-logo">
            <img src={iconImg} alt="icon" />
          </div>
          <div className="author-info">
            <span className="crafted-by">Vivian Lim</span>
            <div className="author-info-content">
              <div className="staricon">
                <img src={starFull} alt="" />
                <img src={starFull} alt="" />
                <img src={starFull} alt="" />
                <img src={starFull} alt="" />
                <img src={starEmpty} alt="" />
              </div>
              <div className="line"></div>
              <span className="author-position">18 June 20204</span>
            </div>
          </div>
        </div>

    </div>
      </div>

  );
};
