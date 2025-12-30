
//import playwright library
import {test,expect} from "@playwright/test"



test("Test for Navigation commands",async({page})=>{

    //open google application
    await page.goto("https://www.google.com");

    await page.waitForTimeout(1500);

    //open facebook application
    await page.goto("https://www.facebook.com");

    //Navigate back
    await page.goBack();

    //Navigate forward
    await page.goForward();

    //wait
    await page.waitForTimeout(1500);

    //refresh
    await page.reload();

    await page.waitForTimeout(2000);
})