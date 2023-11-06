const {  faker  } =  require ('@faker-js/faker')

const noteTitle=faker.lorem.sentence();
const description=faker.lorem.paragraph();
const date=new Date();
const fakemail=faker.internet.email();
const fakepassword=faker.internet.password();


it.skip('ajouter des notes', () => {
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
const actualdate=date.getHours()-1 +":"+date.getMinutes();
// const actualdate=='${date.getHours()-1}:${date.getMinutes()}'; // autre exple d'ecriture de l'instruction precedante
cy.wait(500);
cy.contains(noteTitle)
.should("be.visible")// only check the last noteTitle variable if there is more then one created
.parent('[data-testid="note-card"]')
.should("include.text",actualdate);
cy.contains(description).should("be.visible");


});

/*after(() =>{
    cy.get('[data-testid="note-delete"]').each(noteDelete =>{
      cy.wrap(noteDelete).click();
      cy.get('[data-testid="note-delete-confirm"]').click();
    });
});*/

it.only('[inscription avec faker pour email', () => {
 cy.visit('https://practice.expandtesting.com/notes/app');
 cy.get('[data-testid="open-register-view"]').click();
 cy.get('[data-testid="register-email"]').type(fakemail);
 cy.get('[data-testid="register-name"]').type("imane");
 cy.get('[data-testid="register-password"]').type(fakepassword);
 cy.get('[data-testid="register-confirm-password"]').type(fakepassword);
 cy.get('[data-testid="register-submit"]').click();
});

it.only('connexion avec faker' ,() => {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[href="/notes/app/login"]').click();
    cy.get('[data-testid="login-email"]').type(fakemail);// ici le fake email avec le mdp ne va etre reconnu si il est crée
    //à l'interieur de cypress code, c'est la raison pour laquelle on l'a utilisé en dehors de cypress et sur JS
    cy.get('[data-testid="login-password"]').type(fakepassword);
    cy.get('[data-testid="login-submit"]').click();
});