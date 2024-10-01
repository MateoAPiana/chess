import type { cell, Piece, PlayerColor, Board, row } from "./types.d"
export const initialBoard: Board = [
  [
    { piece: "rook" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "knight" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "bishop" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "queen" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "king" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "bishop" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "knight" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "rook" as Piece, color: "black" as PlayerColor } as cell
  ] as row,
  [
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "black" as PlayerColor } as cell
  ] as row,
  [
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell
  ] as row,
  [
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell
  ] as row,
  [
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell
  ] as row,
  [
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell,
    { piece: "" as Piece, color: "" as PlayerColor } as cell
  ] as row,
  [
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "pawn" as Piece, color: "white" as PlayerColor } as cell
  ] as row,
  [
    { piece: "rook" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "knight" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "bishop" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "queen" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "king" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "bishop" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "knight" as Piece, color: "white" as PlayerColor } as cell,
    { piece: "rook" as Piece, color: "white" as PlayerColor } as cell
  ] as row,
]
