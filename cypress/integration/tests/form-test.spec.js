context('Teste teste', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('Should render form component', () => {
      cy.get('.my-form').should('be.visible');
      cy.getByTestID('email-input').type('francisco');
    });

    it('Should show error message when trying to submit without filling the form', () => {
      cy.getByTestID('submit-button')
        .click();
      cy.getByTestID('error-message').should('be.visible');
    });
});
