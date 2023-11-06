before(()=> {
    cy.fixture('notes jd.json').as('notes');
});

it.only('utiliser les fixtures pour creation de notes avec une premiere methode', ()=> {
    cy.visit("https://practice.expandtesting.com/notes/app");
    cy.signin("email@email.com","password");
    cy.get('@notes').then(notes=>{
        for(let index=0; index<notes.length; index++){
            cy.get('[data-testid="add-new-note"]').click();
            cy.get('[data-testid="note-category"]').select(notes[index].category);
            cy.get('[data-testid="note-title"]').type(notes[index].title);
            cy.get('[data-testid="note-description"]').type(notes[index].description);
            cy.get('[data-testid="note-submit"]').click(); 
        }
    })
});

it('utiliser les fixtures pour creation de notes avec une deuxieme methode', ()=> {
    cy.visit("https://practice.expandtesting.com/notes/app");
    cy.signin("email@email.com","password");
    cy.get('@notes').then(notes =>{
        notes.forEach(notes => {
            cy.get('[data-testid="add-new-note"]').click();
            cy.get('[data-testid="note-category"]').select(notes.category);
            cy.get('[data-testid="note-title"]').type(notes.title);
            cy.get('[data-testid="note-description"]').type(notes.description);
            cy.get('[data-testid="note-submit"]').click(); 
        });

    });
        

});
//3eme methode ; note working for me
notes.forEach(notes => {
 it('utiliser les fixtures pour creation de notes avec une deuxieme methode', ()=> {
    cy.visit("https://practice.expandtesting.com/notes/app");
    cy.signin("email@email.com","password");
    cy.get('[data-testid="add-new-note"]').click();
    cy.get('[data-testid="note-category"]').select(notes.category);
    cy.get('[data-testid="note-title"]').type(notes.title);
    cy.get('[data-testid="note-description"]').type(notes.description);
    cy.get('[data-testid="note-submit"]').click(); 

 });
});