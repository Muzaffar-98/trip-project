import "./TrendingNow.css";
import { Card } from "../../components/Card";
import trendingNow1 from "./img/trendingNow1.png";
import trendingNow2 from "./img/trendingNow2.png";
import trendingNow3 from "./img/trendingNow3.png";
import sparkIcon from "./img/sparkles.svg";
import heartIcon from "./img/player-heart.svg";
export function TrendingNow() {
  return (
    <div className="trending">
      <h2 className="title">Trending now</h2>
      <div className="container">
        <div className="card-wrapper">
          <Card
            cardImg={trendingNow1}
            saveIcon={true}
            lovedTxt="Loved by over 40s"
            countryName="Spain"
            day="12"
            infoContent="Magical Madrid To Marrakech By Train"
            price="$1299.00"
            iconImg={sparkIcon}
          />
          <Card
            cardImg={trendingNow2}
            saveIcon={true}
            lovedTxt="Loved by couples"
            countryName="Italy"
            day="5"
            infoContent="Spectacular Sicily"
            price="$250.00"
            iconImg={heartIcon}
          />
          <Card
            cardImg={trendingNow3}
            saveIcon={true}
            countryName="Turkey"
            day="7"
            infoContent="International Istanbul"
            price="$400.00"
          />
        </div>
      </div>
    </div>
  );
};
