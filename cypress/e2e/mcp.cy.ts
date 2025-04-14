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
    cy.get('h2').should('contain', 'Act 2/5: Resources Under Pressure');
    cy.wait(15000);
    cy.contains('TODO.md');
    cy.contains(
      '(ignoring Chase, approaching you) You. Fix whatever needs fixing.'
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(20000);
    cy.contains('Chase exits dramatically, leaving you and Steve alone');
    cy.get('button').contains('Next Scene').click();
    cy.wait(7000);
    cy.contains("(nodding approvingly) Now you're thinking like an engineer.");
    cy.get('button').contains('Next Scene').click();
    cy.wait(10000);
    cy.contains('Depends. Can we get SoftBank to invest in them?');
    cy.get('button').contains('Next Scene').click();
    cy.wait(17000);
    cy.contains('(deadpan) Welcome to Silicon Valley.');
    cy.get('button').contains('Next Scene').click();
    cy.wait(8000);
    cy.contains('example-server.js');
    cy.contains('example-client.js');
    cy.contains(
      "(thinks for a moment) Let's start simple. We need to build a bare-bones server"
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(4000);
    cy.contains('Complete your second coding challenge!');
    cy.get('button').contains('Next Scene').click();
    cy.wait(2000);
    cy.contains("When you're done, click the 'Next Scene' button to continue.");
    cy.get('button').contains('Next Scene').click();
    cy.wait(2000);
    cy.contains('I have to admit, great job kiddo.');
    cy.get('button').contains('Next Scene').click();
    cy.wait(15000);
    cy.contains('Chase exits, already typing furiously on his phone');
    cy.get('button').contains('Next Scene').click();
    cy.wait(12000);
    cy.contains(
      'Then we tackle Tools - the most complex and crucial part of MCP.'
    );
    cy.get('button').contains('Next Scene').click();
    cy.wait(7000);
    cy.contains('Yep. Time to get back to work.');
    cy.get('button').contains('Next Act').click();
  });
});
