import React from 'react';
import './StartGameBlock.css';

function StartGameBlock(props) {
  return (
    <button
      type="button"
      className="start-button"
      onClick={(e) => props.startClick(e)}
    >
      Start
    </button>
  );
}

export default StartGameBlock;
