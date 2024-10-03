import './App.css'
import { Game } from './components/game'
import { io } from "socket.io-client"
import { useGameStore } from './store/game'

const socket = io("http://localhost:3000")

export function sendMoves({
  from,
  to,
}: {
  from: [number, number]
  to: [number, number]
}) {
  socket.emit("move", { fromEnemy: from, toEnemy: to })
}

function App() {
  const getEnemyMoves = useGameStore(state => state.getEnemyMoves)
  const changeColor = useGameStore(state => state.changeColor)
  socket.on(
    "getMove",
    async ({
      from,
      to,
    }: {
      from: [number, number]
      to: [number, number]
    }) => {
      getEnemyMoves({ from, to })
    },
  )

  socket.on(
    "paired",
    async (color: "white" | "black") => {
      changeColor(color)
    },
  )
  return (
    <div className='App'>
      <Game />
    </div>
  )
}

export default App
