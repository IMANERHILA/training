const {  faker  } =  require ('@faker-js/faker')
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signup', (email,password, name) =>{  // il faut juste copier et coller la partie concerné dans les script 
    //precedent dans cette commande
    cy.get('[data-testid="open-register-view"]').click();
    cy.get('[data-testid="register-email"]').type(email);
    cy.get('[data-testid="register-name"]').type("name");
    cy.get('[data-testid="register-password"]').type(password);
    cy.get('[data-testid="register-confirm-password"]').type(password);
    cy.get('[data-testid="register-submit"]').click();
});


Cypress.Commands.add('signin', (email, mdp) => { // parametres email et mdps
    cy.get('[href="/notes/app/login"]').click();
    cy.get('[data-testid="login-email"]').type(email);
    cy.get('[data-testid="login-password"]').type(mdp);
    cy.get('[data-testid="login-submit"]').click();

});

Cypress.Commands.add('notealldelete', ()=>{ // pas besoin de parametre ici
    cy.get('[data-testid="note-delete"]').each(deletebutton => {
        cy.wrap(deletebutton).click();// wrap c'est crée un object cypress
        cy.get('[data-testid="note-delete-confirm"]').click();
    });

});

Cypress.Commands.add('createmanynotes',(n)=>{
    for (let index=0; index<n; index++){
        
        const noteTitle=faker.lorem.sentence();
        const description=faker.lorem.paragraph();
        cy.get('[data-testid="add-new-note"]').click();
        cy.get('[data-testid="note-category"]').select(1);
        cy.get('[data-testid="note-title"]').type(noteTitle);
        cy.get('[data-testid="note-description"]').type(description);
        cy.get('[data-testid="note-submit"]').click();
    }

});