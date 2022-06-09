import React from 'react';
import './pokeCard.css';

function Card(props) {
  return (
    <div className="Card">
      <img src={props.imgSrc} alt="picture of pokemon" />
      <p>{props.pokeName.slice(0, 1) + props.pokeName.slice(1)}</p>
    </div>
  );
}

export default Card;
