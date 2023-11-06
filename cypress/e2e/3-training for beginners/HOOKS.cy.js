///<reference types="cypress" />
before( () =>{
    cy.log("je suis dans le before");
});

beforeEach( () =>{
    cy.log("je suis dans le before de each");

});

it('test1', ()=> {
    cy.log('test1');
});

it('test2', ()=> {
    cy.log('test2');
});

it('test3', ()=> {
    cy.log('test3');
});

after(() => {
    cy.log("je suis dans le after");
});

afterEach(() => {
    cy.log("je suis dans le aftereach");

});