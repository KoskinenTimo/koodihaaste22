/* eslint-disable no-undef */
describe('Language and theme', () => {
  it('Language can be changed from menu', () => {
    cy.visit('http://localhost:3000');
    cy.get('button:first').click();
    cy.get('#cross').click();
    cy.contains('Lounas appi');
  });

  it('Theme can be changed from menu', () => {
    cy.visit('http://localhost:3000');
    cy.get('button:first').click();
    cy.get('#toggleTheme').click();
    cy.get('button:first').click();
    cy.get('#toggleTheme').should('have.css', 'background-color', 'rgb(75, 88, 66)');
  });
});
