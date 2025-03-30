describe('Grid Attack', () => {
  it('Should solve first task', () => {
    cy.playGridAttackLevel(1);
  });

  it('Should solve second task', () => {
    cy.playGridAttackLevel(2);
  });

  it('Should solve third task', () => {
    cy.playGridAttackLevel(3);
  });

  /*it('Should solve fourth task', () => {
    cy.playFlexboxAdventureLevel(4);
  });

  it('Should solve fourth task', () => {
    cy.playFlexboxAdventureLevel(5);
  });*/
});
