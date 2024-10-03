import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { Board } from "../../types.d"
import { initialBoard } from "../../constants"
import { sendMoves } from "../App"

interface State {
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
				board: initialBoard,
				getEnemyMoves({ from, to }) {
					console.log({ from, to })
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
					newBoard[to[0]][to[1]] = board[from[0]][from[1]]
					newBoard[from[0]][from[1]] = { piece: "", color: "" }
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
