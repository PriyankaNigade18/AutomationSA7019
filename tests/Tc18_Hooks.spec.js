
import {test,expect} from "@playwright/test"
import { describe } from "@playwright/test"

describe.serial("This is suite",()=>{

    let page;
    //open google app
    test.beforeEach(async ({context})=>{

        //create new page
        page=await context.newPage();
        await page.goto("https://www.google.com");
    })


test("Test google title",async({})=>{

    let appTitle=await page.title();
    console.log("Application title is: "+appTitle);
    expect(page).toHaveTitle("Google");
    console.log("Test pass...Title matched!");
    
    
})

test("Test google search",async({})=>{
    
    await page.locator("#APjFqb").fill("Java");

await page.waitForTimeout(2000);
})

})