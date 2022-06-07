import React from "react";

function Card(props){
  return (
    <div className="Card">
      <img src={props.imgSrc} alt=""/>
      <p>{props.pokeName}</p>
    </div>
  )
}

export default Card;