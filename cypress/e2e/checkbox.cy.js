describe('template spec', () => {
    it('active', () => {
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get("input[value='checkbox1']").should("be.visible")
        cy.get("input[value='checkbox1']").check().should("be.checked")
        
        // Correct selector for the submit button
        // cy.get("input[value='checkbox1").check().should("be.checked")
    })
})
