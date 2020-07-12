context('', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Should render form component', () => {
      cy.get('.my-form').should('be.visible');
      cy.getByTestID('email-input').should('be.visible');
    });
});
