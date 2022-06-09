import React from 'react';
import './pokeCard.css';

function Card(props) {
  return (
    <div className="Card" onClick={() => props.onClick(props.id)}>
      <img src={props.imgSrc} alt="picture of pokemon" />
      <p>
        {props.pokeName.slice(0, 1).toUpperCase() + props.pokeName.slice(1)}
      </p>
    </div>
  );
}

export default Card;
