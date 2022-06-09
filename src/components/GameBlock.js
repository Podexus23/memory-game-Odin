import React, { useEffect, useState } from 'react';
import Card from './pokeCard';

function random(min, max) {
  return Math.floor(Math.random() * max + 1 - min);
}

let counter = 4;

async function fetchData(num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const data = await fetch(url);
  let cherryAPI = await data.json();
  return cherryAPI;
}

async function cardsValue(counter = 0) {
  let value = [];
  while (value.length !== counter) {
    const newNumber = random(0, 30);
    const pokemon = await fetchData(newNumber);
    value.push({ src: pokemon.sprites.front_default, name: pokemon.name });
  }
  return value;
}

let GameBlock = () => {
  let [pokeCards, setPokeCards] = useState(createCards(counter));

  function createCards(counter, value = []) {
    let cards = new Array(counter).fill(1);
    return cards.map((card, i) => {
      if (value.length > 0) {
        return <Card imgSrc={value[i].src} pokeName={value[i].name} key={i} />;
      }
    });
  }

  useEffect(() => {
    (async () => {
      let newCards = createCards(4, await cardsValue(counter));
      setPokeCards(newCards);
    })();
  }, []);

  return <div>{pokeCards}</div>;
};

export default GameBlock;
