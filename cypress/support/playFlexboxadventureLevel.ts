import { flexboxadventureLevels } from '../fixtures/flexboxadventureLevels';

Cypress.Commands.add('playFlexboxAdventureLevel', (level: number) => {
  cy.visit('https://codingfantasy.com/games/flexboxadventure/play');
  cy.get('[class*="game_description"]').should('contain', 'Level');
  cy.get('body').then(($body) => {
    if ($body.find('[role="dialog"]').length) {
      cy.contains('Hard').click();
      cy.get('[role="dialog"] button').click();
    }
  });
  cy.get('button[class*="LevelDropdown_ddHeader"]').click();
  cy.get('[class*="LevelDropdown_ddList"]').contains(`Level ${level}`).click();
  cy.get('textarea[class*="Editor_code"]').type(
    flexboxadventureLevels[level - 1].join('\n')
  );
  cy.get('[class*="game_editor"] button').click();
  cy.get('[role="dialog"]').should('contain', `Level ${level} completed`);
});
