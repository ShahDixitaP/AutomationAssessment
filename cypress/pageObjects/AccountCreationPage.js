// 3. Create the Page Object Model classes.
// File: cypress/pages/AccountCreationPage.js
export class AccountCreationPage {
  email;

  navigateToAccountCreationPage() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  }

  fillAccountDetails(firstName, lastName, password) {
    this.email = `dixitashah${Date.now()}@gmail.com`;
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(this.email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }

  submitAccountCreationForm() {
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
  }

  verifyAccountCreation() {
    cy.get('.page-title').should('contain', 'My Account');
    cy.get('div.customer-menu')
      .should('exist')
      .and('not.have.css', 'display', 'block')
      .and('have.css', 'display', 'none');
    cy.get('.customer-menu')
      .invoke('css', 'display', 'block')
      .should('have.css', 'display', 'block');
  } 
  
  signOut() {
    cy.contains('a[href*="customer/account"]', 'Sign Out').click();
    cy.wait(7000);
  }
}
