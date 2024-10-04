import type { Board, Piece } from "../../types"

export function calcMove(
	piece: Piece,
	to: [number, number],
	from: [number, number],
	board: Board,
) {
	switch (piece) {
		case "king":
			if (from[0] === to[0]) {
				if (from[1] - 1 === to[1] || from[1] + 1 === to[1]) {
					return true
				}
			} else if (from[0] - 1 === to[0] || from[0] + 1 === to[0]) {
				if (
					from[1] - 1 === to[1] ||
					from[1] + 1 === to[1] ||
					from[1] === to[1]
				) {
					return true
				}
			}
			return
		case "pawn":
			if (from[0] === 6 && from[1] === to[1]) return true
			if (from[0] - 1 === to[0] && from[1] === to[1]) {
				return true
			}
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
							if (board[i][j].piece !== "") return false
							j++
						}
					} else {
						let j = from[1] - 1
						for (let i = from[0] + 1; i <= to[0] && j >= to[1]; i++) {
							if (board[i][j].piece !== "") return false
							j--
						}
					}
				} else {
					if (from[1] < to[1]) {
						let j = from[1] + 1
						for (let i = from[0] - 1; i >= to[0] && j <= to[1]; i--) {
							if (board[i][j].piece !== "") return false
							j++
						}
					} else {
						let j = from[1] - 1
						for (let i = from[0] - 1; i >= to[0] && j >= to[1]; i--) {
							if (board[i][j].piece !== "") return false
							j--
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
			}
			return
		case "rook": {
			if (from[0] === to[0]) {
				if (from[1] > to[1]) {
					for (let i = from[1] - 1; i >= to[1]; i--) {
						if (board[from[0]][i].piece !== "") return false
					}
				} else {
					for (let i = from[1] + 1; i <= to[1]; i++) {
						if (board[from[0]][i].piece !== "") return false
					}
				}
			} else {
				if (from[0] > to[0]) {
					for (let i = from[0] - 1; i >= to[0]; i--) {
						if (board[i][from[1]].piece !== "") return false
					}
				} else {
					for (let i = from[0] + 1; i <= to[0]; i++) {
						if (board[i][from[1]].piece !== "") return false
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
						if (board[from[0]][i].piece !== "") return false
					}
				} else {
					for (let i = from[1] + 1; i <= to[1]; i++) {
						if (board[from[0]][i].piece !== "") return false
					}
				}
			} else if (from[0] < to[0] && from[1] !== to[1]) {
				if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] + 1; i <= to[0] && j <= to[1]; i++) {
						if (board[i][j].piece !== "") return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] + 1; i <= to[0] && j >= to[1]; i++) {
						if (board[i][j].piece !== "") return false
						j--
					}
				}
			} else if (from[0] > to[0] && from[1] !== to[1]) {
				if (from[1] < to[1]) {
					let j = from[1] + 1
					for (let i = from[0] - 1; i >= to[0] && j <= to[1]; i--) {
						if (board[i][j].piece !== "") return false
						j++
					}
				} else {
					let j = from[1] - 1
					for (let i = from[0] - 1; i >= to[0] && j >= to[1]; i--) {
						if (board[i][j].piece !== "") return false
						j--
					}
				}
			} else {
				if (from[0] > to[0]) {
					for (let i = from[0] - 1; i >= to[0]; i--) {
						if (board[i][from[1]].piece !== "") return false
					}
				} else {
					for (let i = from[0] + 1; i <= to[0]; i++) {
						if (board[i][from[1]].piece !== "") return false
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
