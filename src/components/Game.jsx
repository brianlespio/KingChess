import { useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'

export default function Game({ onExit }) {
  const [game] = useState(new Chess())
  const [fen, setFen] = useState(game.fen())

  function onDrop(sourceSquare, targetSquare) {
    const move = game.move({ from: sourceSquare, to: targetSquare, promotion: 'q' })
    if (move) {
      setFen(game.fen())
      return true
    }
    return false
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Chessboard position={fen} onPieceDrop={onDrop} />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={onExit}>Volver al lobby</button>
      </div>
    </div>
  )
}
