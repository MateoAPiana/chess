import { useEffect, useState } from "react"
import { useGameStore } from "../store/game"
import type { cell, color, Piece, PlayerColor } from "../../types.d"
import { calcMove } from "../services/calcMove"
import WinnerModal from "./modalWinner"
import TableModal from "./modalTable"
import useSocket from "../hooks/useSocket"

export function Board() {
  const board = useGameStore(state => state.board)
  const [pieceToMove, setPieceToMove] = useState<[string, Piece, PlayerColor]>(["", "", ""])
  const movePiece = useGameStore((state) => state.move)
  const myColor = useGameStore((state) => state.color)
  const turn = useGameStore((state) => state.turn)
  const Jake = useGameStore(state => state.Jake)
  const passTurn = useGameStore((state) => state.setTurn)
  const movesToCastling = useGameStore(state => state.moveToCastling)
  const setMovesToCastling = useGameStore(state => state.setMovesToCastling)
  const { socket } = useSocket()

  const [winner, setWinner] = useState<color | "" | "tables">("")

  const handleClick = (indexRow: number, index: number, cell: cell) => {
    if (winner !== "" || Jake === 2 || Jake === 3) return
    if (pieceToMove[2] === "her" && cell.piece === "") return setPieceToMove(["", "", ""])
    if (turn === "me" && (pieceToMove[2] === "me" || cell.color === "me" || cell.color === "her")) {
      if (cell.piece === "" || (cell.color === "her" && pieceToMove[2] === "me")) {
        if (pieceToMove[0] === "") return
        const from: [number, number] = [Number(pieceToMove[0][0]), Number(pieceToMove[0][1])]
        const to: [number, number] = [indexRow, index]
        const isValidMove = calcMove(pieceToMove[1], to, from, board, Jake, movesToCastling)
        if (isValidMove) {
          if (pieceToMove[1] === "king") setMovesToCastling(3)
          if (pieceToMove[1] === "rook" && from[0] === 7 && from[1] === 0) setMovesToCastling(1)
          if (pieceToMove[1] === "rook" && from[0] === 7 && from[1] === 7) setMovesToCastling(2)
          movePiece(from, to)
          passTurn("her")
          setPieceToMove(["", "", ""])
        }
      } else if (pieceToMove[0] === `${indexRow}${index}`) setPieceToMove(["", "", ""])
      else setPieceToMove([`${indexRow}${index}`, cell.piece, cell.color])
    }
  }

  useEffect(() => {
    socket?.on("winner", (winner: color) => {
      setWinner(winner)
    })

    return () => {
      socket?.off("winner")
    }
  }, [socket])

  const getColor = (color: PlayerColor) => {
    if (color === "her") {
      if (myColor === "white") return "black"
      return "white"
    }
    return myColor
  }

  return (
    <main className="board">
      {
        board.map((r, indexRow) => {
          return (
            <div key={indexRow.toString()} className="row">
              {
                r.map((c, index) => {
                  return (
                    <div
                      key={index.toString()}
                      className="cell"
                      id={`${indexRow}${index}`}
                      onMouseDown={() => {
                        handleClick(indexRow, index, c)
                      }}
                      style={{ backgroundColor: pieceToMove[0] === `${indexRow}${index}` ? "#f334" : "transparent" }}
                    >
                      {c.piece !== "" && <img className="piece" src={`/${getColor(c.color)}/${c.piece}.png`} alt="piece" />}
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
      <WinnerModal
        isVisible={winner === "white" || winner === "black" || Jake === 2}
        winner={winner || (myColor === "white" ? "black" : "white")}
      />
      <TableModal isVisible={winner === "tables" || Jake === 3} />
    </main>
  )
}