package com.prs.stepdefs;


import com.prs.stepslibrary.TestSteps;
import cucumber.api.java.en.Given;
import net.thucydides.core.annotations.Steps;
import org.junit.Test;

public class TestStepDefs {

    @Steps
    private TestSteps testSteps;

    @Given("^I call \"(.+)\" api$")
    public void iCallGoogleApi(String site) {
        testSteps.getPageResponse(site);
    }

    @Given("^I search on google$")
    public void iSearchOngoogle() {
        testSteps.whenSearchingOnGoogle();
    }

//    public TestStepDefs() { cucumber 8 is not fully supported by serenity as serenity needs an empty stepdefs constructor
//
//        Given("^I call \"(.+)\" api$", (String site) -> {
//            testSteps.getPageResponse(site);
//        });
//
//        Given("^I search on google$", () -> {
//            testSteps.whenSearchingOnGoogle();
//        });
//    }

    @Test
    public void test() {

        // plaindrome test
        String original, reverse = "";
        int length;
        System.out.println("Enter the number or String");
        original = "abba";
        length = original.length();
        for (int i =length -1; i>=0; i--) {
            reverse = reverse + original.charAt(i);
        }
        System.out.println("reverse is:" +reverse);

        if(original.equals(reverse))
            System.out.println("The number is palindrome");
        else
            System.out.println("The number is not a palindrome");


        // fibonacci series - 0, 1, 1, 2, 3, 5, 8, 13, 21, 24, 45
        int num, a = 0,b=0, c =1;
        System.out.println("Enter the number of times");
        num = 10;
        System.out.println("Fibonacci Series of the number is:");
        for (int i=0; i<=num; i++) {
            a = b;
            b = c;
            c = a+b;
            System.out.println(a + "");    //if you want to print on the same line, use print()
        }
    }
}
