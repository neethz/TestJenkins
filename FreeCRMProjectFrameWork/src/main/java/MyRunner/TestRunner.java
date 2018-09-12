package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/nbobby/eclipse/MyProjectTest/TestJenkins/FreeCRMProjectFrameWork/src/main/java/Features/login.feature",
		glue="StepDefinitions",
		format= {"pretty","html:test-results"},
		dryRun=true,
		monochrome=true,
		strict=true
		)

public class TestRunner {

}
