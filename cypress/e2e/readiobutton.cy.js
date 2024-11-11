describe('template spec', () => {
    it('active', () => {
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get("input[value='Option 1']").should("be.visible")
        cy.get("input[value='Option 2']").should("be.visible")
        cy.get("input[value='Option 3']").should("be.visible")
        // check first and checkbox
        cy.get("input[value='Option 1']").click().should("be.checked")
        cy.get("input[value='Option 2']").should("not.be.checked")
        cy.get("input[value='Option 3']").should("not.be.checked")
        
    })
})
