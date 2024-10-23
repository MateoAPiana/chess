import { Board } from "./board";
import { io } from "socket.io-client"
import { useGameStore } from '../store/game'
import { isInJake } from "../services/isInJake";
import { isMate } from "../services/isMate";
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

export function Game() {
  const getEnemyMoves = useGameStore(state => state.getEnemyMoves)
  const changeColor = useGameStore(state => state.changeColor)
  const setTurn = useGameStore(state => state.setTurn)
  const board = useGameStore(state => state.board)
  const setJake = useGameStore(state => state.setJake)

  socket.on(
    "getMove",
    async ({
      from,
      to,
    }: {
      from: [number, number]
      to: [number, number]
    }) => {
      const [isJake, cell] = isInJake(board, from, to)
      if (isJake) {
        if (isMate(board, cell)) setJake(2)
        else {
          setJake(1)
          setTurn("me")
        }
      }
      else setTurn("me")
      getEnemyMoves({ from, to })
    },
  )

  socket.on(
    "paired",
    async (color: "white" | "black") => {
      changeColor(color)
      setTurn(color === "white" ? "me" : "her")
    },
  )

  return (
    <Board />
  )
}