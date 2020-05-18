import React from "react";
import "../../styles/Home/Home.css";
import Card, { CardData } from "../Card/Card";

export interface HomeProps {
  cards: CardData[];
}

const Advertisement = () => (
  <div className="landscape">
    <p className="landscape-name">
      <button type="button" className="btn btn-primary">
        <h1>Solity</h1>
        <span className="badge badge-pill badge-success">Security</span>
      </button>
    </p>
  </div>
);

const Contact = () => (
  <div className="footer">
    <span className="badge badge-pill badge-primary">
      Contact: support@solity.com
    </span>
    <span className="badge badge-pill badge-warning">
      Programs Engineering 2020
    </span>
  </div>
);

const Home = (data: HomeProps) => (
  <div className="home-screen">
    <div className="row">
      <div className="col-md-16">
        <hr />
        <Advertisement />
        <hr />
        <div className="updates">
          {data.cards.map((card) => (
            <Card
              key={card.cardDate}
              cardTitle={card.cardTitle}
              cardContent={card.cardContent}
              cardDate={card.cardDate}
            />
          ))}
        </div>
        <hr />
        <Contact />
      </div>
    </div>
  </div>
);

export default Home;
