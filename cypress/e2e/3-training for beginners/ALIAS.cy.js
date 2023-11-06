describe('alias', () =>{
 it('utiliser alias',{
    defaultCommandTimeout:5000
 }, ()=> {
    cy.visit("https://practice.expandtesting.com/notes/app");
    cy.signin("email@email.com", "password");
    cy.get('[data-testid="note-card-title"]').first().invoke("text").as("firstcardtitle"); // as est un alias crée ici qui permet de stocker 
    //le text recuperer dans la firstcartitle, cela permet de transiter les données dans le projet
    

 });

 it("test first card title pour recupere alias", function() {
    cy.wrap(this.firstcardtitle).should("contain","Placeat");
 });
});