
import {test,expect} from "@playwright/test"

test("Test for page scroll",async({page})=>{

    await page.goto("https://www.amazon.in/");

      await page.waitForTimeout(1500);

    //scroll down
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight);
    })

    await page.waitForTimeout(1000);

    //scroll up
     await page.evaluate(()=>{
        window.scrollTo(document.body.scrollHeight,0);
    })


    //scroll up to element
    await page.locator("//span[contains(text(),'From daily commutes to weekend thrills')]").scrollIntoViewIfNeeded();
     await page.waitForTimeout(2000);
})