import './GameBlock.css';
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Card from './pokeCard';
import GameGenerator from './GameGenerator';

let GameBlock = () => {
  let [pokeCards, setPokeCards] = useState();
  let [score, setScore] = useState(0);

  function createCards(id = []) {
    let cards = id.map((card, i) => {
      if (id.length > 0) {
        return <Card key={uniqid()} id={id[i]} onClick={cardClicker} />;
      }
    });
    return cards;
  }

  function cardClicker(id) {
    console.log(GameGenerator.allCards);
    console.log(id);
    setScore(score + 1);
  }

  useEffect(() => {
    (async () => {
      let newCards = createCards(GameGenerator.choosePlayableCards());
      setPokeCards(newCards);
    })();
  }, [score]);

  return (
    <div className="GameBlock-wrapper">
      <p className="game-score">{score}</p>
      <div className="GameBlock">{pokeCards}</div>
    </div>
  );
};

export default GameBlock;
