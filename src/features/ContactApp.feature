Feature: Contact List App

@basic
  Scenario: Successful login and logout
    Given I open the Contact List App
    When I login with username "master@gmail.com" and password "Info@1234"
    Then I should see the heading "Contact List"
    When I click the logout button
    Then I should be navigated back to the login page with heading "Contact List App"

@regression
Scenario Outline: Add contact from dataset
  Given I open the Contact List App
  When I login with username "master@gmail.com" and password "Info@1234"
  Then I should see the heading "Contact List"
  When I click on "Add a New Contact"
  And I load contact data with id "<ContactId>"
  And I fill the contact form with loaded data
  And I submit the form
  Then the contact should be added successfully

  Examples:
    | ContactId        |
    | basicContact     |
    | advancedContact  |

@regression
  Scenario: User updates a contact successfully
  Given I open the Contact List App
  When I login with username "master@gmail.com" and password "Info@1234"
  Then I should see the heading "Contact List"
    When I select the first contact from the list
    And I click on "Edit Contact"
    And I update the first name to "Manikandan-Updated"
    And I update the last name to "Adaikalam-Updated"
    And I update the country to "SriLanka"
    And I submit the form
    Then I should be returned to the Contact List page

@regression
  Scenario: Delete an existing contact from the list
    Given I open the Contact List App
    When I login with username "master@gmail.com" and password "Info@1234"
    Then I should see the heading "Contact List"
    When I select the first contact from the list
    And I click the Delete Contact button