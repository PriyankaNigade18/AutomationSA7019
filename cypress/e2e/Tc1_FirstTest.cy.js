
/*
spec--->suite(describe())--->testcase(it())
/// <reference types="Cypress" />
*/



describe("This is suite 1",()=>{

it("This is test1",()=>{

    cy.log("This is test case 1.....");
    cy.visit("https://www.google.com");

})

it("This is test2",()=>{
     cy.log("This is test case 2.....");
    cy.visit("https://www.amazon.in");
})



})

