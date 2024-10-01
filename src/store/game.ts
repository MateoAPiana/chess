import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { Board } from "../../types.d"
import { initialBoard } from "../../constants"

interface State {
	board: Board
	move: (from: [number, number], to: [number, number]) => void
}

export const useGameStore = create<State>()(
	devtools(
		(set, get) => {
			return {
				board: initialBoard,
				move: (from, to) => {
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
