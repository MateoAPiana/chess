import type { Board, cell } from "../../types"
import { calcMove } from "./calcMove"
import { isInJake } from "./isInJake"

export function isMate(
	board: Board,
	cell: cell,
	movesToCastling: 0 | 1 | 2
) {
	const kingIndex = board
		.map((r, index) => {
			const king = r.findIndex((c) => c.piece === "king" && c.color === "me")
			if (king !== -1) return [index, king]
		})
		.filter((i) => i !== undefined)
		.flat()

	if (kingIndex[0] === undefined || kingIndex[1] === undefined) return false

	// ----------------- If the king can skip to the Jake -----------------

	if (
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1] - 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0], kingIndex[1] + 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0] - 1, kingIndex[1]],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0] + 1, kingIndex[1]],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0] - 1, kingIndex[1] - 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0] + 1, kingIndex[1] + 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0] - 1, kingIndex[1] + 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		) ||
		calcMove(
			"king",
			[kingIndex[0] + 1, kingIndex[1] - 1],
			[kingIndex[0], kingIndex[1]],
			board,
			1,
			movesToCastling
		)
	)
		return false

	// ----------------- If I can to eat the piece -----------------

	const [isJake, pieceCell] = isInJake(board, undefined, undefined, cell)

	const herPieceIndex = board
		.map((r, index) => {
			const piece = r.findIndex((c) => c.color === cell.color && c.piece === cell.piece)
			if (piece !== -1) return [index, piece]
		})
		.filter((i) => i !== undefined)
		.flat()

	const mePieceIndex = board
		.map((r, index) => {
			const piece = r.findIndex((c) => c.color === pieceCell.color && c.piece === pieceCell.piece)
			if (piece !== -1) return [index, piece]
		})
		.filter((i) => i !== undefined)
		.flat()
	if (herPieceIndex[0] === undefined || herPieceIndex[1] === undefined) return false
	if (mePieceIndex[0] === undefined || mePieceIndex[1] === undefined) return false

	if (isJake) {
		if (calcMove(pieceCell.piece, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board, 1, movesToCastling)) return false
	}

	// ----------------- If one piece can to cover the Jake -----------------

	switch (cell.piece) {
		case "bishop":
			{
				if (herPieceIndex[0] < mePieceIndex[0]) {
					if (herPieceIndex[1] < mePieceIndex[1]) {
						let j = herPieceIndex[1] + 1
						for (let i = herPieceIndex[0] + 1; i <= mePieceIndex[0] && j <= mePieceIndex[1]; i++) {
							if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
							j++
						}
					} else {
						let j = herPieceIndex[1] - 1
						for (let i = herPieceIndex[0] + 1; i <= mePieceIndex[0] && j >= mePieceIndex[1]; i++) {
							if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
							j--
						}
					}
				} else if (herPieceIndex[1] < mePieceIndex[1]) {
					let j = herPieceIndex[1] + 1
					for (let i = herPieceIndex[0] - 1; i >= mePieceIndex[0] && j <= mePieceIndex[1]; i--) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
						j++
					}
				} else {
					let j = herPieceIndex[1] - 1
					for (let i = herPieceIndex[0] - 1; i >= mePieceIndex[0] && j >= mePieceIndex[1]; i--) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
						j--
					}
				}
			}
			return true
		case "rook":
			{
				if (herPieceIndex[0] === mePieceIndex[0]) {
					if (herPieceIndex[1] > mePieceIndex[1]) {
						for (let i = herPieceIndex[1] - 1; i >= mePieceIndex[1]; i--) {
							if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[herPieceIndex[0]][i])[0]) return false
						}
					} else {
						for (let i = herPieceIndex[1] + 1; i <= mePieceIndex[1]; i++) {
							if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[herPieceIndex[0]][i])[0]) return false
						}
					}
				} else {
					if (herPieceIndex[0] > mePieceIndex[0]) {
						for (let i = herPieceIndex[0] - 1; i >= mePieceIndex[0]; i--) {
							if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][herPieceIndex[1]])[0]) return false
						}
					} else {
						for (let i = herPieceIndex[0] + 1; i <= mePieceIndex[0]; i++) {
							if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][herPieceIndex[1]])[0]) return false
						}
					}
				}
				return true
			}
		case "queen":
			if (herPieceIndex[0] === mePieceIndex[0]) {
				if (herPieceIndex[1] > mePieceIndex[1]) {
					for (let i = herPieceIndex[1] - 1; i >= mePieceIndex[1]; i--) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[herPieceIndex[0]][i])[0]) return false
					}
				} else {
					for (let i = herPieceIndex[1] + 1; i <= mePieceIndex[1]; i++) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[herPieceIndex[0]][i])[0]) return false
					}
				}
			} else if (herPieceIndex[0] < mePieceIndex[0] && herPieceIndex[1] !== mePieceIndex[1]) {
				if (herPieceIndex[1] < mePieceIndex[1]) {
					let j = herPieceIndex[1] + 1
					for (let i = herPieceIndex[0] + 1; i <= mePieceIndex[0] && j <= mePieceIndex[1]; i++) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
						j++
					}
				} else {
					let j = herPieceIndex[1] - 1
					for (let i = herPieceIndex[0] + 1; i <= mePieceIndex[0] && j >= mePieceIndex[1]; i++) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
						j--
					}
				}
			} else if (herPieceIndex[0] > mePieceIndex[0] && herPieceIndex[1] !== mePieceIndex[1]) {
				if (herPieceIndex[1] < mePieceIndex[1]) {
					let j = herPieceIndex[1] + 1
					for (let i = herPieceIndex[0] - 1; i >= mePieceIndex[0] && j <= mePieceIndex[1]; i--) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
						j++
					}
				} else {
					let j = herPieceIndex[1] - 1
					for (let i = herPieceIndex[0] - 1; i >= mePieceIndex[0] && j >= mePieceIndex[1]; i--) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][j])[0]) return false
						j--
					}
				}
			} else {
				if (herPieceIndex[0] > mePieceIndex[0]) {
					for (let i = herPieceIndex[0] - 1; i >= mePieceIndex[0]; i--) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][herPieceIndex[1]])[0]) return false
					}
				} else {
					for (let i = herPieceIndex[0] + 1; i <= mePieceIndex[0]; i++) {
						if (isInJake(board, [herPieceIndex[0], herPieceIndex[1]], [mePieceIndex[0], mePieceIndex[1]], board[i][herPieceIndex[1]])[0]) return false
					}
				}
			}
			return true
	}
	return true
}
