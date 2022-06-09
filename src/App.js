import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBlock from './components/GameBlock';

console.clear();
function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <GameBlock className="GameBlock" />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
