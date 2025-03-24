import { levels } from '../fixtures/levels';

console.log(levels);

describe.skip('...', () => {
  it('Should open page', () => {
    cy.visit('https://codingfantasy.com');
    cy.get('h1').should('contain', 'Learn Code By Playing Games');
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
