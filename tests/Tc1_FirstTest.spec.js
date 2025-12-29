
//import playwright library
import {test} from "@playwright/test"

test("This is test1",async({page})=>{
 
//open application
await page.goto("https://www.google.com");
console.log("This is is google page");

//get the title and print itnetstat -aon | findstr :9323

let appTitle=await page.title();
console.log("Application title is: "+appTitle);




})