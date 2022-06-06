import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBlock from './components/GameBlock';

console.clear();
function App() {
  const [cherry, setCherry] = useState('');
  const [img, setImg] = useState();
  
  useEffect(() => {
    async function fetchData(url, text){
      const data = await fetch(url);
      let cherryAPI = await data.json();
      let id = cherryAPI.id
      console.log(cherryAPI, text)
      setCherry(cherryAPI.id);
      setImg(cherryAPI.sprites.front_default)
    }
    fetchData('https://pokeapi.co/api/v2/pokemon/1/', 'pokemon')
    fetchData('https://pokeapi.co/api/v2/pokemon/151', 'pokemon')
  }, [cherry, img])

  
  return (
    <div className="App">
      <Header className="Header"/>
      <GameBlock className="GameBlock"/>
      Pokemon id is {cherry}
      <img src={img} />
      <Footer className="Footer"/>
    </div>
  );
}

export default App;

