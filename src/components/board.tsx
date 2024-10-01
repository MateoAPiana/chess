import { useGameStore } from "../store/game"

export function Board() {
  const board = useGameStore(state => state.board)
  return (
    <main className="board">
      {
        board.map((r, index) => {
          return (
            <div key={index.toString()} className="row">
              {
                r.map((c, index) => {
                  return (
                    <div key={index.toString()} className="cell">
                      {c.piece !== "" && <img className="piece" src={`../../public/${c.color}/${c.piece}.png`} alt="piece" />}
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </main>
  )
}