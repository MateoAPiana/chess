import type { Board, Piece } from "../../types"
import { isInJake } from "./isInJake"

export function calcMove(
	piece: Piece,
	to: [number, number],
	from: [number, number],
	board: Board,
	isJake: number,
	movesToCastling: 0 | 1 | 2 | 3
): boolean {
	const newBoard: Board = structuredClone(board)
	try {
		newBoard[to[0]][to[1]] = board[from[0]][from[1]]
		newBoard[from[0]][from[1]] = { piece: "", color: "" }
	} catch (error) {
		return false
	}

	if (isJake !== 0) {
		const isValid = calcMove(piece, to, from, board, 0, movesToCastling)
		if (isValid) {
			const isInJakeAgain = isInJake(board, from, to)[0]
			return !isInJakeAgain
		}
		return false
	}

	if (isInJake(board, from, to)[0]) return false

	try {
		if (board[to[0]][to[1]].color === "me") return false
	} catch (error) { }

	switch (piece) {
		case "king":
			try {
				if (board[to[0]][to[1]].piece === undefined) return false
				if (movesToCastling !== 1 && movesToCastling !== 3 && to[0] === 1)
					if (from[0] === to[0]) {
						if (from[1] - 1 === to[1] || from[1] + 1 === to[1]) return true
					} else if (from[0] - 1 === to[0] || from[0] + 1 === to[0]) {
						if (
							from[1] - 1 === to[1] ||
							from[1] + 1 === to[1] ||
							from[1] === to[1]
						) return true
					}
			} catch (error) { }
			return false
		case "pawn":
			if (from[0] === 6 && to[0] === 4 && from[1] === to[1]) return true
			if (from[0] - 1 === to[0] && (from[1] === to[1] || from[1] - 1 === to[1] || from[1] + 1 === to[1])) return true
			return false
		case "knight":
			if (
				from[0] - 1 === to[0] &&
				(from[1] - 2 === to[1] || from[1] + 2 === to[1])
			)
				return true
			if (
				from[0] + 1 === to[0] &&
				(from[1] - 2 === to[1] || from[1] + 2 === to[1])
			)
				return true
			if (
				from[0] + 2 === to[0] &&
				(from[1] - 1 === to[1] || from[1] + 1 === to[1])
			)
				return true
			if (
				from[0] - 2 === to[0] &&
				(from[1] - 1 === to[1] || from[1] + 1 === to[1])
			)
				return true
			return false
		case "bishop":
			{
				if (from[0] < to[0]) {
					if (from[1] < to[1]) {
						let j = from[1] + 1
						for (let i = from[0] + 1; i <= to[0] && j <= to[1]; i++) {
							if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
							j++
						}
					} else {
						let j = from[1] - 1
						for (let i = from[0] + 1; i <= to[0] && j >= to[1]; i++) {
							if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
							j--
						}
					}
				} else if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] - 1; i >= to[0] && j <= to[1]; i--) {
						if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] - 1; i >= to[0] && j >= to[1]; i--) {
						if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
						j--
					}
				}
				if (
					from[0] - to[0] === from[1] - to[1] ||
					from[0] - to[0] === (from[1] - to[1]) * -1 ||
					from[0] + to[0] === from[1] + to[1] ||
					from[0] + to[0] === (from[1] + to[1]) * -1
				)
					return true
			}
			return false
		case "rook":
			{
				if (from[0] === to[0]) {
					if (from[1] > to[1]) {
						for (let i = from[1] - 1; i >= to[1]; i--) {
							if (!(board[from[0]][i].color === "" || (i === to[1] && board[to[0]][i].color === "her"))) return false
						}
					} else {
						for (let i = from[1] + 1; i <= to[1]; i++) {
							if (!(board[from[0]][i].color === "" || (i === to[1] && board[to[0]][i].color === "her"))) return false
						}
					}
				} else {
					if (from[0] > to[0]) {
						for (let i = from[0] - 1; i >= to[0]; i--) {
							if (!(board[i][from[1]].color === "" || (i === to[0] && board[i][to[1]].color === "her"))) return false
						}
					} else {
						for (let i = from[0] + 1; i <= to[0]; i++) {
							if (!(board[i][from[1]].color === "" || (i === to[0] && board[i][to[1]].color === "her"))) return false
						}
					}
				}
				if (from[0] === to[0] || from[1] === to[1]) return true
				return false
			}
		case "queen":
			if (from[0] === to[0]) {
				if (from[1] > to[1]) {
					for (let i = from[1] - 1; i >= to[1]; i--) {
						if (!(board[from[0]][i].color === "" || (i === to[1] && board[to[0]][i].color === "her"))) return false
					}
				} else {
					for (let i = from[1] + 1; i <= to[1]; i++) {
						if (!(board[from[0]][i].color === "" || (i === to[1] && board[to[0]][i].color === "her"))) return false
					}
				}
			} else if (from[0] < to[0] && from[1] !== to[1]) {
				if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] + 1; i <= to[0] && j <= to[1]; i++) {
						if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] + 1; i <= to[0] && j >= to[1]; i++) {
						if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
						j--
					}
				}
			} else if (from[0] > to[0] && from[1] !== to[1]) {
				if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] - 1; i >= to[0] && j <= to[1]; i--) {
						if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] - 1; i >= to[0] && j >= to[1]; i--) {
						if (!(board[i][j].color === "" || (i === to[0] && j === to[1] && board[i][j].color === "her"))) return false
						j--
					}
				}
			} else {
				if (from[0] > to[0]) {
					for (let i = from[0] - 1; i >= to[0]; i--) {
						if (!(board[i][from[1]].color === "" || (i === to[0] && board[i][to[1]].color === "her"))) return false
					}
				} else {
					for (let i = from[0] + 1; i <= to[0]; i++) {
						if (!(board[i][from[1]].color === "" || (i === to[0] && board[i][to[1]].color === "her"))) return false
					}
				}
			}
			if (
				from[0] - to[0] === from[1] - to[1] ||
				from[0] - to[0] === (from[1] - to[1]) * -1 ||
				from[0] + to[0] === from[1] + to[1] ||
				from[0] + to[0] === (from[1] + to[1]) * -1
			)
				return true
			if (from[0] === to[0] || from[1] === to[1]) return true
			return false
	}
	return false
}
