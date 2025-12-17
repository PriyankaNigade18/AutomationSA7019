/*
How to automate any webelement
====================================
We use locator to identify and perform actions on that element

What is Locator?
=====================
Locator is address of webelement from that webpage

Cypress support 3 locators strategy
--------------------------------------
1.contains()
2.tagname
3.CssSelector

Notes:
---------------
1.contains():
---------------------------
this method will identify element by its visible text

syntax:
==========
cy.contains("visible text");

example
--------------
<a> Cart </a>
cy.contains("Cart").click();
===============================================
2.tagname
-------------
Identify element by its tagname

Scenario:
------------
Number of input boxex
Number of Links
Number Images

Syntax:
=============
cy.get("Locator");

scenario: Get all links
-----------------
cy.get("a")
=============================

3.CssSelector(default)
=========================
-CssSelector it is locator to identify element based on 
element css property
-CssSelector are faster than xpath
as csssElector travel in one directon (parent--->child)

1.tagname with id
2.tagname with attribute
3.tagname with class

1.tagname with id
--------------------
Syntax:
=========
tagname#id

example:
<input id="test">
input#test
or
#test

2.tagname with attribute
------------------------
syntax:
===========
tagname[attribute='value']
example
---------------
input[placeholder='Search']

3.tagname with classname
-----------------------------
Syntax:
=========
tagname.classname

example
--------------
button.oxd-button

*,^,$
==============

id="twotabsearchtextbox"

1.partial match *
--------------------
Syntax:
========
tagname[attribute*='partial value']

input[id*='searchtext']

2. Starts-with(^):prefix value
--------------------
Syntax:
============
tagname[attribute^='prefix value']

input[id^='two']

3.EndsWith($):suffix value
------------------------------
Syntax:
============
tagname[attribute$='suffix value']

input[id$='box']

parent to child 
-------------------
space
------------
parenttag chiltag : direct +indirect child
aside a------13 elements
>
-------
parenttag>childtag : direct child
div.list-group>a ------13 elements

how to use indexing in css selector
-------------------------------------
Parent>child:nth-child(index of dom)

div.list-group>a:nth-child(7)----1 of 1


*/

describe("This is for Locator test",()=>{

it("Test for CRM Login and Logout",()=>{

    //open application
    cy.visit("https://automationplayground.com/crm/");

    //sign In with contains():visible text
    cy.contains("Sign In").click();

    //cssSelector with id 
    //cy.get("#SignIn").click();

    //After click App navigate to login
    cy.url().should("include","login");


    //emailid: CssSelector with id
    cy.get("#email-id").type("test@gmail.com");

    //password: CssSelector with attribute
    cy.get("input[placeholder='Password']").type("test123");

    //checkbox: check() and uncheck()
    //cy.get("#remember").click();
    cy.get("#remember").check();

    //button:CssSelector with classname
    cy.get("button.btn.btn-default.btn-primary").click();

    //assertion for navigation
    cy.url().should("include","customers");

    //logout
    cy.contains("Sign Out").click();

    //get the text
    //cy.get("//p").text(); its wrong technique

    // cy.xpath("//p[contains(text(),'CRM')]").then(($ele)=>{
    //     cy.log("Result Text: "+$ele.text());
    // })

cy.get("div.header-section>p").then(($ele)=>{
         cy.log("Result Text: "+$ele.text());
     })

})




})