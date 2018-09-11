package StepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class loginSteps {
	
	WebDriver driver;
	
	@Given("^I navigate to the crm page$")
	public void navigateToLoginPage() {
		System.setProperty("webdriver.chrome.driver", "/Users/nbobby/Downloads/chromedriver");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}
	
	@Then("^Verify title of the crm page$")
	public void verifyTitleOfCrmPage() {
		String title = driver.getTitle();
		Assert.assertTrue(title.contains("Free CRM software in"));
	}
	
	@Then("^I end the session$")
	public void I_end_the_session() throws Throwable {
	    driver.close();
	}
	

}
