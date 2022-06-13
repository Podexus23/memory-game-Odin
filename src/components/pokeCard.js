import React, { useEffect, useState } from 'react';
import './pokeCard.css';

async function fetchData(num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const data = await fetch(url);
  let pokeData = await data.json();
  return pokeData;
}

async function cardValue(id) {
  const pokemon = await fetchData(id);
  return {
    src: pokemon.sprites.front_default,
    name: pokemon.name,
    id: pokemon.id,
  };
}

function Card(props) {
  let [pokeData, setPokeData] = useState({
    src: '#',
    id: 0,
    name: ' ',
  });

  useEffect(() => {
    (async () => {
      let newCards = await cardValue(props.id);
      setPokeData(newCards);
    })();
  }, []);

  return (
    <div className="Card" onClick={() => props.onClick(pokeData.id)}>
      <img src={pokeData.src} alt="of pokemon" />
      <p>
        {pokeData.name.slice(0, 1).toUpperCase() + pokeData.name.slice(1) || ''}
      </p>
    </div>
  );
}

export default Card;
