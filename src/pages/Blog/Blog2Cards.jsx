import React from 'react';
import "./Blog2Cards.css";
import { Card } from '../../components/CardItaly';
import foodCard1 from "./img/card1.png";
import foodCard2 from "./img/card2.png";


export function Blog2Cards() {
  return (
      <div className="blog2">
        <div className="container-blog2">
          <div className="cards-blog2">
            <Card
              cardImg={foodCard1}
              cardTitle="Food & Drink"
              infoContent="Founded by Pope Julius II in the early 16th century 
              and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"
            />
            <Card
              cardImg={foodCard2}
              cardTitle="See & Do"
              infoContent="Everyone wants to see the Colosseum, and it 
              doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More..."
            />
          </div>
        </div>
    </div>
  )
}

