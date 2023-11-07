it('login to note app', function(){
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.contains('Login').click();
    cy.get('[data-testid="login-email"]').type("email@email.com");
    cy.get('[data-testid="login-password"]').type("password");
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="add-new-note"]')
    .should('be.visible')
    .and('contains.text','Add Note');

    




});