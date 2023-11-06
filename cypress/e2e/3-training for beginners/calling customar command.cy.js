const {  faker  } =  require ('@faker-js/faker')

const noteTitle=faker.lorem.sentence();
const description=faker.lorem.paragraph();
const date=new Date();
const fakemail=faker.internet.email();
const fakepassword=faker.internet.password();
const fakename=faker.person.firstName();

it('inscription', () => {

     cy.visit('https://practice.expandtesting.com/notes/app');
     cy.signup(fakemail, fakepassword ,fakename );
});


it('connexion k', () =>  {
     cy.visit('https://practice.expandtesting.com/notes/app');
     cy.signin(fakemail, fakepassword);

});

it.only('creation note', () =>  {
     cy.visit('https://practice.expandtesting.com/notes/app');
     cy.signin("email@email.com", "password");
     cy.createmanynotes(5);

});