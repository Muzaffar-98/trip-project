import React from "react";
import "./SocialMedia.css";
import google from "./img/google.svg";
import apple from "./img/apple.svg";
import facebook from "./img/facebook.svg";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <span>or use one of this</span>
      <div className="media-icons">
        <div className="google icon ">
          <img src={google} alt="google" />
        </div>
        <div className="apple icon ">
          <img src={apple} alt="apple" />
        </div>
        <div className="fb icon ">
          <img src={facebook} alt="fb" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
