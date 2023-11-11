import React from 'react'
import "./ItalyNewTrips.css"
import { Card } from '../../components/CardItaly'
import ItalyNewTrips1 from "./img/museumCard1.png";
import ItalyNewTrips2 from "./img/museumCard2.png";
import ItalyNewTrips3 from "./img/museumCard3.png";

export function ItalyNewTrips() {
  return (
      <div className="brand-new">
        <h2 className="title">Must-see attractions for your itinerary</h2>
        <div className="container">
          <div className="card-wrapper">
            <Card
              cardImg={ItalyNewTrips1}
              cardTitle="Vatican museums"
              infoContent="Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs,
              the Vatican Museums boast one of the world's greatest art…"
            />
            <Card
              cardImg={ItalyNewTrips2}
              cardTitle="Colosseum"
              infoContent="Everyone wants to see the Colosseum, and it doesn’t disappoint, 
              especially if accompanied by tales of armored gladiators and hungry lions. More..."
            />
            <Card
              cardImg={ItalyNewTrips3}
              cardTitle="St Peter’s basilica"
              infoContent="In the city of outstanding churches, none can hold a candle to St Peter's, 
              Italy’s largest, richest and most spectacular basilica. Built atop a 4th…"

            />
          </div>
        </div>
    </div>
  )
}

