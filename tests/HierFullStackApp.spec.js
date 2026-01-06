

//import playwright library
import {test,expect} from "@playwright/test"

test("Test for ContactUs Form",async({page})=>{

    //open application
    await page.goto("https://fullstacktechies.com/");

    //contact us link
    let contactUsEle=page.getByRole('link',{name:"Contact Us"});
    await expect(contactUsEle).toBeVisible();
    await contactUsEle.click();

    //static wait
    await page.waitForTimeout(1000);
    //name field validation
    //let nameEle=page.getByPlaceholder("Name");
    let nameEle=page.locator("(//input[contains(@id,'forminator-field-name-')])[1]");
    console.log("Is Name Element visible?: "+await nameEle.isVisible());
    console.log("Is Name Element enabled?: "+await nameEle.isEnabled());
    console.log("Is Name Element editable?: "+await nameEle.isEditable());

     if((await nameEle.isVisible()) && (await nameEle.isEnabled()) && (await nameEle.isEditable()))
     {
        //enter the name
        await nameEle.fill("Snehal");
     }
     //validat entered value
     await expect(nameEle).toHaveValue("Snehal");
     console.log("Name validated!");
     
     //email
     let emailEle=page.locator("(//input[contains(@id,'forminator-field-email')])[1]");
    if((await emailEle.isVisible()) && (await emailEle.isEnabled()) && (await emailEle.isEditable()))
     {
        //enter the email
        await emailEle.fill("katte.snehal32@gmail.com");
                
     }
      //validat entered value
     await expect(emailEle).toHaveValue("katte.snehal32@gmail.com");
     console.log("email validated!");

     //phone ele
     let phoneEle= page.locator("(//input[@name='phone-1'])[1]");
     if((await phoneEle.isVisible()) && (await phoneEle.isEnabled()) && (await phoneEle.isEditable()))
     {
        //enter the email
        await phoneEle.fill("7020119661");
                
     }
      //validat entered value
     await expect(phoneEle).toHaveValue("7020119661");
     console.log("phone number validated!");
     
     //countryDropdown ---Select based
     let countrydd=page.locator("//select[@data-search-placeholder='Country']");
     await countrydd.selectOption("India");
     /*
     //multiple options
     let allOptions=await page.locator("//select[@data-search-placeholder='Country']//option").all();
     console.log("Total options from Country dropdown: "+allOptions.length);
     //for of loop
         for(let option of allOptions)
         {
            console.log(await option.innerText());
            if((await option.innerText()).includes("India"))
            {
                //visible text
                await countrydd.selectOption(await option.innerText());
                break;
            }
            
         }
*/
         //choose options
         let chooseOptionsdd=page.locator("//select[@data-search-placeholder='Choose Options...']");
         await chooseOptionsdd.selectOption({value:"Development"});
         //multiple options
    // let options=await page.locator("//select[@data-search-placeholder='Choose Options...']//option").all();
    /* console.log("Total options from Choose options dropdown: "+options.length);
     //for of loop
         for(let option of options)
         {
            console.log(await option.innerText());
            if((await option.innerText()).includes("Development"))
            {
                //visible text
                await chooseOptionsdd.selectOption(await option.innerText());
                break;
            }
            
         }*/

         await page.waitForTimeout(1000);
         //Input filelink or googledrive link
         await page.locator("(//input[@name='text-1'])[1]").fill("https://fullstacktechies.com/contact-us/");
            await page.waitForTimeout(1000);

         //message
        await page.locator("(//textarea[@name='textarea-1'])[1]").fill("Hi hello");

        

         //submit
         // await page.evaluate(()=>{
        //     document.querySelector("button.lead-submission-button").click();
        // })

         await page.locator("(//div[@class='forminator-field']//button)[1]").click();
     

await page.waitForTimeout(2000);
})