import React from "react";
import Card from "./Card/Card";

const Error = () => (
  <Card
    cardTitle={"Authentication"}
    cardContent={
      "We are sorry for this inconvenient but the application can be used only based on a current" +
      "count active account. Visit the login menu page for to proceed."
    }
  />
);

export default Error;
