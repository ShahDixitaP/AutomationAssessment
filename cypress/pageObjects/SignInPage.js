// File: cypress/pages/SignInPage.js
export class SignInPage {
    signInWithCredentials(email, password) {
        cy.contains('a', 'Sign In').click();
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    }

    verifyHomePage() {
        cy.get('.page-title').should('contain', 'Home Page');
    }
}