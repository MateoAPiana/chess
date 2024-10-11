import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { Board, color, PlayerColor } from "../../types.d"
import { initialBoard } from "../../constants"
import { sendMoves } from "../components/game"

interface State {
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
				Jake: 0,
				setJake(newJake) {
					console.log(newJake)

					if (newJake === 2) {
						const initialTurn: PlayerColor = ""
						set({
							board: initialBoard,
							color: "white",
							turn: initialTurn,
							Jake: 0,
						})
					} else set({ Jake: newJake })
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
					const newBoard: Board = [
						board[0],
						board[1],
						board[2],
						board[3],
						board[4],
						board[5],
						board[6],
						board[7],
					]
					if (board[to[0]][to[1]].piece === "") {
						newBoard[to[0]][to[1]] = board[from[0]][from[1]]
						newBoard[from[0]][from[1]] = { piece: "", color: "" }
					}
					set({ board: newBoard })
				},
				fixBoardToBlack() {
					const board = get().board
					const newBoard: Board = [
						board[0],
						board[1],
						board[2],
						board[3],
						board[4],
						board[5],
						board[6],
						board[7],
					]
					newBoard[0][3] = { piece: "king", color: "her" }
					newBoard[0][4] = { piece: "queen", color: "her" }

					newBoard[7][3] = { piece: "king", color: "me" }
					newBoard[7][4] = { piece: "queen", color: "me" }

					set({ board: newBoard })
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
