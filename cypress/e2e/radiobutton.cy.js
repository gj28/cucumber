describe('template spec', () => {
    it('active', () => {
        cy.visit('https://practice.expandtesting.com/radio-buttons')
        cy.get("#red").should("be.visible")
        cy.get("#blue").should("be.visible")
        cy.get("#yellow").should("be.visible")
        cy.get("#black").should("be.visible")
        cy.get("#green").should("be.visible")
        cy.get("#basketball").should("be.visible")
        cy.get("#football").should("be.visible")

        // check first and checkbox
        cy.get("#red").check().should("be.checked")
        cy.get("#basketball").check().should("be.checked")
        
    })
})
