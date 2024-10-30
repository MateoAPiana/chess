import type { Board, cell } from "../../types.d"
import { calcMove } from "./calcMove"

export function isTable({
  board
}: {
  board: Board
}) {
  const kingIndex = board
    .map((r, index) => {
      const king = r.findIndex((c) => c.piece === "king" && c.color === "me")
      if (king !== -1) return [index, king]
    })
    .filter((i) => i !== undefined)
    .flat()

  if (kingIndex[0] === undefined || kingIndex[1] === undefined) return false

  // ----------------- If the king can to move -----------------

  if (
    calcMove(
      "king",
      [kingIndex[0], kingIndex[1] - 1],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0], kingIndex[1] + 1],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0] - 1, kingIndex[1]],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0] + 1, kingIndex[1]],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0] - 1, kingIndex[1] - 1],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0] + 1, kingIndex[1] + 1],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0] - 1, kingIndex[1] + 1],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    ) ||
    calcMove(
      "king",
      [kingIndex[0] + 1, kingIndex[1] - 1],
      [kingIndex[0], kingIndex[1]],
      board,
      0,
    )
  ) return false

  const othersPieces: { cell: cell, position: [number, number] }[] = []

  board.forEach((r, index) => {
    r.forEach((c, i) => {
      if (c.color === "me") othersPieces.push({ cell: c, position: [index, i] })
    })
  })

  let isInTable = true

  othersPieces.forEach(c => {
    if (c.cell.piece === "pawn") {
      try {
        if (board[c.position[0] - 1][c.position[1]].piece === "" || (c.position[0] === 6 && board[c.position[0] - 2][c.position[1]].piece === "")) {
          isInTable = false
          return
        }
      } catch (error) { }
    } else if (c.cell.piece === "knight") {
      try {
        if (board[c.position[0] + 1][c.position[1] - 2].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] + 2][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] + 2][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { } try {

        if (board[c.position[0] + 1][c.position[1] + 2].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1] + 2].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 2][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 2][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1] - 2].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
    } else if (c.cell.piece === "bishop") {
      try {
        if (board[c.position[0] - 1][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] + 1][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] + 1][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
    } else if (c.cell.piece === "rook") {
      try {
        if (board[c.position[0] + 1][c.position[1]].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1]].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0]][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0]][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
    } else if (c.cell.piece === "queen") {
      try {
        if (board[c.position[0] + 1][c.position[1]].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1]].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0]][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0]][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] + 1][c.position[1] - 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] - 1][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
      try {
        if (board[c.position[0] + 1][c.position[1] + 1].piece === "") {
          isInTable = false
          return
        }
      } catch (error) { }
    }
  })

  return isInTable
}