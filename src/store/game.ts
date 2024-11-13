import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { Board, color, PlayerColor } from "../../types.d"
import { initialBoard } from "../../constants"
import { sendMoves } from "../components/game"

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
	fixBoardToBlack: () => void
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
					set({ color: newColor })
				},
				board: initialBoard,
				getEnemyMoves({ from, to }) {
					const board = get().board
					const newBoard: Board = structuredClone(board)
					if (board[from[0]][from[1]].piece !== "") {
						newBoard[to[0]][to[1]] = board[from[0]][from[1]]
						newBoard[from[0]][from[1]] = { piece: "", color: "" }
					}
					set({ board: newBoard })
				},
				fixBoardToBlack() {
					const board = get().board
					board[0][3] = { piece: "king", color: "her" }
					board[0][4] = { piece: "queen", color: "her" }

					board[7][3] = { piece: "king", color: "me" }
					board[7][4] = { piece: "queen", color: "me" }

					set({ board })
				},
				move: (from, to) => {
					sendMoves({ from, to })
					const board = get().board
					board[to[0]][to[1]] = board[from[0]][from[1]]
					board[from[0]][from[1]] = { piece: "", color: "" }
					set({ board })
				},
			}
		},
		{ name: "game" },
	),
)
