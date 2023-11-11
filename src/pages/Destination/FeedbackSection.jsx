import React from "react";
import "./FeedbackSection.css";
import backgroundImg from "./img/FeedbackBackground.png";
import iconImg from "./img/FeedbackSectionIcon.svg";

export function FeedbackSection(){
  return (
    <div className="feedback">
      <img src={backgroundImg} alt="feedbackbg" />
    <div className="feedbacks">
        <div className="feedback-comment">
          <p>
            “Tiago put together an epic itinerary for me and my friends. 
            He showed us some hidden hiking trails and amazing local food spots. 
            He even met us for a coffee to make sure we had everything we needed.
          </p>
          <span className="thank">Thanks Tiago!”</span>
          <span className="info">
            Charlie, rappelling down a 370-foot waterfall
          </span>
          <span className="location">The Azores</span>
        </div>
        <div className="feedback-author">
          <div className="feedback-logo">
            <img src={iconImg} alt="icon" />
          </div>
          <div className="author-info">
            <span className="crafted-by">Trip crafted by</span>
            <div className="author-info-content">
              <span className="author-name">Tiago</span>
              <div className="line"></div>
              <span className="author-position">Local expert in Portugal</span>
            </div>
          </div>
        </div>

    </div>
      </div>

  );
};
