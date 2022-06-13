import './GameBlock.css';
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Card from './pokeCard';
import GameGenerator from './GameGenerator';

let GameBlock = (props) => {
  let [pokeCards, setPokeCards] = useState(GameGenerator.choosePlayableCards());
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
    let isGameOver = GameGenerator.cardClicked(id, score);
    if(isGameOver){
      console.log(`'Game Over! Your result: ${score}`)
    } else setScore(score + 1);
    props.checkStatus(isGameOver, score);
  }

  useEffect(() => {
    (async () => {
      let newCards = createCards(GameGenerator.choosePlayableCards());
      setPokeCards(newCards);
    })();
  }, [score]);

  return (
    <div className="GameBlock-wrapper">
      <p className="game-score">Score: {score}</p>
      <div className="GameBlock">{pokeCards}</div>
    </div>
  );
};

export default GameBlock;
