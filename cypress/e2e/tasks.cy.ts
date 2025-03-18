import { levels } from '../fixtures/levels';

describe.skip('...', () => {
  it('Should open page', () => {
    console.log(levels);
    // cy.visit('https://cssgridgarden.com/#en');
    // cy.get('.title').should('contain', 'Grid Garden');
  });

  /* const testLevel = (levelNumber) => {
    console.log(levelNumber);
    // cy.visit('https://cssgridgarden.com/#en');
    // cy.get('#level-indicator').click();
    // cy.get(`.level-marker[data-level="${levelNumber}"]`).click();
    // cy.get('#editor textarea').type(levels[levelNumber].join('\n'));
    // cy.get('#next').should('not.have.class', 'disabled');
  }; */

  it('Should validate first task', () => {
    // testLevel(0);
  });
});
