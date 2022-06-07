import React, {useEffect, useState} from "react";
import Card from './pokeCard';
import './pokeCard.css';

function random(min, max){
  return Math.floor(Math.random() * max + 1 - min);
}
let counter = 4;

async function makeCard(counter){
  let cards = new Array(counter).fill(1);
  cards = cards.map(() => {
    let newPoke = random(0, 5);
    return <Card imgSrc={newPoke} pokeName={newPoke}/>
  })
  return (
    <div>
      {cards}
    </div>
  )
}

async function fetchData(){
  const url = `https://pokeapi.co/api/v2/pokemon/99`;
  const data = await fetch(url);
  let cherryAPI = await data.json();
  return cherryAPI;
};

let GameBlock = () => {
  let cards = new Array(counter).fill(1);
  let [pokeId, setPokeId] = useState(cards);

  useEffect(()=> {
    async function addData(arr){
      for await (let elem of arr) {
        let data = await fetchData();
        arr[elem] = <Card imgSrc={data.sprites.front_default} pokeName={data.id}/>;
        
      }
      setPokeId(arr);
    }
      
    addData(cards);
  },[pokeId])

  return (
      <div>
        {pokeId}
      </div>
  )
}

export default GameBlock;