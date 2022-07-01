/* eslint-disable no-undef */
describe('Not found', () => {
  it('Not found page can be opened with bad url', () => {
    cy.visit('http://localhost:3000/fdgfdgfdg');
    cy.contains('not found');
  });
});
