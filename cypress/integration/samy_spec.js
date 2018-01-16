/**
 * This test file makes assertions against the rendered
 * app produced by __tests__/testapp.js
 */
describe('Samy Tests', function() {
    it('Basic ajax loads svg element', function() {
      cy.visit('http://localhost:8080')
      cy.get('#basic polygon').should('have.attr', 'id', 'Star')
    })

    it('Change attribute with SvgProxy', function() {
      cy.visit('http://localhost:8080')
      cy.get('#basic-update #Star').should('have.attr', 'fill', 'red')
      
    })

    it('Svg style prop gets applied', function() {
      cy.visit('http://localhost:8080')
      console.log(cy.get('#use-style-prop'))
      cy.get('#use-style-prop').should('have.prop','width')
    })

    it('null path generates empty svg', function() {
      cy.visit('http://localhost:8080')
      console.log(cy.get('#null-path'))
      cy.get('#null-path').should('be.empty')
    })
  })