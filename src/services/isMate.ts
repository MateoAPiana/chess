import type { Board } from "../../types"
import { calcMove } from "./calcMove"

export function isMate(
	board: Board
) {
	const kingIndex = board
		.map((r, index) => {
			const king = r.findIndex((c) => c.piece === "king" && c.color === "me")
			if (king !== -1) return [index, king]
		})
		.filter((i) => i !== undefined)
		.flat()

	console.log(board)

	if (
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1] - 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1] + 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0] - 1, kingIndex[1]],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0] + 1, kingIndex[1]],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0] - 1, kingIndex[1] - 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0] + 1, kingIndex[1] + 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0] - 1, kingIndex[1] + 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		) ||
		calcMove(
			"king",
			[kingIndex[0] + 1, kingIndex[1] - 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
		)
	)
		return false
	return true
}
