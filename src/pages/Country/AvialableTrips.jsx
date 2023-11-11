import React from 'react';
import './AvialableTrips.css';
import ItalyCard1 from './img/ItalyCard1.png';
import ItalyCard2 from './img/ItalyCard2.png';
import ItalyCard3 from './img/ItalyCard3.png';
import ItalyCard4 from './img/ItalyCard4.png';
import ItalyCard5 from './img/ItalyCard5.png';
import ItalyCard6 from './img/ItalyCard6.png';

import { Card } from '../../components/Card';

export function AvialableTrips() {
  return (
    <div className="destination-cards">
      <h2 className="title">Avialable trips</h2>
      <div className="container">
        <div className="card-wrapper">
          <Card
            cardImg={ItalyCard1}
            countryName="ITALY"
            day="34 avilable trip"
            infoContent="International Italy"
            price="$199.00"
          />
          <Card
            cardImg={ItalyCard2}
            countryName="PORTUGAL"
            day="54 avilable trip"
            infoContent="International Portugal"
            price="$250.00"
          />
          <Card
            cardImg={ItalyCard3}
            countryName="TURKEY"
            day="19 avilable trip"
            infoContent="International Turkey"
            price="$400.00"
          />
          <Card
            cardImg={ItalyCard4}
            countryName="ICELAND"
            day="105 avilable trip"
            infoContent="International Iceland"
            price="$299.00"
          />
          <Card
            cardImg={ItalyCard5}
            countryName="COSTA RICA"
            day="23 avilable trip"
            infoContent="International Costa Rica"
            price="$250.00"
          />
          <Card
            cardImg={ItalyCard6}
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
