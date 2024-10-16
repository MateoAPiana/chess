import type { Board } from "../../types"

export function isInJake(
	board: Board,
	from: [number, number],
	to: [number, number],
) {
	const newBoard: Board = structuredClone(board)

	try {
		if (board[to[0]][to[1]].piece === "") {
			newBoard[to[0]][to[1]] = board[from[0]][from[1]]
			newBoard[from[0]][from[1]] = { piece: "", color: "" }
		}
	} catch (error) {
		return false
	}

	const kingIndex = newBoard
		.map((r, index) => {
			const king = r.findIndex((c) => c.piece === "king" && c.color === "me")
			if (king !== -1) return [index, king]
		})
		.filter((i) => i !== undefined)
		.flat()

	console.log(newBoard)

	// ----------------- Jake of the Rook or Queen -----------------

	for (let c = kingIndex[1] - 1; c >= 0; c--) {
		if (newBoard[kingIndex[0]][c].color === "me") break
		if (newBoard[kingIndex[0]][c].color === "her") {
			if (
				newBoard[kingIndex[0]][c].piece === "rook" ||
				newBoard[kingIndex[0]][c].piece === "queen"
			) {
				return true
			}
			break
		}
	}

	for (let c = kingIndex[1] + 1; c <= 7; c++) {
		if (newBoard[kingIndex[0]][c].color === "me") break
		if (newBoard[kingIndex[0]][c].color === "her") {
			if (
				newBoard[kingIndex[0]][c].piece === "rook" ||
				newBoard[kingIndex[0]][c].piece === "queen"
			) {
				return true
			}
			break
		}
	}


	for (let c = kingIndex[0] - 1; c >= 0; c--) {

		if (newBoard[c][kingIndex[1]].color === "me") break

		if (newBoard[c][kingIndex[1]].color === "her") {
			if (
				newBoard[c][kingIndex[1]].piece === "rook" ||
				newBoard[c][kingIndex[1]].piece === "queen"
			) {
				return true
			}
			break
		}
	}

	for (let c = kingIndex[0] + 1; c <= 0; c++) {
		if (newBoard[c][kingIndex[1]].color === "me") break
		if (newBoard[c][kingIndex[1]].color === "her") {
			if (
				newBoard[c][kingIndex[1]].piece === "rook" ||
				newBoard[c][kingIndex[1]].piece === "queen"
			) {
				return true
			}
			break
		}
	}

	// ----------------- Jake of the Bishop or Queen -----------------

	let col = kingIndex[1] + 1
	for (let r = kingIndex[0] + 1; r <= 7 || col <= 7; r++, col++) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === "me") break
		if (cell.color === "her") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return true
			}
			break
		}
	}

	col = kingIndex[1] - 1

	for (let r = kingIndex[0] - 1; r < 7 || col < 7; r--, col--) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === "me") break
		if (cell.color === "her") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return true
			}
			break
		}
	}

	col = kingIndex[1] + 1
	for (let r = kingIndex[0] - 1; r >= 7 || col <= 7; r--, col++) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === "me") break
		if (cell.color === "her") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return true
			}
			break
		}
	}

	col = kingIndex[1] - 1

	for (let r = kingIndex[0] + 1; r <= 7 || col >= 7; r++, col--) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === "me") break
		if (cell.color === "her") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return true
			}
			break
		}
	}

	// ----------------- Jake of the Knight -----------------

	try {
		if (
			(newBoard[kingIndex[0] - 1][kingIndex[1] - 2].piece === "knight" && newBoard[kingIndex[0] - 1][kingIndex[1] - 2].color === "her") ||
			(newBoard[kingIndex[0] - 1][kingIndex[1] + 2].piece === "knight" && newBoard[kingIndex[0] - 1][kingIndex[1] + 2].color === "her")
		)
			return true
	} catch (error) { }
	try {
		if (
			(newBoard[kingIndex[0] + 1][kingIndex[1] - 2].piece === "knight" && newBoard[kingIndex[0] + 1][kingIndex[1] - 2].color === "her") ||
			(newBoard[kingIndex[0] + 1][kingIndex[1] + 2].piece === "knight" && newBoard[kingIndex[0] + 1][kingIndex[1] + 2].color === "her")
		)
			return true
	} catch (error) { }
	try {
		if (
			(newBoard[kingIndex[0] + 2][kingIndex[1] - 1].piece === "knight" && newBoard[kingIndex[0] + 2][kingIndex[1] - 1].color === "her") ||
			(newBoard[kingIndex[0] + 2][kingIndex[1] + 1].piece === "knight" && newBoard[kingIndex[0] + 2][kingIndex[1] + 1].color === "her")
		)
			return true
	} catch (error) { }
	try {
		if (
			(newBoard[kingIndex[0] - 2][kingIndex[1] - 1].piece === "knight" && newBoard[kingIndex[0] - 2][kingIndex[1] - 1].color === "her") ||
			(newBoard[kingIndex[0] - 2][kingIndex[1] + 1].piece === "knight" && newBoard[kingIndex[0] - 2][kingIndex[1] + 1].color === "her")
		)
			return true
	} catch (error) { }

	// ----------------- Jake of the Pawn -----------------

	try {
		if ((newBoard[kingIndex[0] - 1][kingIndex[1] - 1].piece === "pawn" &&
			newBoard[kingIndex[0] - 1][kingIndex[1] - 1].color === "her") ||
			(newBoard[kingIndex[0] - 1][kingIndex[1] + 1].piece === "pawn" &&
				newBoard[kingIndex[0] - 1][kingIndex[1] + 1].color === "her")
		) {
			return true
		}
	} catch (error) { }

	// ----------------- Jake of the King ----------------

	try {
		if (newBoard[kingIndex[0]][kingIndex[1] - 1].piece === "king" ||
			newBoard[kingIndex[0]][kingIndex[1] + 1].piece === "king" ||
			newBoard[kingIndex[0] - 1][kingIndex[1] - 1].piece === "king" ||
			newBoard[kingIndex[0] - 1][kingIndex[1]].piece === "king" ||
			newBoard[kingIndex[0] - 1][kingIndex[1] + 1].piece === "king" ||
			newBoard[kingIndex[0] + 1][kingIndex[1] - 1].piece === "king" ||
			newBoard[kingIndex[0] + 1][kingIndex[1]].piece === "king" ||
			newBoard[kingIndex[0] + 1][kingIndex[1] + 1].piece === "king"
		) return true
	} catch (error) { }

	return false
}
