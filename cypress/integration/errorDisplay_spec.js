describe('Show Display User Flows', () => {
it('A user should be taken to an error page if the server is down', () => {
  // cy.makeRequestWithServerDown()
  cy.visit('http://localhost:3000/years/idontexist')
  cy.get('.error-display')
})


})