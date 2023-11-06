it('commande invoke',{
    defaultCommandTimeout:5000// just to practice
}, ()=> {
    cy.visit("https://practice.expandtesting.com/notes/app");
    cy.signin("email@email.com", "password");
    cy.createmanynotes(3);
    cy.wait(500); // meme soucis: execution de l'instrution suivant avant que la precedente n'est finis
    cy.get('[data-testid="note-card-title"]').first().invoke("text");// ca permet de recuperer le texte de la premiere note
    // ici invoke permet de recuperer le text titre de la premiere note en la selectionant
    cy.get('[data-testid="note-card-title"]').first().invoke("text").as("firstcartitle"); // as est un alias crée ici qui permet de stocker 
    //le text recuperer dans la firstcartitle, cela permet de transiter les données dans le projet
    cy.get('[data-testid="note-edit"]').first().click();
    cy.get('[data-testid="note-description"]').invoke("val"); // permet de recuperer la valeur de la description de la premiere note

})