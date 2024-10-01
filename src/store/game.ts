import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Board } from '../../types.d'
import { initialBoard } from '../../constants'

interface State {
  board: Board
}

export const useGameStore = create<State>()(devtools(persist((set, get) => {
  return {
    board: initialBoard
  }
}, { name: 'game' })))