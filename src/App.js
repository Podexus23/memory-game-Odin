import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBlock from './components/GameBlock';
import StartGameBlock from './components/StartGameBlock';

console.clear();
function App() {
  let [mainBlock, setMainBlock] = useState(
    <StartGameBlock startClick={startGame} />
  );

  function startGame(data) {
    console.log(data);
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
