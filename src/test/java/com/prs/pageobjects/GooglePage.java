package com.prs.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.annotations.WhenPageOpens;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static org.openqa.selenium.support.ui.ExpectedConditions.titleContains;

@DefaultUrl("https://www.google.com")
public class GooglePage extends PageObject {

    @FindBy(name = "q")
    WebElement search;

    @FindBy(name = "q")
    WebElementFacade searchButton; //The WebElementFacade class convenient fluent API for dealing with web elements, providing some commonly-used extra features that are not provided out-of-the-box by the WebDriver API.

    @WhenPageOpens
    public void waitUntilTitleAppears() {
        element(search).waitUntilVisible();
    }

    public void searchFor(String keyword) {
        search.sendKeys(keyword, Keys.ENTER);
        waitFor(titleContains("Google Search"));
    }

    public boolean searchButtonIsVisible() {
        return searchButton.isVisible();
    }

}
