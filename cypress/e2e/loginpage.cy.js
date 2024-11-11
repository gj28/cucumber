// button[type='submit']

describe('template spec',()=>{
    it('actve',()=>{
        cy.visit('https://practice.expandtesting.com/login')
        cy.get("#username").type('practice')

        cy.get("#password").type('SuperSecretPassword!')

        cy.get("button[type='submit']").click()

    })
})