Feature: Login bar
  In order log in to my account
  As a user who is not currently logged in
  I want to enter my username and password and get authenticated.

  Scenario: User logs in successfully
    Given that I am a person not logged in
    When enter successful credentials
    Then Login bar should show a success message

