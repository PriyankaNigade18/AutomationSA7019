
//import playwright library
import {test,expect} from "@playwright/test"


test("Test for Title and Url validation",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

//To get the title: title()
let appTitle=await page.title();
console.log("Appliocation title is: "+appTitle);


//To get the current url : url()
let appUrl=page.url();
console.log("Application url is: "+appUrl);

//assertion with variable
//assert the title from appTitle variable
expect(appTitle).toEqual("Register Account");
//partial match
expect(appTitle).toContain("Account");

//validation:page level assertion
//assert the current title: full match
await expect(page).toHaveTitle("Register Account123");

//assert the current title: partial match(regular expression:used for pattern matching)
await expect(page).toHaveTitle(/Account/);

//assert the current url: full match
await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/register");

//assert the current url: partial match(regular expression:used for pattern matching)
await expect(page).toHaveURL(/https/);


//thread.sleep()
await page.waitForTimeout(2000);
})
