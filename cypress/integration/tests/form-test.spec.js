/* eslint-disable no-undef */
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

    it('Should show email', () => {
      cy.getByTestID('email-input').type('arthur.balduini@brainweb.com.br');
      cy.getByTestID('submit-button')
        .click();

        // Neste teste falar sobre data-testid
      cy.getByTestID('email-button')
        .click();
      cy.getByTestID('email-label').contains('arthur.balduini@brainweb.com.br');
    });

    context('Mock request', () => {
      beforeEach(() => {
        cy.server()
        cy.route('GET', '**/email', [
          {
            "data": [
              {
                "id": 1,
                "data": {
                  "email": "rogerio@brainweb.com.br",
                  "password": ""
                }
              }
            ],
            "id": 1
          }
        ]
        ).as('getEmail')      
      });
      it('Should show mocked email', () => {
        cy.getByTestID('email-input').type('arthur.balduini@brainweb.com.br');
        cy.getByTestID('submit-button')
        .click();
        
        cy.getByTestID('email-button')
        .click();
        cy.getByTestID('email-label').contains('rogerio123@brainweb.com.br');
      });
    })
});
