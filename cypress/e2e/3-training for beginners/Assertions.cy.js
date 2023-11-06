it.skip('test some assertion', () => {
 expect(1).eql(1);
 expect("ali").eql("ali");
 expect(16).greaterThan(6);
 expect("Formation cypress").contains("cypress");
 expect("formation cypress").include("cypress");
 expect(1,2,3).be.an("array");
 expect(1,2,3).length(3);
 expect(1,2,3).length.greaterThan(1);
 expect(1).not.eql(2);
});
it.skip("error login",() =>{
 cy.visit("http://practice.expandtesting.com/notes/app");
 cy.get('[href="/notes/app/login"]').click();
 cy.get('[data-testid="login-email"]').type("email@email.com");
 cy.get('[data-testid="login-password"]').type("passwod");
 cy.get('[data-testid="login-submit"]').click();
 cy.get('[data-testid="alert-message"]').then((message) =>  {
    expect(message).be.visible;
    expect(message).contains.text("Incorrect email");
    expect(message).have.text("Incorrect email address or password");
    cy.get('[data-testid="alert-message"]')
    .should("be.visible")
    .and("contain.text","Incorrect email"); 
    // pas de or, on a que and

 });
});

it("login succussful",() =>{
 cy.visit("http://practice.expandtesting.com/notes/app");
 cy.get('[href="/notes/app/login"]').click();
 cy.get('[data-testid="login-email"]').type("email@email.com");
 cy.get('[data-testid="login-password"]').type("password");
 cy.get('[data-testid="login-submit"]').click();
 //cy.url().should("contain", "https://practice.expandtesting.com/notes/app");
 cy.get('[data-testid="note-card"]').should("have.length", 3);
 });

it.skip("should avec un object non cypress",() =>{
    const name="Mohammed Ali";
    expect(name).contain("Ali");
 // avec expect on est pas obligé de crée un object js name, on l'utilise comme un objet temporaire et c'est tout
 // name.should("contain,"Ali");// puisque name n'est pas un object cypress, il faut crée comme un objet js pour pourvoir utiliser should
    cy.wrap(name).should("contain", "Ali"); // Wrap permet de crée un object script
 });

/*it.only('assertion css', ()=> {
   cy.visit("https://practice.expandtesting.com/notes/app");
   cy.get('[href="/notes/app/login"]').click();
   cy.get('[data-testid="login-email"]').type("email@email.com");
   cy.get('[data-testid="login-password"]').type("password");
   cy.get('[data-testid="login-submit"]').click();
   cy.get('[data-testid="note-card-title"]').then(notestyle => {
      expect(notestyle).to.have.css("background-color","rgba(40, 46, 41, 0.6)");
   
   });
   });
   */
it.only('champs text verification' , ()=> {
 cy.visit("https://practice.expandtesting.com/notes/app");
 cy.get('[href="/notes/app/login"]').click();
 cy.get('[data-testid="login-email"]').type("email@email.com");
 cy.get('[data-testid="login-email"]').should('have.value',"email@email.com");// have value pour verifier  que c'est la meme valeur exact
 cy.get('[data-testid="login-email"]').should('include.value', "email@email");// include.value ou contain.value pour verifier 
 //qu'elle contient une valeur
 cy.pause();
 cy.get('[data-testid="login-password"]').type("password");

 });



