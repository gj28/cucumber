describe('Example to demonstrate handling of JavaScript Alerts, Confirm, Prompt in Cypress', () => {
    beforeEach(() => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })
    it('Handling JS Confirm - Validate Confirm Text and Click OK', () => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {
          expect(str).to.equal(`I am a JS Confirm`)
        })
        cy.on('window:confirm', () => true)
        cy.get('#result').should('have.text', 'You clicked: Ok')
      })   
  
})
 
describe('Example to demonstrate handling of JavaScript Alerts, Confirm, Prompt in Cypress', () => {
    beforeEach(() => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })
    it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.window().then(($win) => {
          cy.stub($win, 'prompt').returns('This is a test text')
          cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: This is a test text')
      })
  
})
 