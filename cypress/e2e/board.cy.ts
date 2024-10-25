/// <reference types="cypress" />
describe('Pruebas de dos jugadores en distintas pestañas', () => {
  it('Permite a dos jugadores unirse y realizar movimientos', () => {
    cy.visit('http://localhost:5173')
    cy.window().then((win1) => {
      const firstWindow = win1

      cy.visit('http://localhost:5173')
      cy.window().then((win2) => {
        const secondWindow = win2

        let whitePlayer = firstWindow
        let blackPlayer = secondWindow

        cy.wrap(firstWindow).its('socket').invoke('on', 'paired', (color) => {
          if (color === "black") {
            whitePlayer = secondWindow
            blackPlayer = firstWindow
          }
        })

        cy.wrap(whitePlayer).its('socket').invoke('emit', 'move', { fromEnemy: [6, 4], toEnemy: [4, 4] })

        cy.wrap(blackPlayer).its('socket').invoke('on', 'getMove', (move) => {
          expect(move.from).to.equal([6, 4])
          expect(move.to).to.equal([4, 4])
        })
      })
    })
  })
})
