import { useEffect, useState } from "react"
import { useGameStore } from "../store/game"
import type { cell, color, Piece, PlayerColor } from "../../types.d"
import { calcMove } from "../services/calcMove"
import socket from "./game"

export function Board() {
  const board = useGameStore(state => state.board)
  const [pieceToMove, setPieceToMove] = useState<[string, Piece, PlayerColor]>(["", "", ""])
  const movePiece = useGameStore((state) => state.move)
  const myColor = useGameStore((state) => state.color)
  const fixBoardToBlack = useGameStore((state) => state.fixBoardToBlack)
  const turn = useGameStore((state) => state.turn)
  const Jake = useGameStore(state => state.Jake)
  const passTurn = useGameStore((state) => state.setTurn)

  const [winner, setWinner] = useState<color | "">("")

  const handleClick = (indexRow: number, index: number, cell: cell) => {
    if (winner !== "" || Jake === 2) return
    if (pieceToMove[2] === "her" && cell.piece === "") return setPieceToMove(["", "", ""])
    if (turn === "me" && (pieceToMove[2] === "me" || cell.color === "me" || cell.color === "her")) {
      if (cell.piece === "" || (cell.color === "her" && pieceToMove[2] === "me")) {
        if (pieceToMove[0] === "") return
        const from: [number, number] = [Number(pieceToMove[0][0]), Number(pieceToMove[0][1])]
        const to: [number, number] = [indexRow, index]
        const isValidMove = calcMove(pieceToMove[1], to, from, board, Jake)
        if (isValidMove) {
          movePiece(from, to)
          passTurn("her")
          setPieceToMove(["", "", ""])
        }
      } else if (pieceToMove[0] === `${indexRow}${index}`) setPieceToMove(["", "", ""])
      else setPieceToMove([`${indexRow}${index}`, cell.piece, cell.color])
    }
  }

  useEffect(() => {
    socket.on("winner", (winner: color) => {
      console.log(winner);
      setWinner(winner);
    });

    return () => {
      socket.off("winner");
    };
  }, [])


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
      <div>
        <h1 style={{ backgroundColor: "#222", position: "absolute", top: "50%", left: "50%", display: winner !== "" || Jake === 2 ? "inline-block" : "none" }}>{winner || myColor}</h1>
      </div>
    </main>
  )
}