// describe('Example to demonstrate handling of JavaScript Alert, Comfirm, Prompt in ,Cypress',()=> {
//     beforeEach(()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     }
//     )

//     it('Hnadeling js alert',()=>{
//         cy.contains('Click for js alert').click()
//         cy.on('windoes:alert',(str)=>{
//             expect(str).to.equal('I am a Js Alert')
//         })
//         cy.on('window:conform',()=>true)
//         cy.get('#result').should('have.text','you successfully checked an alert')
//     }) 
// })



describe("alerts",()=>{
    beforeEach(()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
    })
 
    it("Handling",()=>{
        cy.contains("Click for JS Alert").click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("I am a JS Alert")
        })
        cy.on("window:confirm",()=> true)
        cy.get("#result").should("have.text","You successfully clicked an alert")
 
 
})
})