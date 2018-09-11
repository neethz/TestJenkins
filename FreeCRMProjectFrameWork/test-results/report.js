$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/nbobby/eclipse/MyProjectTest/TestJenkins/FreeCRMProjectFrameWork/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "To test login scenario",
  "description": "",
  "id": "to-test-login-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Perform successful validation of CRM page",
  "description": "",
  "id": "to-test-login-scenario;perform-successful-validation-of-crm-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Verify title of the crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I end the session",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.navigateToLoginPage()"
});
formatter.result({
  "duration": 4400409623,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.verifyTitleOfCrmPage()"
});
formatter.result({
  "duration": 6061931,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.I_end_the_session()"
});
formatter.result({
  "duration": 108215523,
  "status": "passed"
});
});