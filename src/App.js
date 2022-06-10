import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBlock from './components/GameBlock';
import StartGameBlock from './components/StartGameBlock';
import GameGenerator from './components/GameGenerator';

console.clear();
function App() {
  let [mainBlock, setMainBlock] = useState(
    <StartGameBlock startClick={startGame} />
  );

  (() => {
    //for now it's fixed, later i'll add settings
    //for difficulty and quantity of species
    GameGenerator.makingCardPool(25);
  })();

  function startGame(data) {
    setMainBlock(<GameBlock className="GameBlock" />);
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
