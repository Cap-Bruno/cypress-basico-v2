Cypress.Commands.add('fillmandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Bruno')
    cy.get('#lastName').type('Grassi')
    cy.get('#email').type('bruno@email.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})