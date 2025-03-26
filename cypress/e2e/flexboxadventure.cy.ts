/* eslint-disable @typescript-eslint/ban-ts-comment */
describe('Flexbox Adventure', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    // @ts-ignore
    cy.login();
  });

  it('Should solve first task', () => {
    cy.visit('https://codingfantasy.com/games/flexboxadventure/play');
    cy.get('[class*="game_description"]').should('contain', 'Level');
    cy.get('body').then(($body) => {
      if ($body.find('[role="dialog"]').length) {
        cy.contains('Hard').click();
        cy.get('[role="dialog"] button').click();
      }
    });
    cy.get('button[class*="LevelDropdown_ddHeader"]').click();
    cy.get('[class*="LevelDropdown_ddList"]').contains('Level 1').click();
    cy.get('textarea[class*="Editor_code"]').type('justify-content: center;');
    cy.get('[class*="game_editor"] button').click();
    cy.get('[role="dialog"]').should('contain', 'Level 1 completed');
  });

  it('Should solve second task', () => {
    cy.visit('https://codingfantasy.com/games/flexboxadventure/play');
    cy.get('[class*="game_description"]').should('contain', 'Level');
    cy.get('body').then(($body) => {
      if ($body.find('[role="dialog"]').length) {
        cy.contains('Hard').click();
        cy.get('[role="dialog"] button').click();
      }
    });
    cy.get('button[class*="LevelDropdown_ddHeader"]').click();
    cy.get('[class*="LevelDropdown_ddList"]').contains('Level 2').click();
    cy.get('textarea[class*="Editor_code"]').type('justify-content: flex-end;');
    cy.get('[class*="game_editor"] button').click();
    cy.get('[role="dialog"]').should('contain', 'Level 2 completed');
  });
});
