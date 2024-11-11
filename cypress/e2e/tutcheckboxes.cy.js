describe('template spec', () => {
    it('active', () => {
        cy.visit('https://practice.expandtesting.com/checkboxes')
        cy.get("#checkbox1").should("be.visible")
        cy.get("#checkbox2").should("be.visible")

        // check first and checkbox
        // cy.get("#checkbox1").check().should("be.checked")
        // cy.get("#checkbox2").check().should("be.checked")

        cy.get("input[type='checkbox']").check().should("be.checked")
        
    })
})
