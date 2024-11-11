describe('template spec', () => {
    it('active', () => {
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get("input[value='checkbox1']").should("be.visible")
        cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
        // check first and checkbox
        cy.get("input[type='checkbox']").first().click().should("be.checked")
        cy.get("input[type='checkbox']").last().click().should("be.checked")
        
    })
})
