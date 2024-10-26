import './Home.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Chess React</h1>
      <div className="chess-board">
        <img src="/boardPreview.png" alt="" />
      </div>
      <a className='link_to_game' href="/game">Play</a>
    </div>
  )
}