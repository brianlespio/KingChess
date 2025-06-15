import React from 'react';
import './styles/lobby.css';

function Lobby() {
  return (
    <div className="lobby-container">
      <ul className="lobby-list">
        <li>Game 1</li>
        <li>Game 2</li>
      </ul>
      <button className="lobby-button">Create Game</button>
    </div>
  );
}

export default Lobby;
