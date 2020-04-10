import React from "react";

export interface CardData {
  cardTitle: string;
  cardContent: string;
  cardDate?: string;
}

const Card = (data: CardData) => (
  <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title">{data.cardTitle}</h5>
      <p className="card-text">{data.cardContent}</p>
      <p className="card-link">{data.cardDate}</p>
    </div>
  </div>
);

export default Card;
