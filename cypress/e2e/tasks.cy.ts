import { levels } from '../fixtures/levels';

console.log(levels);

describe('...', () => {
  it('pretest', () => {
    cy.visit('https://codingfantasy.com');
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type(Cypress.env('email_login'));
    cy.get('button').click();
    cy.get('div[role="dialog"]').should('contain', 'Check your email!');
    cy.visit('https://mail.rambler.ru/folder/INBOX');
    //cy.origin('https://www.rambler.ru', () => {
    //  cy.get('[href="https://mail.rambler.ru/"]').click();
    //});
    cy.visit(
      'https://id.rambler.ru/login-20/login?back=https%3A%2F%2Fmail.rambler.ru%2F&rname=mail&theme=mail&session=false'
    );
    cy.origin('https://id.rambler.ru', () => {
      Cypress.on('uncaught:exception', () => false);
      cy.get('#login').type(Cypress.env('email_login'));
      cy.get('#password').type(Cypress.env('email_password'));
      cy.get('button[type="submit"]').click();
      cy.get('body').then(($body) => {
        if ($body.find('#phone').length) {
          cy.get('footer botton').click();
        }
      });
    });
    //cy.visit('https://mail.rambler.ru');
    //cy.origin('https://mail.rambler.ru', () => {
    //  cy.get('a[href="/folder/INBOX"]').click();
    //  cy.get('.ListItem-root-1i:first-of-type').click();
    //});

    cy.visit('https://codingfantasy.com/games');
    cy.get('a[href="/profile"]').should('contain', 'Hero');
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
