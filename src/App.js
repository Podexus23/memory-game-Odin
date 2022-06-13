import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBlock from './components/GameBlock';
import StartGameBlock from './components/StartGameBlock';
import EndGameBlock from './components/EndGameBlock';
import GameGenerator from './components/GameGenerator';

console.clear();

function App() {
  let [mainBlock, setMainBlock] = useState(
    <StartGameBlock startClick={startGame} />
  );

  (() => {
    //for now it's fixed, later i'll add settings
    //for difficulty and quantity of species
    GameGenerator.makingCardPool(15);
  })();

  function checkStatus(isOver, score){
    if(isOver) setMainBlock(<EndGameBlock score={score}/>)
  }

  function startGame(data) {
    setMainBlock(<GameBlock checkStatus={checkStatus} className="GameBlock" />);
  }

  return (
    <div className="App">
      <Header className="Header" />
      {mainBlock}
      <Footer className="Footer" />
    </div>
  );
}

export default App;
