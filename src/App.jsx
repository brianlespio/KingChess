 codex/crear-archivos-de-estilo-para-lobby-y-juego
import React from 'react';
import Lobby from './Lobby';
import Game from './Game';

function App() {
  return (
    <>
      <Lobby />
      <Game />
    </>
  );
}

export default App;

import { useState } from 'react'
import Lobby from './components/Lobby'
import Game from './components/Game'

export default function App() {
  const [inGame, setInGame] = useState(false)

  return (
    <>
      {inGame ? (
        <Game onExit={() => setInGame(false)} />
      ) : (
        <Lobby onStart={() => setInGame(true)} />
      )}
    </>
  )
}
 main
