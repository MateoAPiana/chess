import { Board } from "./board"
import { useGameStore } from '../store/game'
import { isInJake } from "../services/isInJake"
import { isMate } from "../services/isMate"
import { isTable } from "../services/isTable"
import useSocket from "../hooks/useSocket"

export default function Game() {
  const getEnemyMoves = useGameStore(state => state.getEnemyMoves)
  const changeColor = useGameStore(state => state.changeColor)
  const setTurn = useGameStore(state => state.setTurn)
  const board = useGameStore(state => state.board)
  const setJake = useGameStore(state => state.setJake)
  const myColor = useGameStore(state => state.color)
  const movesToCastling = useGameStore(state => state.moveToCastling)
  const name = useGameStore(state => state.name)
  const { socket } = useSocket()

  socket?.emit("foundGame", name)

  socket?.on(
    "getMove",
    async ({
      from,
      to,
    }: {
      from: [number, number]
      to: [number, number]
    }) => {
      const [isJake, cell] = isInJake(board, from, to)
      getEnemyMoves({ from, to })
      if (isJake) {
        if (isMate(board, cell, movesToCastling)) {
          setJake(2)
          socket?.emit("end", myColor)
        }
        else {
          setJake(1)
          setTurn("me")
        }
      }
      else {
        if (isTable({ board })) {
          setJake(3)
          socket?.emit("end", "tables")
        }
        else setTurn("me")
      }
    },
  )

  socket?.on(
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
