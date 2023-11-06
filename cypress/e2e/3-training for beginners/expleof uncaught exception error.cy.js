it('exple derreur uncaught exepction', ()=> { // ca veut dire tu dis a cypress meme si tu ecoute des erreur applicatif ne met pas
    // le test en echec
    Cypress.on('uncaught:exception', (event) =>{
        return false
    });
    cy.visit("https://demoqa.com/radio-button");
    
});