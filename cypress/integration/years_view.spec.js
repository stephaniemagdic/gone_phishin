// years_view.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

beforeEach(() => {
  cy.visit('http://localhost:3000/');
  cy.fetchYears('http://phish.in/api/v1/years');
});

describe('Landing Page (Years View)', () => {
  it('should be able to get all elements on the page', () => {
    cy.get('img')
      .should('have.attr', 'src')
      .should('include', 'phish-in-logo')
      .get('a')
      .should('have.attr', 'href')
      .get('h3')
      .eq(0)
      .contains('2021')
      .get('h3')
      .eq(29)
      .contains('1983-1987')
      .get('footer')
      .contains('Footer');
  });
});
