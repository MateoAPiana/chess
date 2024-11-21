import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { Board, color, PlayerColor } from "../../types.d"
import { initialBoard } from "../../constants"
import { sendMoves } from "../services/socket"

interface State {
	moveToCastling: 0 | 1 | 2 | 3
	setMovesToCastling: (newValue: 0 | 1 | 2 | 3) => void
	Jake: number
	turn: PlayerColor
	setJake: (newJake: number) => void
	setTurn: (newTurn: PlayerColor) => void
	color: color
	changeColor: (newColor: color) => void
	getEnemyMoves: ({
		from,
		to,
	}: { from: [number, number]; to: [number, number] }) => void
	board: Board
	move: (from: [number, number], to: [number, number]) => void
}

export const useGameStore = create<State>()(
	devtools(
		(set, get) => {
			return {
				moveToCastling: 0,
				setMovesToCastling(newValue) {
					console.log({ newValue })
					const moveToCastling = get().moveToCastling
					if (moveToCastling === 3 || (moveToCastling === 1 && newValue === 2) || (moveToCastling === 2 && newValue === 1)) set({ moveToCastling: 3 })
					else set({ moveToCastling: newValue })
				},
				Jake: 0,
				setJake(newJake) {
					set({ Jake: newJake })
				},
				turn: "",
				setTurn(newTurn) {
					set({ turn: newTurn })
				},
				color: "white",
				changeColor(newColor) {
					const newBoard = get().board
					if (newColor === "black") {
						newBoard[0][3] = { piece: "king", color: "her" }
						newBoard[0][4] = { piece: "queen", color: "her" }

						newBoard[7][3] = { piece: "king", color: "me" }
						newBoard[7][4] = { piece: "queen", color: "me" }
						console.log(newBoard)
					}
					set({ color: newColor, board: newBoard })
				},
				board: initialBoard,
				getEnemyMoves({ from, to }) {
					const board = get().board
					const newBoard: Board = structuredClone(board)
					if (newBoard[from[0]][from[1]].piece !== "") {
						if (newBoard[from[0]][from[1]].piece === "king" && to[1] === from[1] - 2) {
							newBoard[0][0] = { piece: "", color: "" }
							if (from[1] === 4) newBoard[0][3] = { piece: "rook", color: "her" }
							else newBoard[0][2] = { piece: "rook", color: "her" }
						}
						else if (newBoard[from[0]][from[1]].piece === "king" && to[1] === from[1] + 2) {
							newBoard[0][7] = { piece: "", color: "" }
							if (from[1] === 4) newBoard[0][5] = { piece: "rook", color: "her" }
							else newBoard[0][4] = { piece: "rook", color: "her" }
						}
						newBoard[to[0]][to[1]] = board[from[0]][from[1]]
						newBoard[from[0]][from[1]] = { piece: "", color: "" }
					}
					set({ board: newBoard })
				},
				move: (from, to) => {
					sendMoves({ from, to })
					const board = get().board
					if (board[from[0]][from[1]].piece === "king" && to[1] === from[1] - 2) {
						board[7][0] = { piece: "", color: "" }
						if (from[1] === 4) board[7][3] = { piece: "rook", color: "me" }
						else board[7][2] = { piece: "rook", color: "me" }
					}
					else if (board[from[0]][from[1]].piece === "king" && to[1] === from[1] + 2) {
						board[7][7] = { piece: "", color: "" }
						if (from[1] === 4) board[7][5] = { piece: "rook", color: "me" }
						else board[7][4] = { piece: "rook", color: "me" }
					}
					board[to[0]][to[1]] = board[from[0]][from[1]]
					board[from[0]][from[1]] = { piece: "", color: "" }
					set({ board })
				},
			}
		},
		{ name: "game" },
	),
)
