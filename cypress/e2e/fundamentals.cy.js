// the describe block, two agruments, 1 string that describes test, 2 call back that test block
describe('fundamental test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  });
  it('contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should(
      'contain.text',
      'Testing Fundamentals'
    );
    // cy.get('[data-test="fundamentals-header"]').should(
    //   'contain.text',
    //   'Testing Fundamentals'
    // );
  });
  it('accordion work', () => {
    cy.contains(/Your tests will exist/i).should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist/i).should('be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist/i).should('not.be.visible');
  });
});

// it block is is similar to individual test, then call back to
