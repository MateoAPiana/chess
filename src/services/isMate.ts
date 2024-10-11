import type { Board } from "../../types"
import { calcMove } from "./calcMove"
import { isInJake } from "./isInJake"

export function isMate(
	board: Board,
	from: [number, number],
	to: [number, number],
) {
	const newBoard: Board = structuredClone(board)

	if (board[to[0]][to[1]].piece === "") {
		newBoard[to[0]][to[1]] = board[from[0]][from[1]]
		newBoard[from[0]][from[1]] = { piece: "", color: "" }
	}

	const kingIndex = newBoard
		.map((r, index) => {
			const king = r.findIndex((c) => c.piece === "king" && c.color === "me")
			if (king !== -1) return [index, king]
		})
		.filter((i) => i !== undefined)
		.flat()

	if (
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0], kingIndex[1] - 1],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0], kingIndex[1] + 1],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0] - 1, kingIndex[1]],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0] + 1, kingIndex[1]],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0] - 1, kingIndex[1] - 1],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0] + 1, kingIndex[1] + 1],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0] - 1, kingIndex[1] + 1],
			newBoard,
			1,
		) &&
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1]],
			[kingIndex[0] + 1, kingIndex[1] - 1],
			newBoard,
			1,
		)
	)
		return true
	return false
}
