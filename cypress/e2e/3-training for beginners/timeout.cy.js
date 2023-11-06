describe("titre de la serie de tests",{
    defaultCommandTimeout:8000,
}, () => {
    it("checkboxes",() => {
       cy.visit("https://practice.expandtesting.com/checkboxes");
       cy.get('[id="checkbox2"]').click();
       cy.contains("sarah");

    });

    it("checkboxes", {
     defaultCommandTimeout:6000,
    },() => {
     cy.visit("https://practice.expandtesting.com/checkboxes");
     cy.get('[id="checkbox1"]').click();// le checkbox 2 est deja coché par defaut ici
     cy.contains("imane");
    });
});