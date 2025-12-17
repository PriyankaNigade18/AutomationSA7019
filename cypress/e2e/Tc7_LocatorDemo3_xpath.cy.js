/*
what is Xpath
==================
path of webelement from html/xml file

Types
===========
1.Absolute Xapth
--------------------
- Identify element from root node
-starts with '/'

/html/body/div[2]/div/div/div/div[2]/div/form/div[1]/input

2.Relative Xpath
----------------
- Identify element by its relative property
- startswith '//'

//*[@id="input-email"]
* any 

Syntax:
==========
//tagname[@attribute='value']



*/

describe("Test for xpath locator",()=>{

it("Test for Login with xpath",()=>{

//open application
cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

//email
cy.xpath("//input[@name='email']").type("test2525@gmail.com");

//password
cy.xpath("//input[@type='password']").type("test123");

//login
cy.xpath("//input[@value='Login']").click();

//assertion
cy.url().should("include","account");


})


})

