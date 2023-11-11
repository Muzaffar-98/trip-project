import React from 'react';
import './TopDestinations.css';
import destinationCard1 from './img/DestinationCard1.png';
import destinationCard2 from './img/DestinationCard2.png';
import destinationCard3 from './img/DestinationCard3.png';
import destinationCard4 from './img/DestinationCard4.png';
import destinationCard5 from './img/DestinationCard5.png';
import destinationCard6 from './img/DestinationCard6.png';
import { Card } from '../../components/Card';

export function TopDestinations() {
  return (
    <div className="destination-cards">
      <h2 className="title">Top Destinations</h2>
      <div className="container">
        <div className="card-wrapper">
          <Card
            cardImg={destinationCard1}
            countryName="ITALY"
            day="34 avilable trip"
            infoContent="International Italy"
            price="$199.00"
          />
          <Card
            cardImg={destinationCard2}
            countryName="PORTUGAL"
            day="54 avilable trip"
            infoContent="International Portugal"
            price="$250.00"
          />
          <Card
            cardImg={destinationCard3}
            countryName="TURKEY"
            day="19 avilable trip"
            infoContent="International Turkey"
            price="$400.00"
          />
          <Card
            cardImg={destinationCard4}
            countryName="ICELAND"
            day="105 avilable trip"
            infoContent="International Iceland"
            price="$299.00"
          />
          <Card
            cardImg={destinationCard5}
            countryName="COSTA RICA"
            day="23 avilable trip"
            infoContent="International Costa Rica"
            price="$250.00"
          />
          <Card
            cardImg={destinationCard6}
            countryName="ARGENTINA"
            day="87 avilable trip"
            infoContent="International Argentina"
            price="$400.00"
          />
        </div>
      </div>
    </div>
  )
}
