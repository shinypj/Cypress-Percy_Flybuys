describe('Integration test with visual testing', function() {
  it('Loads the sign-in page', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('https://www.flybuys.co.nz/sign_in?signing_in=true');

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});
