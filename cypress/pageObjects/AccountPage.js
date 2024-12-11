class AccountPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }

    fillRegistrationForm(firstName, lastName, email, password) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
    }

    submitRegistrationForm() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    }

    verifyAccountPage() {
        cy.get('.page-title').should('contain', 'My Account');
    }

    verifyCustomerMenuHidden() {
        cy.get('div.customer-menu')
            .should('exist')
            .and('not.have.css', 'display', 'block')
            .and('have.css', 'display', 'none');
    }

    makeCustomerMenuVisible() {
        cy.get('.customer-menu')
            .invoke('css', 'display', 'block')
            .should('have.css', 'display', 'block');
    }

    signOut() {
        cy.contains('a[href*="customer/account"]', 'Sign Out').click();
    }
}

export const accountPage = new AccountPage();
