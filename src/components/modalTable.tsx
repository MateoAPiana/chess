import { useState, useEffect } from 'react'
import './modalWinner.css'

interface WinnerModalProps {
  isVisible: boolean
}

export default function TableModal({ isVisible = false }: WinnerModalProps) {
  const [isOpen, setIsOpen] = useState(isVisible)

  useEffect(() => {
    setIsOpen(isVisible)
  }, [isVisible])

  return (
    <dialog open={isOpen}>
      <div className="winner-modal">
        <header>
          <h2 className="winner-modal__title">
            This is tables
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