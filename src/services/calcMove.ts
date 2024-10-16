import type { Board, Piece } from "../../types"
import { isInJake } from "./isInJake"

export function calcMove(
	piece: Piece,
	to: [number, number],
	from: [number, number],
	board: Board,
	isJake: number,
) {
	const newBoard: Board = structuredClone(board)
	try {
		newBoard[to[0]][to[1]] = board[from[0]][from[1]]
		newBoard[from[0]][from[1]] = { piece: "", color: "" }
	} catch (error) {
		return false
	}

	if (isJake !== 0) {
		const isValid = calcMove(piece, to, from, board, 0)
		if (isValid) {
			console.log(newBoard)
			const isInJakeAgain = isInJake(board, from, to)
			console.log({ isInJakeAgain, cell: [from, to] })
			return !isInJakeAgain
		}
		return false
	}

	if (isInJake(newBoard, from, to)) return false

	try {
		if (board[to[0]][to[1]].color === "me") return false
	} catch (error) { }


	switch (piece) {
		case "king":
			try {
				if (board[to[0]][to[1]].piece === undefined) return false
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
			return
		case "pawn":
			if (from[0] === 6 && to[0] === 4 && from[1] === to[1]) return true
			if (from[0] - 1 === to[0] && (from[1] === to[1] || from[1] - 1 === to[1] || from[1] + 1 === to[1])) return true
			return
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
			return
		case "bishop":
			{
				if (from[0] < to[0]) {
					if (from[1] < to[1]) {
						let j = from[1] + 1
						for (let i = from[0] + 1; i <= to[0] && j <= to[1]; i++) {
							if (board[i][j].color === "me") return false
							j++
						}
					} else {
						let j = from[1] - 1
						for (let i = from[0] + 1; i <= to[0] && j >= to[1]; i++) {
							if (board[i][j].color === "me") return false
							j--
						}
					}
				} else if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] - 1; i >= to[0] && j <= to[1]; i--) {
						if (board[i][j].color === "me") return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] - 1; i >= to[0] && j >= to[1]; i--) {
						if (board[i][j].color === "me") return false
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
			return
		case "rook": {
			if (from[0] === to[0]) {
				if (from[1] > to[1]) {
					for (let i = from[1] - 1; i >= to[1]; i--) {
						if (board[from[0]][i].color === "me") return false
					}
				} else {
					for (let i = from[1] + 1; i <= to[1]; i++) {
						if (board[from[0]][i].color === "me") return false
					}
				}
			} else {
				if (from[0] > to[0]) {
					for (let i = from[0] - 1; i >= to[0]; i--) {
						if (board[i][from[1]].color === "me") return false
					}
				} else {
					for (let i = from[0] + 1; i <= to[0]; i++) {
						if (board[i][from[1]].color === "me") return false
					}
				}
			}
			if (from[0] === to[0] || from[1] === to[1]) return true
			return
		}
		case "queen":
			if (from[0] === to[0]) {
				if (from[1] > to[1]) {
					for (let i = from[1] - 1; i >= to[1]; i--) {
						if (board[from[0]][i].color === "me") return false
					}
				} else {
					for (let i = from[1] + 1; i <= to[1]; i++) {
						if (board[from[0]][i].color === "me") return false
					}
				}
			} else if (from[0] < to[0] && from[1] !== to[1]) {
				if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] + 1; i <= to[0] && j <= to[1]; i++) {
						if (board[i][j].color === "me") return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] + 1; i <= to[0] && j >= to[1]; i++) {
						if (board[i][j].color === "me") return false
						j--
					}
				}
			} else if (from[0] > to[0] && from[1] !== to[1]) {
				if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] - 1; i >= to[0] && j <= to[1]; i--) {
						if (board[i][j].color === "me") return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] - 1; i >= to[0] && j >= to[1]; i--) {
						if (board[i][j].color === "me") return false
						j--
					}
				}
			} else {
				if (from[0] > to[0]) {
					for (let i = from[0] - 1; i >= to[0]; i--) {
						if (board[i][from[1]].color === "me") return false
					}
				} else {
					for (let i = from[0] + 1; i <= to[0]; i++) {
						if (board[i][from[1]].color === "me") return false
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
			return
	}
	return false
}
