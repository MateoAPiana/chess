import type { Board, cell, PlayerColor } from "../../types"

export function isInJake(
	board: Board,
	from?: [number, number],
	to?: [number, number],
	cell?: cell
): [boolean, cell] {
	const newBoard: Board = structuredClone(board)

	if (from !== undefined && to !== undefined) {
		try {
			newBoard[to[0]][to[1]] = board[from[0]][from[1]]
			newBoard[from[0]][from[1]] = { piece: "", color: "" }
		} catch (error) {
			return [false, { piece: "", color: "" } as cell]
		}
	}

	const myColor: PlayerColor = cell ? cell.color : "me"

	const pieceIndex = cell
		? newBoard
			.map((r, index) => {
				const piece = r.findIndex((c) => c.color === cell.color && c.piece === cell.piece)
				if (piece !== -1) return [index, piece]
			})
			.filter((i) => i !== undefined)
			.flat()
		: newBoard
			.map((r, index) => {
				const king = r.findIndex((c) => c.piece === "king" && c.color === "me")
				if (king !== -1) return [index, king]
			})
			.filter((i) => i !== undefined)
			.flat()

	if (pieceIndex[0] === undefined || pieceIndex[1] === undefined) return [false, { piece: "", color: "" } as cell]

	// ----------------- Jake of the Rook or Queen -----------------

	for (let c = pieceIndex[1] - 1; c >= 0; c--) {
		if (newBoard[pieceIndex[0]][c].color === myColor) break
		if (newBoard[pieceIndex[0]][c].color !== "") {
			if (
				newBoard[pieceIndex[0]][c].piece === "rook" ||
				newBoard[pieceIndex[0]][c].piece === "queen"
			) {
				return [true, newBoard[pieceIndex[0]][c]]
			}
			break
		}
	}

	for (let c = pieceIndex[1] + 1; c <= 7; c++) {
		if (newBoard[pieceIndex[0]][c].color === myColor) break
		if (newBoard[pieceIndex[0]][c].color !== "") {
			if (
				newBoard[pieceIndex[0]][c].piece === "rook" ||
				newBoard[pieceIndex[0]][c].piece === "queen"
			) {
				return [true, newBoard[pieceIndex[0]][c]]
			}
			break
		}
	}


	for (let c = pieceIndex[0] - 1; c >= 0; c--) {

		if (newBoard[c][pieceIndex[1]].color === myColor) break

		if (newBoard[c][pieceIndex[1]].color !== "") {
			if (
				newBoard[c][pieceIndex[1]].piece === "rook" ||
				newBoard[c][pieceIndex[1]].piece === "queen"
			) {
				return [true, newBoard[c][pieceIndex[1]]]
			}
			break
		}
	}

	for (let c = pieceIndex[0] + 1; c <= 0; c++) {
		if (newBoard[c][pieceIndex[1]].color === myColor) break
		if (newBoard[c][pieceIndex[1]].color !== "") {
			if (
				newBoard[c][pieceIndex[1]].piece === "rook" ||
				newBoard[c][pieceIndex[1]].piece === "queen"
			) {
				return [true, newBoard[c][pieceIndex[1]]]
			}
			break
		}
	}

	// ----------------- Jake of the Bishop or Queen -----------------

	let col = pieceIndex[1] + 1
	for (let r = pieceIndex[0] + 1; r <= 7 || col <= 7; r++, col++) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === myColor) break
		if (cell.color !== "") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return [true, cell]
			}
			break
		}
	}

	col = pieceIndex[1] - 1

	for (let r = pieceIndex[0] - 1; r < 7 || col < 7; r--, col--) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === myColor) break
		if (cell.color !== "") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return [true, cell]
			}
			break
		}
	}

	col = pieceIndex[1] + 1
	for (let r = pieceIndex[0] - 1; r >= 7 || col <= 7; r--, col++) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === myColor) break
		if (cell.color !== "") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return [true, cell]
			}
			break
		}
	}

	col = pieceIndex[1] - 1

	for (let r = pieceIndex[0] + 1; r <= 7 || col >= 7; r++, col--) {
		if (newBoard[r] === undefined || newBoard[r][col] === undefined) break
		const cell = newBoard[r][col]
		if (cell.color === myColor) break
		if (cell.color !== "") {
			if (cell.piece === "bishop" || cell.piece === "queen") {
				return [true, cell]
			}
			break
		}
	}

	// ----------------- Jake of the Knight -----------------

	try {
		if (
			(newBoard[pieceIndex[0] - 1][pieceIndex[1] - 2].piece === "knight"
				&& newBoard[pieceIndex[0] - 1][pieceIndex[1] - 2].color !== myColor
				&& newBoard[pieceIndex[0] - 1][pieceIndex[1] - 2].color !== "")
		)
			return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1] - 2]]
	} catch (error) { }

	try {
		if (
			(newBoard[pieceIndex[0] - 1][pieceIndex[1] + 2].piece === "knight"
				&& newBoard[pieceIndex[0] - 1][pieceIndex[1] + 2].color !== myColor
				&& newBoard[pieceIndex[0] - 1][pieceIndex[1] + 2].color !== "")
		)
			return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1] + 2]]
	} catch (error) { }

	try {
		if (

			(newBoard[pieceIndex[0] + 1][pieceIndex[1] + 2].piece === "knight"
				&& newBoard[pieceIndex[0] + 1][pieceIndex[1] + 2].color !== myColor
				&& newBoard[pieceIndex[0] + 1][pieceIndex[1] + 2].color !== ""
			)
		)
			return [true, newBoard[pieceIndex[0] + 1][pieceIndex[1] + 2]]
	} catch (error) { }

	try {
		if (
			(newBoard[pieceIndex[0] + 1][pieceIndex[1] - 2].piece === "knight"
				&& newBoard[pieceIndex[0] + 1][pieceIndex[1] - 2].color !== myColor
				&& newBoard[pieceIndex[0] + 1][pieceIndex[1] - 2].color !== ""
			)
		)
			return [true, newBoard[pieceIndex[0] + 1][pieceIndex[1] - 2]]
	} catch (error) { }

	try {
		if (
			(newBoard[pieceIndex[0] + 2][pieceIndex[1] + 1].piece === "knight"
				&& newBoard[pieceIndex[0] + 2][pieceIndex[1] + 1].color !== myColor
				&& newBoard[pieceIndex[0] + 2][pieceIndex[1] + 1].color !== ""
			)
		)
			return [true, newBoard[pieceIndex[0] + 2][pieceIndex[1] + 1]]
	} catch (error) { }

	try {
		if (
			(newBoard[pieceIndex[0] + 2][pieceIndex[1] - 1].piece === "knight"
				&& newBoard[pieceIndex[0] + 2][pieceIndex[1] - 1].color !== myColor
				&& newBoard[pieceIndex[0] + 2][pieceIndex[1] - 1].color !== ""
			)
		)
			return [true, newBoard[pieceIndex[0] + 2][pieceIndex[1] - 1]]
	} catch (error) { }

	try {
		if (
			(newBoard[pieceIndex[0] - 2][pieceIndex[1] + 1].piece === "knight"
				&& newBoard[pieceIndex[0] - 2][pieceIndex[1] + 1].color !== myColor
				&& newBoard[pieceIndex[0] - 2][pieceIndex[1] + 1].color !== ""
			)
		)
			return [true, newBoard[pieceIndex[0] - 2][pieceIndex[1] + 1]]
	} catch (error) { }

	try {
		if (
			(newBoard[pieceIndex[0] - 2][pieceIndex[1] - 1].piece === "knight"
				&& newBoard[pieceIndex[0] - 2][pieceIndex[1] - 1].color !== myColor
				&& newBoard[pieceIndex[0] - 2][pieceIndex[1] - 1].color !== ""
			)
		)
			return [true, newBoard[pieceIndex[0] - 2][pieceIndex[1] - 1]]
	} catch (error) { }

	// ----------------- Jake of the Pawn -----------------

	try {
		if ((newBoard[pieceIndex[0] - 1][pieceIndex[1] + 1].piece === "pawn"
			&& newBoard[pieceIndex[0] - 1][pieceIndex[1] + 1].color !== myColor
			&& newBoard[pieceIndex[0] - 1][pieceIndex[1] + 1].color !== ""
		)
		) {
			return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1] + 1]]
		}
	} catch (error) { }

	try {
		if ((newBoard[pieceIndex[0] - 1][pieceIndex[1] - 1].piece === "pawn"
			&& newBoard[pieceIndex[0] - 1][pieceIndex[1] - 1].color !== myColor
			&& newBoard[pieceIndex[0] - 1][pieceIndex[1] - 1].color !== ""
		)
		) {
			return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1] - 1]]
		}
	} catch (error) { }

	// ----------------- Jake of the King ----------------

	try {
		if (newBoard[pieceIndex[0]][pieceIndex[1] - 1].piece === "king"
		) return [true, newBoard[pieceIndex[0]][pieceIndex[1] - 1]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0]][pieceIndex[1] + 1].piece === "king"
		) return [true, newBoard[pieceIndex[0]][pieceIndex[1] + 1]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0] - 1][pieceIndex[1] - 1].piece === "king"
		) return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1] - 1]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0] - 1][pieceIndex[1]].piece === "king"
		) return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1]]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0] - 1][pieceIndex[1] + 1].piece === "king"
		) return [true, newBoard[pieceIndex[0] - 1][pieceIndex[1] + 1]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0] + 1][pieceIndex[1] - 1].piece === "king"
		) return [true, newBoard[pieceIndex[0] + 1][pieceIndex[1] - 1]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0] + 1][pieceIndex[1]].piece === "king"
		) return [true, newBoard[pieceIndex[0] + 1][pieceIndex[1]]]
	} catch (error) { }

	try {
		if (
			newBoard[pieceIndex[0] + 1][pieceIndex[1] + 1].piece === "king"
		) return [true, newBoard[pieceIndex[0] + 1][pieceIndex[1] + 1]]
	} catch (error) { }

	return [false, { piece: "", color: "" } as cell]
}
