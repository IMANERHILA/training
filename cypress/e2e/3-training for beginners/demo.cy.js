/// <reference types="cypress" />
describe("titre de la serie de tests", () => {
  it("checkboxes",() => {
     cy.visit("https://practice.expandtesting.com/checkboxes");
     cy.get('[id="checkbox2"]').click();
        
    });

  it("form validation",() =>{
    cy.visit('https://practice.expandtesting.com/form-validation');
    cy.screenshot();
    cy.get('[id="validationCustom04"]').select(2);


  })
});

