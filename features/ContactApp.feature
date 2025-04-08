Feature: Login and Logout from Contact List App

  Scenario: Successful login and logout
    Given I open the Contact List App
    When I login with username "master@gmail.com" and password "Info@1234"
    Then I should see the heading "Contact List"
    When I click the logout button
    Then I should be navigated back to the login page with heading "Contact List App"


  Scenario: Add a contact successfully
    Given I open the Contact List App
    When I login with username "master@gmail.com" and password "Info@1234"
    Then I should see the heading "Contact List"
    When I click on "Add a New Contact"
    And I fill the contact form with the following details:
      | First Name        | Cucumber               |
      | Last Name         | Adaikalam                |
      | Birthdate         | 1996-12-07               |
      | Email             | manizivamsd@gmail.com    |
      | Phone             | 8098606357               |
      | Address1          | 434, Pudumanai 1st street|
      | Address2          | Rayavaram                |
      | City              | Pudukkottai              |
      | State             | Tamilnadu                |
      | Postal Code       | 622506                   |
      | Country           | India                    |
    And I submit the form
    Then the contact should be added successfully