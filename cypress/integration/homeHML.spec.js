

it('deve exibir a home page', function () {
  cy.visit('https://app.acordocerto.de/')
  
  cy.title()
    .should('eq', 'Login - Acordo Certo')
  
    cy.get('a[class=btn-logo-main]')
    .should('be.visible')

    cy.get('div[class=ac-input-field]')
    .should('be.visible')

});