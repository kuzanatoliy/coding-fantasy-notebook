describe('login', () => {
  it.skip('pretest', () => {
    cy.visit('https://codingfantasy.com');
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type(Cypress.env('email_login'));
    cy.get('button').click();
    cy.get('div[role="dialog"]').should('contain', 'Check your email!');
    cy.visit('https://mail.yandex.ru/light');
    cy.origin('https://passport.yandex.ru', () => {
      cy.get('[data-t="field:input-login"]').type(Cypress.env('login'));
      cy.get('[data-t="button:action:passp:sign-in"]').click();
      cy.get('[data-t="field:input-passwd"]').type(
        Cypress.env('email_password')
      );
      cy.get('[data-t="button:action:passp:sign-in"]').click();
    });
    cy.origin('https://mail.yandex.ru', () => {
      cy.get('.b-folders__folder__link[href="/lite/inbox"]').click();
      cy.get('.b-messages__message:first-of-type .b-messages__from').click();
      cy.get('body').then(($body) => {
        if (
          $body.find('.b-messages__message:first-of-type .b-messages__from')
            .length
        ) {
          cy.get(
            '.b-messages__message:first-of-type .b-messages__from'
          ).click();
        }
      });
      cy.get('[href*="https://codingfantassy-prod.firebaseapp.com"]', {
        timeout: 10000,
      }).click();
    });

    cy.visit('https://codingfantasy.com/games');
    cy.get('[href="/games"]').should('contain', 'Games');
    cy.get('[href="/profile"]', { timeout: 10000 }).should('contain', 'Hero');
  });
});
