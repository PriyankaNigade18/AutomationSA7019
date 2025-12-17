/*
To open any application
-----------------------
cy.visit("url")

To get the title of application
-----------------------------------
cy.title();

To get the current url of application
----------------------------------
cy.url()

*/

describe("This is launch of application Suite",()=>{


it("This is google launch",()=>{

    //open application:cy.visit("url")
    cy.visit("https://www.google.com/");
    cy.log("Google app open!");

    let appTitle=cy.title();
    cy.log("Application title is: "+appTitle);

    cy.log("Application title: "+cy.title());

})

it("This is amazon launch",()=>{

    //open application
    cy.visit("https://www.amazon.in/");
    cy.log("Amazon application open");

    //here you can not get the title or url as cypress variables required!
    cy.log("Application title: "+cy.title());

    cy.log("Application url: "+cy.url());

})







})