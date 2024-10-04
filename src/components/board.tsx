import { useEffect, useState } from "react"
import { useGameStore } from "../store/game"
import type { cell, Piece, PlayerColor } from "../../types"
import { calcMove } from "../services/calcMove"

export function Board() {
  const board = useGameStore(state => state.board)
  const [pieceToMove, setPieceToMove] = useState<[string, Piece, PlayerColor]>(["", "", ""])
  const movePiece = useGameStore((state) => state.move)
  const myColor = useGameStore((state) => state.color)
  const fixBoardToBlack = useGameStore((state) => state.fixBoardToBlack)
  const turn = useGameStore((state) => state.turn)
  const passTurn = useGameStore((state) => state.setTurn)

  const handleClick = (indexRow: number, index: number, cell: cell) => {
    if (pieceToMove[2] === "her" && cell.piece === "") return setPieceToMove(["", "", ""])
    if (turn === "me" && (pieceToMove[2] === "me" || cell.color === "me")) {
      if (cell.piece === "") {
        if (pieceToMove[0] === "") return
        const from: [number, number] = [Number(pieceToMove[0][0]), Number(pieceToMove[0][1])]
        const to: [number, number] = [indexRow, index]
        if (calcMove(pieceToMove[1], to, from, board)) movePiece(from, to)
        setPieceToMove(["", "", ""])
        passTurn("her")
        return
      }
      if (pieceToMove[0] === `${indexRow}${index}`) setPieceToMove(["", "", ""])
      else setPieceToMove([`${indexRow}${index}`, cell.piece, cell.color])
    }
  }

  useEffect(() => {
    if (myColor === "black") {
      fixBoardToBlack()
    }
  }, [myColor, fixBoardToBlack])

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
    </main>
  )
}