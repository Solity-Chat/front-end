import React from "react";
import "../../styles/Home/Home.css";
import { CardData } from "../Card/Card";
import Card from "../Card/Card";

export interface HomeProps {
  cards: CardData[];
}

const Home = (data: HomeProps) => (
  <div className="home-screen">
    <div className="row">
      <div className="col-md-16">
        <h2 className="section-heading">The latest updates on the app</h2>
        <p>
          Our app is available on any mobile device! Download now to get
          started!
        </p>
        <div className="updates">
          {data.cards.map((card) => (
            <Card
              cardTitle={card.cardTitle}
              cardContent={card.cardContent}
              cardDate={card.cardDate}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
