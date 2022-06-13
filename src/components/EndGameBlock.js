import React from "react";

function EndGameBlock({score}){
  return (
    <div>
      <h2>That's all folks</h2>  
      <p>Your score: {score}</p>
    </div>
  )
}

export default EndGameBlock