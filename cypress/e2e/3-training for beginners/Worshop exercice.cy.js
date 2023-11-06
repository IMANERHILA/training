it.only('creation de compte avec verification de creation avec succes', ()=> {
    cy.visit("https://practice.expandtesting.com/notes/app");
    cy.get('[data-testid="open-register-view"]').click();
    cy.get('[data-testid="register-email"]')
    .type("workshop12@workshop.com", {force: true});
    cy.get('[data-testid="register-name"]').type("workshoop");
    cy.get('[data-testid="register-password"]').type("password");
    cy.get('[data-testid="register-confirm-password"]').type("password");
    cy.get('[data-testid="register-submit"]').click();
    cy.get('[class="alert alert-success"]')
    .should("be.visible")// assertion pour verifier si on le message de creation de compte avec succes
    .and("contains.text","User account created successfully")
    .and('have.text',"User account created successfullyClick here to Log In")
    .and('include.text',"User account created successfully");
    cy.get('[class="alert alert-success"]').then(message => {
      expect(message).be.visible;
      expect(message).have.text("User account created successfullyClick here to Log In");
      expect(message).include.text("User");
    });
});

it('creation de compte avec mdp de confirmation erronée et verification du message derreur', ()=> {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[data-testid="open-register-view"]').click();
    cy.get('[data-testid="register-email"]').type("emaill@email.com");
    cy.get('[data-testid="register-name"]').type("imane");
    cy.get('[data-testid="register-password"]').type("password");
    cy.get('[data-testid="register-confirm-password"]').type("pas");
    cy.get('[data-testid="register-confirm-password"]').should("have.value","pas");
    cy.get('[data-testid="register-submit"]').click();
    cy.get('[class="invalid-feedback"]')
    .should("be.visible")
    .should("contains.text","Passwords")
    .should("have.text","Passwords don't match!")
    .should("include.text","Passwords");
    cy.contains("Passwords don't match!");// permet de verifier dans toute la page si on a ce message quelque part :)
    cy.contains("Passwords don't match!").should("be.visible");//permet de verifier dans toute la page si on a ce message quelque part
    // et visible
    cy.get('[class="invalid-feedback"]').then(message  => {
        expect(message).be.visible;
        expect(message).have.text("Passwords don't match!");
        expect(message).include.text("Passwords");
        expect(message).contains.text("Passwords");
    });
});

it('creation de differentes notes and verification du nombre de notes crée et verifier le champ de texte' ,() => {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[href="/notes/app/login"]').click();
    cy.get('[data-testid="login-email"]').type("workshop1@workshop.com");
    cy.get('[data-testid="login-email"]').should('include.value',"workshop1@workshop.com");
    cy.get('[data-testid="login-password"]').type("password");
    cy.get('[data-testid="login-password"]').should('have.value',"password");
    cy.get('[data-testid="login-submit"]').click();
    cy.wait(500);// attendre que la page charge completement
    cy.contains("Logout").should("be.visible");// pour verifier que je suis connecté
    cy.get('[data-testid="add-new-note"]').click();
    cy.get('[data-testid="note-category"]').select(2);// selectionner un element dans une liste deroulante en utilisant select
    cy.get('[data-testid="note-title"]').type("note1 imane");
    cy.get('[data-testid="note-description"]').type("description1");
    cy.get('[data-testid="note-submit"]').click();
    cy.get('[data-testid="add-new-note"]').click();
    cy.get('[data-testid="note-category"]').select(1);// selectionner un element dans une liste deroulante en utilisant select
    cy.get('[data-testid="note-title"]').type("note2");
    cy.get('[data-testid="note-description"]').type("description2");
    cy.get('[data-testid="note-submit"]').click();
    cy.get('[data-testid="note-card"]').should("have.length",2);
    cy.get('[data-testid="note-card"]'); // in order to return the lenght of the array
    cy.get('[data-testid="note-card"]').contains("note1").should("include.text","imane");// here the data-testid concerns all notes so
    // i need add contains in order to target the the note i want then i can verify by adding "should" if that specific note contains
    // the element that i want to see
    // the other solution can be to ask the dev to add a data-testid dynamic for each note in order to target eachnot separately
   
});