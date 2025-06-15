import React from 'react';
import './styles/game.css';

function Game() {
  return (
    <div className="game-container">
      <div className="board">{/* Chess board placeholder */}</div>
      <div className="player-info">
        <h3>Player 1</h3>
        <h3>Player 2</h3>
      </div>
    </div>
  );
}

export default Game;
