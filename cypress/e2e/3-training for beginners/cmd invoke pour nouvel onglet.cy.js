it('use ivoke to delete target sur HTML', ()=> {
    cy.visit("http://stg-fr.rajapack.xyz/");
    cy.contains("Consulter ou recevoir").invoke('removeAttr','target').click({force:true});


})