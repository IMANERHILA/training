it('forcer un boutton', () => {
    cy.visit("https://demoqa.com/radio-button");// l'exemple est juste mais il y a un probleme sur le site
    cy.wait(500);
    cy.contains("no").click({force: true});
    //cy.get('[class="custom-control disabled custom-radio custom-control-inline"]').click({force: true});

});

it('exple daugmentation de timeout', () => {
    cy.visit("https://stg-fr.rajapack.xyz/", {timeout: 10000});

});

it.only('sensibilité à la case', () => {
    cy.visit("https://stg-fr.rajapack.xyz/");
    cy.contains("Mon PAnier",{matchCase:false}).click({force:true});// ici "Mon panier" est ecrit comme cela sur le site, et puisque
    // ici on a une sensibilité à la case et mon cherche contains "Mon PAnier" il faut ajouter le matchcase comme option pour desactivé
    // la sensibilité à la case

});