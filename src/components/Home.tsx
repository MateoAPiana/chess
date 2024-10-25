import './Home.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Chess React</h1>
      <div className="chess-board">
        <img src="/boardPreview.png" alt="" />
      </div>
      <Link className='link_to_game' to="/game">Play</Link>
    </div>
  )
}