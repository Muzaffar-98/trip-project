import React from 'react'
import './AsiaSection.css'
import asiaImg1 from './img/asia1.png';
import asiaImg2 from './img/asia2.png';
import asiaImg3 from './img/asia3.png';
import { Card } from '../../components/Card';

export function AsiaSection() {
  return (
    <div className="asia-cards">
    <h2 className="title">Asia</h2>
    <div className="container">
      <div className="card-wrapper">
        <Card
          cardImg={asiaImg1}
          saveIcon={true}
          countryName="CHINA"
          day="5"
          infoContent="Icons Of China"
          price="$1399.00"
        />
        <Card
          cardImg={asiaImg2}
          saveIcon={true}
          countryName="THAILAND"
          day="7"
          infoContent="Cambodia & Vietnam"
          price="$2350.00"
        />
        <Card
          cardImg={asiaImg3}
          saveIcon={true}
          countryName="TAIWAN"
          day="7"
          infoContent="A Taste Of Taiwan"
          price="$1900.00"
        />
      </div>
    </div>
  </div>
  )
}
