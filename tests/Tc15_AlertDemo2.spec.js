
import {test,expect} from "@playwright/test"

test("All Types of Alert",async({page})=>{

page.on("dialog",async(alertBox)=>{
        console.log("Alert text is: "+alertBox.message());
        console.log("Type of alert : "+alertBox.type());

        //ok
        //await alertBox.accept();

        //cancel
        //await alertBox.dismiss();

        //prompt
        await alertBox.accept("Hi");
})

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //button1
    //await page.getByText("Click for JS Alert").click();

    //button2
   // await page.getByText("Click for JS Confirm").click();

    await page.getByText("Click for JS Prompt").click();

    //autodimiss alert

    //validate result
    let resultEle=page.locator("#result");
    //expect(resultEle).toHaveText("You successfully clicked an alert");
    //expect(resultEle).toHaveText("You clicked: Cancel");
    expect(resultEle).toHaveText("You entered: Hi");
    console.log("Alert handled!");
    
    await page.waitForTimeout(2000);
})