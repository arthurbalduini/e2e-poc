context('Teste teste', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('Should render form component', () => {
      cy.get('.my-form').should('be.visible'); // Bad practice, instead should use data-*
    });

    it('Should show error message when trying to submit without filling the form', () => {
      cy.getByTestID('submit-button')
        .click();
      cy.getByTestID('error-message').should('be.visible');
    });

    it('Should be able to submit when email field is filled', () => {
      cy.getByTestID('email-input').type('arthur.balduini@brainweb.com.br');

      cy.getByTestID('submit-button')
        .click();
      cy.getByTestID('error-message').should('not.be.visible');
    });
});
