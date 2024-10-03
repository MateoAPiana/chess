export type Piece =
	| "pawn"
	| "knight"
	| "bishop"
	| "rook"
	| "queen"
	| "king"
	| ""
export type PlayerColor = "me" | "her" | ""

export type color = "white" | "black"

export type cell = {
	piece: Piece
	color: PlayerColor
}

type row = [cell, cell, cell, cell, cell, cell, cell, cell]

export type Board = [row, row, row, row, row, row, row, row]
