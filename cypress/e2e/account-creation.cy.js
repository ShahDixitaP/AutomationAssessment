describe('Account Creation', () => {
  it('creates an account and sign in', () => {

    const firstName = 'Dixita';
    const lastName = 'Shah';
    const email = `dixitashah${Date.now()}@gmail.com`; // New email id during every test run
    const password = 'Test#123$RJ';

    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);

    // Submit might not work due to email verification
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();

    // Verify successful registration
    cy.get('.page-title').should('contain', 'My Account');

    // Verify parent div is not visible
    cy.get('div.customer-menu')
      .should('exist')
      .and('not.have.css', 'display', 'block')
      .and('have.css', 'display', 'none');

    // Make parent div is visible
    cy.get('.customer-menu')
      .invoke('css', 'display', 'block')
      .should('have.css', 'display', 'block')

    //Sign out
    cy.contains('a[href*="customer/account"]', 'Sign Out').click()

    //Wait 7 seconds. 5 seconds for page to auto rediect and 2 seconds buffer
    cy.wait(7000);
   
    //Click sign in
    cy.contains('a', 'Sign In').click()

    // Enter login credentials
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();

    // Verify successful login and home page is available
    cy.get('.page-title').should('contain', 'Home Page');

  });
});