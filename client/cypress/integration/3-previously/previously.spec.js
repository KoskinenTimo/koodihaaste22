/* eslint-disable no-undef */
describe('Previous votes', function() {
  it('Previous votes page can be opened', () => {
    cy.visit('http://localhost:3000/previousvotes');
    cy.contains('Previous votes');
  });

  it('Renders votes', () => {
    cy.visit('http://localhost:3000');
    cy.get('#searchpage-input').type('helsinki');
    cy.get('#Outline').click();
    cy.visit('http://localhost:3000/previousvotes');
    cy.contains('votes');
  });
});