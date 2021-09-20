describe('Show Display User Flows', () => {
  it('A user should be taken to an error page if bad path is visited', () => {
    cy.visit('years/idontexist')
    cy.get('.error-display')
  })

  it('Phish in page logo should take user back to the home page', () => {
    cy.get('.phish-in-logo').click()
    cy.url().should('not.include', 'idontexist')
  })

})