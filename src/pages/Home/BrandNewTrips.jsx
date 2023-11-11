import React from 'react'
import "./BrandNewTrips.css"
import { Card } from '../../components/Card'
import brandNewTrips1 from "./img/brandingNewTrips1.png";
import brandNewTrips2 from "./img/brandingNewTrips2.png";
import brandNewTrips3 from "./img/brandingNewTrips3.png";

export function BrandNewTrips() {
  return (
      <div className="brand-new">
        <h2 className="title">Brand new trips</h2>
        <div className="container">
          <div className="card-wrapper">
            <Card
              cardImg={brandNewTrips1}
              saveIcon={true}
              countryName="Spain"
              day="12"
              infoContent="Magical Madrid To Marrakech By Train"
              price="$1299.00"
            />
            <Card
              cardImg={brandNewTrips2}
              saveIcon={true}
              countryName="Italy"
              day="5"
              infoContent="Spectacular Sicily"
              price="$250.00"
            />
            <Card
              cardImg={brandNewTrips3}
              saveIcon={true}
              countryName="Turkey"
              day="7"
              infoContent="International Istanbul"
              price="$400.00"
            />
          </div>
        </div>
    </div>
  )
}

