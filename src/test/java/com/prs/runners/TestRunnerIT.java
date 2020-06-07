package com.prs.runners;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features", tags = "@tests", glue = "com.prs.stepdefs", format = { "pretty", "html:target/SerenityBDD", "json:target/cucumber.json" })
public class TestRunnerIT {
}
