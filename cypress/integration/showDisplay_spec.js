describe('Show Display User Flows', () => {
  it('A user should see stored reservation data should be loaded on the page', () => {
    cy.fetch2019Shows() 
    cy.visit('http://localhost:3000/years/2019')
    cy.url().should('include', 2019)
    cy.get('.show-card').first().get('.venue').contains('TEST NAME 1')
    cy.get('.date').contains('DATE TEST 1')
    cy.get('.location').contains('TEST LOCATION 1')
    cy.get('.show-card').last().get('.venue').contains('TEST NAME 2')
    cy.get('.date').contains('DATE TEST 2')
    cy.get('.location').contains('TEST LOCATION 2')
  });


  it('A user should be able to click on a card and be taken to a new page', () => {
    cy.fetchShowData() 
    cy.get('.show-card').first().click()
    cy.url().should('include', '/shows/1')
    cy.fetch2019Shows()
    cy.visit('http://localhost:3000/years/2019')
    cy.get('.show-card').last().click()
    cy.url().should('include', '/shows/2')
    cy.get('.show-info')
    cy.contains('TEST SHOW DATE')
    cy.contains('TEST LOCATION 2')
    cy.contains('TEST NAME 2')
  })

  it('A user should be able to select a drop down year to see new show data displayed', () => {
    cy.fetch2020Shows()
    cy.visit('http://localhost:3000/years/2019')
    cy.get('select').select('2020')
    cy.url().should('include', 2020)
    cy.get('.show-card').first().get('.date').contains('DATE TEST 1 FOR 2020')
    cy.get('.location').contains('TEST LOCATION 1 FOR 2020')
    cy.get('.show-card').last().get('.venue').contains('TEST NAME 1 FOR 2020')
  })

  it('A user should be able to click the Change Theme button and see party mode styling', () => {
    //  cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')

  })

  

})

