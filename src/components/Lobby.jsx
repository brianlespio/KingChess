export default function Lobby({ onStart }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Lobby</h1>
      <button onClick={onStart}>Iniciar partida</button>
    </div>
  )
}
