import { gridattackLevels } from '../fixtures/gridattackLevels';

Cypress.Commands.add('playGridAttackLevel', (level: number) => {
  cy.visit('https://codingfantasy.com/games/css-grid-attack/play');
  cy.get('[class*="game_leftSide"] p').should('contain', 'Level');
  cy.get('body').then(($body) => {
    if ($body.find('[role="dialog"]').length) {
      cy.contains('Hard').click();
      cy.contains('Play Game').click();
    }
  });
  cy.get('[class*="LevelDropdown_ddArrow"]').click();
  cy.get('[class*="LevelDropdown_ddList"]').contains(`Level ${level}`).click();
  cy.get('textarea[class*="Editor_codeTextarea"]').focus();
  cy.get('textarea[class*="Editor_codeTextarea"]').type(
    `{moveToEnd}{upArrow}${gridattackLevels[level - 1].map((item) => item.trim() || new Array(item.length).fill('{upArrow}').join('')).join('')}`
  );
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
  cy.contains('Check Answer').click();
  cy.get('[role="dialog"]').should(
    'contain',
    level === gridattackLevels.length
      ? 'Congratulations, you made it! Just wow!'
      : `Level ${level} completed`
  );
});
