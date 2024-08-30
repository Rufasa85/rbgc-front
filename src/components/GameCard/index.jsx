import React from "react";
import "./style.css";

const GameCard = (props) => {
  return (
    <div className="GameCard">
      <h3>{props.title}</h3>
      <img src={props.img} alt={`${props.title} boardgame`} />
      <p>{props.description}</p>
    </div>
  );
};

export default GameCard;
