const {  faker  } =  require ('@faker-js/faker')

const noteTitle=faker.lorem.sentence();
const description=faker.lorem.paragraph();

it('commande first et commande find  et commande eq pour ajouter des notes', () => {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[href="/notes/app/login"]').click();
    cy.get('[data-testid="login-email"]').type("email@email.com");
    cy.get('[data-testid="login-password"]').type("password");
    cy.get('[data-testid="login-password"]').should("have.value","password");
    cy.get('[data-testid="login-submit"]').click();
    cy.wait(500);
    cy.get('[data-testid="add-new-note"]').click();
    cy.get('[data-testid="note-category"]').select(1);
    cy.get('[data-testid="note-title"]').type(noteTitle);
    cy.get('[data-testid="note-description"]').type(description);
    cy.get('[data-testid="note-submit"]').click();
    cy.wait(500);// question a poser: pourquoi paarfois cypress passe a l'instruction suivante alors que l'instruction precedente
    // n'est pas complement finis
    cy.get('[data-testid="note-card"]').first();
    cy.get('[data-testid="note-delete"]').first().click();
    cy.get('[data-testid="note-delete-confirm"]').click();
    cy.wait(500);
    cy.get('[data-testid="note-card"]').first().find('[data-testid="note-delete"]').click();
    //cy.get('[data-testid="note-card"]').eq(1).find('[data-testid="note-delete"]').click();
});

it.only('commande EACH pour crée une boucle qui supprime toutes les note', () => {    // voir le ficher commands dans le support
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[href="/notes/app/login"]').click();
    cy.get('[data-testid="login-email"]').type("email@email.com");
    cy.get('[data-testid="login-password"]').type("password");
    cy.get('[data-testid="login-password"]').should("have.value","password");
    cy.get('[data-testid="login-submit"]').click();
    cy.wait(500);
    cy.get('[data-testid="add-new-note"]').click();
    cy.get('[data-testid="note-category"]').select(1);
    cy.get('[data-testid="note-title"]').type(noteTitle);
    cy.get('[data-testid="note-description"]').type(description);
    cy.get('[data-testid="note-submit"]').click();// meme soucis ici aussi il passe à l'instruction suivante alors que cette instruction
    // n'est pas encore finis, la note née pas encore crée complement du coup quand il supprime note dans la prochaine
    // instruction il ne supprime pas la derniere d'ou il faut ajouter un wait
    cy.wait(500);
    cy.notealldelete();

});

