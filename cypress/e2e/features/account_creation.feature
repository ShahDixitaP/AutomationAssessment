Feature: Create Account
  As a user, I want to create an account on the Magento website so that I can access personalized features.

  Scenario: Successfully create an account
    Given I am on the Magento homepage
    When I navigate to the Create Account page
    And I fill in the following details:
      | First Name        | John              |
      | Last Name         | Doe               |
      | Email Address     | test@example.com  |
      | Password          | Test@1234         |
      | Confirm Password  | Test@1234         |
    And I submit the registration form
    Then I should see a success message "Thank you for registering with Main Website Store."

  Scenario: Validation errors for missing fields
    Given I am on the Magento homepage
    When I navigate to the Create Account page
    And I submit the registration form
    Then I should see the following validation errors:
      | Field                | Error Message              |
      | First Name           | This is a required field.  |
      | Last Name            | This is a required field.  |
      | Email Address        | This is a required field.  |
      | Password             | This is a required field.  |
      | Confirm Password     | This is a required field.  |