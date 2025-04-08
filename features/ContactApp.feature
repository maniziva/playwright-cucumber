Feature: Contact List App

  Scenario: Successful login and logout
    Given I open the Contact List App
    When I login with username "master@gmail.com" and password "Info@1234"
    Then I should see the heading "Contact List"
    When I click the logout button
    Then I should be navigated back to the login page with heading "Contact List App"

Scenario Outline: Add contact from dataset
  Given I open the Contact List App
  When I login with username "master@gmail.com" and password "Info@1234"
  Then I should see the heading "Contact List2"
  When I click on "Add a New Contact"
  And I load contact data with id "<ContactId>"
  And I fill the contact form with loaded data
  And I submit the form
  Then the contact should be added successfully

  Examples:
    | ContactId        |
    | basicContact     |
    | advancedContact  |