describe('template spec', () => {
    it('active', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get("input[placeholder='Username']").type('standard_user')
        cy.get("input[placeholder='Password']").type('secret_sauce')
        
        // Correct selector for the submit button
        cy.get("#login-button").click()
    })
})
