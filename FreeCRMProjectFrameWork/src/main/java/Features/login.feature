Feature: To test login scenario

Scenario: Perform successful validation of CRM page
Given I navigate to the crm page
Then I enter the user details
|username|password|
|neethu|hello|
|roy|hello|
Then Verify title of the crm page
Then I end the session
