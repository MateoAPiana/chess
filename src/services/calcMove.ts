import type { Piece } from "../../types"

export function calcMove(
	piece: Piece,
	to: [number, number],
	from: [number, number],
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
			if (from[0] - 1 === to[0] && from[1] === to[1]) {
				return true
			}
			return
		// case "knight":
		// case "bishop":
		// case "rook":
		// case "queen":
	}
	return false
}
