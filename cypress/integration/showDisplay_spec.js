describe('Show Display User Flows', () => {
  //  User should see all shows in a given year.
  it('A user should see stored reservation data should be loaded on the page', () => {
    cy.fetch2019Shows() 
    cy.visit('http://localhost:3000/years/2019')
    cy.url().should('include', 2019)
    cy.get('.show-card').first().get('.venue').contains('TEST NAME 1')
    cy.get('.date').contains('DATE TEST 1')
    // cy.get('location')
    cy.get('.show-card').last().contains('TEST NAME 2')
    cy.contains('DATE TEST 2')
  });

// user should be able to click on each card and be taken to a new page.
it('A user should be able to click on a card and be taken to a new page', () => {
  cy.get('.show-card').first().click()
  cy.url().should('include', '/shows/1')
  cy.visit('http://localhost:3000/years/2019')
  cy.get('.show-card').last().click()
  cy.url().should('include', '/shows/2')
})

it('A user should be able to select a drop down year to see new show data displayed', () => {

  const year = 2020;

    cy.intercept('GET', `http://phish.in/api/v1/years/${year}` , {
      statusCode: 200,
      body: { data: [
        { 
          date: "DATE TEST 1 FOR 2020",
          duration: 9658254,
          id: 1,
          incomplete: false,
          likes_count: 5,
          remastered: false,
          sbd: false,
          tags: [],
          taper_notes: "PhishnBarcelo Maya Grand ResortnRiviera Maya, Quintana Roo, Mexicon02/21/2019nnSource",
          tour_id: 106,
          tracks: ['test', 'test', 'test', 'test'],
          updated_at: "2019-02-28T02:58:30Z",
          venue: {id: 817, slug: 'barcelo-maya-beach', name: 'name'}, other_names: [{latitude: 20.631389}],
          venue_name: "TEST NAME 1 FOR 2020"
        },
        { 
          date: "DATE TEST 2 FOR 2020",
          duration: 9658254,
          id: 2,
          incomplete: false,
          likes_count: 5,
          remastered: false,
          sbd: false,
          tags: [],
          taper_notes: "Phish\nBarcelo Maya Grand Resort\nRiviera Maya, Quintana Roo, Mexico\n02/21/2019\n\nSource ...",
          tour_id: 106,
          tracks: ['test', 'test', 'test', 'test'],
          updated_at: "2019-02-28T02:58:30Z",
          venue: {id: 817, slug: 'barcelo-maya-beach', name: 'name2'}, other_names: [{latitude: 20.631389}],
          venue_name: "TEST NAME 2 FOR 2020"
        }
      ]
      }
    })

  cy.visit('http://localhost:3000/years/2019')
  cy.get('select').select('2020')
  //there is some sort of interruption that happens. 
  //it loads and then I think a fetch then intercepts once more.
  //I think we need to change the route -- reroute as well when we update the movies on the page. .. so instead we could create a redirect.

})

})

//check something on the next page to check if it is there.
