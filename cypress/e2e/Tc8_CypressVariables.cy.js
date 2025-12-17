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

describe("Test for Cypress Variables",()=>{


it("Test for Title and url with variable",()=>{

cy.visit("https://www.google.com/");

//title()
// let appTitle=cy.title();
// cy.log("Application title is: "+appTitle);//you will not see any title as its wrong way

//get the title and store it into variable

cy.title().then((appTitle)=>{  //here appTitle is my variable name
cy.log("Application title is: "+appTitle);
})

//get the url and store it into variable and print

cy.url().then((appUrl)=>{  //here appUrl is variable name

    cy.log("Application url is: "+appUrl)

})

//for google search: store this element into variable and then type()
//cy.get("#APjFqb").type("Jenkins");

cy.get("#APjFqb").then(($searchEle)=>{  //here $searchEle is varibale name

   
    cy.wrap($searchEle).type("Jenkins");

})

    
})


})