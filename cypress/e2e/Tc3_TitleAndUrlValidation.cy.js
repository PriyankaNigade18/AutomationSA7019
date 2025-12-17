/*
Assertion 
-----------------
Assertion will help to validate current status of application

In Cypress two types of assertion are there
-----------------------------------------
1.Implicit Assertion(default assertion way)
-----------------------------
should() 
and()

2.Explicit Assertion
-------------------------
TDD: assert()
BDD: expect()

Rule: Explicit assertion you can execute with cypress variable
*/



describe("This is for basic title and url assertion",()=>{


it("Validate Google title and url for valid data ",()=>{

    //open application
    cy.visit("https://www.google.com/");

//get the title and validate that title should be Google eq property
cy.title().should("eq","Google");//exact match

//get the current url and do assert it
cy.url().should("eq","https://www.google.com/");//exact match

//partial match
cy.url().should("include","google.com");


    
})

it("Validate Google title and url for invalid data",()=>{
    //open application
    cy.visit("https://www.google.com/");

    //get the url and test for wrong url
    //cy.url().should("eq","www.google.com/");//fail: Assertion error after 4sec retry

     cy.url().should("include","www.google.com/");//pass

    //get the title and test for wrong title
    cy.title().should("eq","google");

})




})


