package com.prs.stepslibrary;

import com.prs.pageobjects.GooglePage;
import io.restassured.filter.Filter;
import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import net.serenitybdd.rest.SerenityRest;
import net.thucydides.core.annotations.Managed;
import net.thucydides.core.annotations.Step;
import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

//@RunWith(SerenityRunner.class)
@Slf4j
public class TestSteps {

    @Managed //(driver="chrome", uniqueSession=true) passing from the command line
    WebDriver driver;

    private GooglePage googlePage;
//    private static Logger log = LoggerFactory.getLogger(TestSteps.class);

    @Step
    public void getPageResponse (String site) {
        String page = "https://www." + site + ".com";
        Response response = SerenityRest.rest()
                .given()
                .when()
                .get(page)
                .then()
                .statusCode(200)
                .extract()
                .response();
//        System.out.println(response.getBody());
        log.info("Response Catched");
    }

    @Step //@Test
    public void whenSearchingOnGoogle() {
        googlePage.open();
        log.info("searching Shravan on google");
        googlePage.searchFor("Shravan");
        assertThat(googlePage.getTitle(), equalTo("Shravan - Google Search"));
    }

//    private static Filter globalUser = (requestSpec, responseSpec, ctx) -> {
//        requestSpec.replaceHeader("Authorization", getToken(adminUserId));
//        return ctx.next(requestSpec, responseSpec);
//    };
}
