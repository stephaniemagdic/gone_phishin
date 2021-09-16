describe('Show Display User Flows', () => {
  //  User should see all shows in a given year.
  it('A user should see stored reservation data should be loaded on the page', () => {
    const year = 2019;

    cy.intercept('GET', `http://phish.in/api/v1/years/${year}` , {
      statusCode: 200,
      body: { data: [
        { 
          date: "2019-02-21",
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
          venue_name: "TEST NAME 1"
        },
        { 
          date: "2019-02-21",
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
          venue_name: "TEST NAME 2"
        }
      ]
      }
    })
    cy.visit('http://localhost:3000/years/2019')
    cy.get('.ShowCard').first().contains('TEST NAME 1')
    cy.get('.ShowCard').last().contains('TEST NAME 2')
  });


});