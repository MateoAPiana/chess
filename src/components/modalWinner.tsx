import { useState, useEffect } from 'react'
import './modalWinner.css'

interface WinnerModalProps {
  winner: string
  isVisible: boolean
  onPlayAgain: () => void
  onReturnToStart: () => void
}

export default function WinnerModal({ winner = '', isVisible = false, onPlayAgain, onReturnToStart }: WinnerModalProps) {
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
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={onPlayAgain} className="winner-modal__button winner-modal__button--primary">
            Play Again
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={onReturnToStart} className="winner-modal__button winner-modal__button--secondary">
            Return to Start
          </button>
        </footer>
      </div>
    </dialog>
  )
}