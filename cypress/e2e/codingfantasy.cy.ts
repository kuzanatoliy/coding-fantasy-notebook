describe('Codingfantasy', () => {
  it('Should open home page', () => {
    cy.visit('https://codingfantasy.com');
    cy.get('h1').should('contain', 'Learn Code By Playing Games');
  });

  it('Should open games page', () => {
    cy.visit('https://codingfantasy.com/games');
    cy.contains('MCP Panic');
    cy.contains('Flex Box Adventure');
    cy.contains('Grid Attack');
  });

  it('Should open mcp page', () => {
    cy.visit('https://codingfantasy.com/games/mcp');
    cy.get('h1').should('contain', 'Model Context');
  });

  it('Should open flexbox adventure page', () => {
    cy.visit('https://codingfantasy.com/games/flexboxadventure');
    cy.get('h1').should('contain', 'Flex Box Adventure');
  });

  it('Should open flexbox adventure page', () => {
    cy.visit('https://codingfantasy.com/games/css-grid-attack');
    cy.get('h1').should('contain', 'Grid Attack');
  });
});
