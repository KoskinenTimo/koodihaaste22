/* eslint-disable no-undef */
describe('Todays votes', function() {
  it('Todays votes page can be opened', () => {
    cy.visit('http://localhost:3000/todaysvotes')
    cy.contains('Todays votes')
  })

  it('Renders votes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#searchpage-input').type('helsinki')
    cy.get('#Outline').click()
    cy.visit('http://localhost:3000/todaysvotes')
    cy.contains('votes')
  })
})