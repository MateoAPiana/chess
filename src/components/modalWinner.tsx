import { useState, useEffect } from 'react'
import './modalWinner.css'

interface WinnerModalProps {
  winner: string
  isVisible: boolean
  onPlayAgain: () => void
}

export default function WinnerModal({ winner = '', isVisible = false, onPlayAgain }: WinnerModalProps) {
  const [isOpen, setIsOpen] = useState(isVisible)

  useEffect(() => {
    setIsOpen(isVisible)
  }, [isVisible])

  return (
    <dialog open={isOpen}>
      <div className="winner-modal">
        <header>
          <h2 className="winner-modal__title">
            {winner === 'draw' ? "It's a draw!" : `${winner} wins!`}
          </h2>
        </header>
        <footer className="winner-modal__footer">
          <a href="/game" className="winner-modal__button">
            <p>Play again</p>
          </a>
          <a href="/" className="winner-modal__button">
            <p>Return to Start</p>
          </a>
        </footer>
      </div>
    </dialog>
  )
}