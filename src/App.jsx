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
