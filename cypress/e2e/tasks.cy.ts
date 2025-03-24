import { levels } from '../fixtures/levels';

console.log(levels);

describe('...', () => {
  it('pretest', () => {
    cy.visit('https://codingfantasy.com');
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type(Cypress.env('email_login'));
    cy.get('button').click();
    cy.get('div[role="dialog"]').should('contain', 'Check your email!');
    cy.origin('https://accounts.zoho.eu', () => {
      cy.visit('/signin');
      cy.get('input[name="LOGIN_ID"]').type(Cypress.env('email_login'));
      cy.get('#nextbtn').click();
      cy.get('input[name="PASSWORD"]').type(Cypress.env('email_password'));
      cy.get('#nextbtn').click();
    });

    cy.origin('https://mail.zoho.eu/zm', () => {
      cy.get(
        '[aria-label*="noreply@codingfantassy-prod.firebaseapp.com"]:first'
      ).click();
    });
  });

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
