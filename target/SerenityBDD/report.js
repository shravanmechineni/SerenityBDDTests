$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Test feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tests"
    }
  ]
});
formatter.scenarioOutline({
  "name": "test scenario 1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I call \"\u003csite\u003e\" api",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "site"
      ]
    },
    {
      "cells": [
        "google"
      ]
    },
    {
      "cells": [
        "youtube"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test scenario 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tests"
    }
  ]
});
formatter.step({
  "name": "I call \"google\" api",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDefs.iCallGoogleApi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test scenario 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tests"
    }
  ]
});
formatter.step({
  "name": "I call \"youtube\" api",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDefs.iCallGoogleApi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test scenario 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tests"
    }
  ]
});
formatter.step({
  "name": "I search on google",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDefs.iSearchOngoogle()"
});
formatter.result({
  "error_message": "net.serenitybdd.core.exceptions.SerenityManagedException: localhost could not be reached\n\tat net.serenitybdd.core.webdriver.driverproviders.RemoteDriverBuilder.theRemoteServerIsUnavailable(RemoteDriverBuilder.java:87)\n\tat net.serenitybdd.core.webdriver.driverproviders.RemoteDriverBuilder.ensureHostIsAvailableAt(RemoteDriverBuilder.java:72)\n\tat net.serenitybdd.core.webdriver.driverproviders.RemoteDriverBuilder.newRemoteDriver(RemoteDriverBuilder.java:37)\n\tat net.serenitybdd.core.webdriver.driverproviders.DefaultRemoteDriver.buildWithOptions(DefaultRemoteDriver.java:24)\n\tat net.serenitybdd.core.webdriver.driverproviders.RemoteDriverProvider.newInstance(RemoteDriverProvider.java:53)\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:127)\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:149)\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:140)\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:110)\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:181)\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:860)\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:761)\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:749)\n\tat com.prs.stepslibrary.TestSteps.whenSearchingOnGoogle(TestSteps.java:44)\n\tat com.prs.stepslibrary.TestSteps$$EnhancerByCGLIB$$b374b67b.CGLIB$whenSearchingOnGoogle$1(\u003cgenerated\u003e)\n\tat com.prs.stepslibrary.TestSteps$$EnhancerByCGLIB$$b374b67b$$FastClassByCGLIB$$392cb02e.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\n\tat com.prs.stepslibrary.TestSteps$$EnhancerByCGLIB$$b374b67b.whenSearchingOnGoogle(\u003cgenerated\u003e)\n\tat com.prs.stepdefs.TestStepDefs.iSearchOngoogle(TestStepDefs.java:21)\n\tat ✽.I search on google(src/test/resources/features/test.feature:13)\n",
  "status": "failed"
});
});