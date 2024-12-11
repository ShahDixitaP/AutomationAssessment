// 2. Create step definitions for the feature.
// File: cypress/e2e/step_definitions/account_creation.js
import { AccountCreationPage } from '../../pages/AccountCreationPage';
import { SignInPage } from '../../pages/SignInPage';

const accountCreationPage = new AccountCreationPage();
const signInPage = new SignInPage();

Given('the user is on the account creation page', () => {
	accountCreationPage.navigateToAccountCreationPage();
});

When('the user enters valid account details', () => {
	accountCreationPage.fillAccountDetails('Dixita', 'Shah', 'Test#123$RJ');
});

When('submits the account creation form', () => {
	accountCreationPage.submitAccountCreationForm();
});

Then('the user should see the account page', () => {
	accountCreationPage.verifyAccountCreation();
});

Then('the user should sign out', () => {
	accountCreationPage.signOut();
});

When('the user logs back in with the same credentials', () => {
	signInPage.signInWithCredentials(accountCreationPage.email, 'Test#123$RJ');
});

Then('the user should see the home page', () => {
	signInPage.verifyHomePage();
});