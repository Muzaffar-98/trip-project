import React from 'react';
import './EuropeSection.css';
import europeImg1 from './img/europe1.png';
import europeImg2 from './img/europe2.png';
import europeImg3 from './img/europe3.png';
import { Card } from '../../components/Card';

export function EuropeSection() {
  return (
    <div className="europe-cards">
      <h2 className="title">Europe</h2>
      <div className="container">
        <div className="card-wrapper">
          <Card
            cardImg={europeImg1}
            saveIcon={true}
            countryName="ICELAND"
            day="7"
            infoContent="Volcanic Iceland"
            price="$2299.00"
          />
          <Card
            cardImg={europeImg2}
            saveIcon={true}
            countryName="SCOTLAND"
            day="7"
            infoContent="The Scottish Highlands"
            price="$1687.00"
          />
          <Card
            cardImg={europeImg3}
            saveIcon={true}
            countryName="PORTUGAL"
            day="6"
            infoContent="Atlantic Azores"
            price="$1220.00"
          />
        </div>
      </div>
    </div>
  )
}
