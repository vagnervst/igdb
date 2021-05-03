it('searches for a game', () => {
  cy.visit('http://localhost:3000')

  cy.server()
  cy.intercept('GET', 'http://localhost:3000/api/games?search=Monster%20Hunter').as('games')

  cy.get('input[name="search"]')
    .type('Monster Hunter')
    .should('have.value', 'Monster Hunter')

  cy.get('button[type="submit"]')
    .click()

  cy.wait('@games')
})
