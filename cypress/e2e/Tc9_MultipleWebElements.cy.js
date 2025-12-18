/*
Cypress use variable for automation single element,multiple webelement, title and url

When we interact with one element,title,url use then()
When we interact with multiple elements use each()

How to get the title and store it into variable
=================================================
Syntax:
==========
cy.title().then((variableName)=>{
    
    cy.log("Title is: "+variableName)
    })

How to get the url and store it into variable
=================================================
Syntax:
=======
cy.url().then((variableName)=>{
    cy.log("Url is: "+variableName)
    })

How to identify single webelement and with variable how to get the text of element,click,type
==========================================================
In cypress to address the webelement for variable use $ sign
To perform action on webelement first use wrap($variable) then perform action
Syntax:
=======
cy.get("locator").then(($variableName)=>{

    //how to get text of that element:text().....like in selenium getText()
       cy.log($variableName.text())

    //how to perform action click() type() on element
    
    cy.wrap($variableName).click()

    cy.wrap($variableName).type("data")


    })

*/

describe("This is for Multiple Webelements ",()=>{

it("Test for Register page list",()=>{

    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

    //list of options
    cy.get("div.list-group>a").each(($ele)=>{

        cy.log("Option Name: "+$ele.text());

        if($ele.text().includes("Forgotten Password"))
        {
            //click on link
            cy.wrap($ele).click();

        }
    })






})


//test2
it("Automate Google search scenario",()=>{
    cy.visit("https://www.google.com/");

    cy.get("#APjFqb").type("Java");

    //wait for 2sec In Selenium Thread.sleep(2000)
    cy.wait(1500);

    //list
    cy.get("ul[role='listbox']>li div[role='presentation']>span").each(($option)=>{

      
        cy.log($option.text());
        
    })

})

//test3
it.only("Test for Total Links",()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.get("a").each(($link)=>{

        let linkText=$link.text();
        cy.log("Text is: "+linkText);

        //to get the attribute value attr() in Selenium We have getDomAttribute('attribute name')
        cy.log($link.attr('href'));


    })

})

})

/*
Assignment
goto https://www.freshworks.com/ application and capture all footers print it in console
*/