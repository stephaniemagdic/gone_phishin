describe('Track Display', () => {
  it('A user should be able to see a show/s info and individual tracks', () => {
    cy.fetchShow()
      .visit('/shows/4')
      .url()
      .should('include', 'shows/4')
      .get('.show-info')
      .contains('2019/02/21');
    cy.contains('TEST NAME 4');
    cy.contains('TEST LOCATION 4');
    cy.get('.song-title');
    cy.contains('Glide');
  });
});
