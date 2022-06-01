/* eslint-disable no-undef */
describe('Search/Main', function() {
  it('search/main page can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Lunch app');
    cy.contains('Vote Lunches');
  });

  it('input works', () => {
    cy.visit('http://localhost:3000');
    cy.get('#searchpage-input').type('helsinki');
    cy.contains('votes:');
    cy.contains('open:');
  });

  it('input works but no results', () => {
    cy.visit('http://localhost:3000');
    cy.get('#searchpage-input').type('k');
    cy.contains('no results found...');
  });

  it('voting works', () => {
    cy.visit('http://localhost:3000');
    cy.get('#searchpage-input').type('helsinki');
    cy.get('#Outline').click();
    cy.get('#Filled');
  });
});