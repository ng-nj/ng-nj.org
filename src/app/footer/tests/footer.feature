
  Feature: The Footer has some hardcoded text.
    In order to see copyright information and terms of user links
    As a user of the website
    I want to have to see copyright information and terms of user links displayed on the screen.

     - Johnny Bibblestein from the Texas Ranger Motorcycle Squad
       alerted me that the footer is quite an important piece of the project
       and surely requires low level step definition acceptance tests!



#
    Scenario Outline:  Copyright text shows
      Given I land on the home page
      When The page loads
      Then the footer should contain the text, <myText>

      Examples:
      | myText|
      | Copyright 2016 WoJ |




