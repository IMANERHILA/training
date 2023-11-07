it('mock products in demoblae website', ( ) => {
    cy.intercept('/entries', {
    body: {
    "Items": [
    {
    "cat": "phone",
    "desc": "Nouveau telephone cher pour rien",
    "id": 1,
    "img": "imgs/galaxy_s6.jpg",
    "price": 999.0,
    "title": "Custom phone N7"
    }
    
    ],
    "LastEvaluatedKey": {
    "id": "1"
    }
    }
    }).as('getproducts')
    cy.visit('/')
    })

it('mock section laptop', ()=>{
    cy.intercept('/')
})