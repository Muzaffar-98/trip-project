import React from 'react';
import "./Blog3Cards.css";
import { Card } from '../../components/CardItaly';
import travelCard1 from "./img/card11.png";
import travelCard2 from "./img/card22.png";
import travelCard3 from "./img/card33.png";


export function Blog3Cards() {
  return (
      <div className="blog3">
        <div className="container-blog3">
          <div className="cards-blog3">
            <Card
              cardImg={travelCard1}
              cardTitle="Inspiration"
              infoContent="Founded by Pope Julius II in the early 16th century 
              and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"
            />
            <Card
              cardImg={travelCard2}
              cardTitle="Travel trips"
              infoContent="Everyone wants to see the Colosseum, and it 
              doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More..."
            />
             <Card
              cardImg={travelCard3}
              cardTitle="Food & Drink"
              infoContent="In the city of outstanding churches, none can hold 
              a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…"
            />
          </div>
        </div>
    </div>
  )
}

