import React from "react";
import "./MapItaly.css";
import backgroundMap from "./img/Map Italy.png";
import mapCard from "./img/mapCard.png";
import {Card} from "../../components/CardItaly";
import leftArrow from "./img/chevron-left.svg";
import rightArrow from "./img/chevron-right.svg";

export function MapItaly(){
  return (
    <div className="map-Italy">
      <img src={backgroundMap} alt="mapbackbg" />
      <div className="top-container">
        <p>Top things to do</p>
        <div className="map-arrows">
          <img src={leftArrow} alt="leftArrow" />
          <img src={rightArrow} alt="leftArrow" />
        </div>
      </div>
      <div className="map-card">
        <Card
              cardImg={mapCard}
              infoContent="Have the drive of your life on the cliff roads of the AAmalfi Coast"
            />
      </div>
    </div>

  );
};
