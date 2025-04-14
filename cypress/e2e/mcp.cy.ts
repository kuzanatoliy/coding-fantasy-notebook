/* eslint-disable cypress/no-unnecessary-waiting */
describe('MCP', () => {
  it('Should pass workflow', () => {
    cy.visit('https://mcp.codingfantasy.com');
    cy.get('h2').should('contain', 'Act 1/5: The Onboarding From Hell');
    cy.wait(4000);
    cy.contains('MCP_CLIENT.md');
    cy.contains('(without looking up, scrolling at inhuman speed)');
    cy.get('button').contains('Next Scene').click();
    cy.contains('TODO.md');
    cy.wait(30000);
    cy.contains('He vanishes in a cloud of expensive cologne');
    cy.get('button').contains('Next Scene').click();
    cy.wait(30000);
    cy.contains("By tonight, ideally. The demo's in two days,");
    cy.get('button').contains('Next Scene').click();
    cy.wait(30000);
    cy.contains(
      'Exactly. HTTP was built for hypermedia. GraphQL was built for flexible data'
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(30000);
    cy.contains("For development and testing, we're using a simplified setup.");
    cy.get('button').contains('Next Scene').click();
    cy.wait(30000);
    cy.contains(
      'Similar concept. The data connectors are how the server accesses'
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(30000);
    cy.contains('Complete your first coding challenge!');
    cy.get('button').contains('Next Scene').click();
    cy.wait(4000);
    cy.contains(
      "(looks genuinely surprised) Well, I'll be damned. RX's server is still running. The"
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(20000);
    cy.contains('So now what? What can we do with this connection?');
    cy.get('button').contains('Next Scene').click();
    cy.wait(20000);
    cy.contains(
      "This isn't some bullshit pricing predictor running on a glorified"
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(5000);
    cy.contains(
      '(staring at the screen) No. It moved itself. RX built an autonomous system'
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(20000);
    cy.contains("So we're doomed.");
    cy.get('button').contains('Next Scene').click();
    cy.wait(20000);
    cy.contains(
      "(gruffly) Don't thank me yet. I'm charging triple my normal rate after hours."
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(5000);
    cy.contains(
      'The laptop screen is black now, but you swear—you can still hear'
    );
    cy.get('button').contains('Next Act').click();
  });
});
