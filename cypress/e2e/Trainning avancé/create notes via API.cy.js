it('creates notes via API', ()=>{
    cy.request({
        url: 'https://practice.expandtesting.com/notes/api/users/login',
        method: 'POST',
        Headers:{
            'Content-Type: application/x-www-form-urlencoded'
        },
        Body: {
            email: 'email@email.com',
            password: 'password',
        }


    })
})