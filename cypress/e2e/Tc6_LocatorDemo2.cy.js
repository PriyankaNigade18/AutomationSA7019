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


describe("Test for Locators",()=>{


    it("Test For Orangehrm login",()=>{
        //open application
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //username:CssSelector with attribute
        cy.get("input[name='username']").type("Admin");

        //password: cssSelector with atribute
        cy.get("input[placeholder='Password']").type("admin123");

        //login Button
        cy.get("button[type='submit']").click();

        //assertion
        cy.url().should("include","dashboard");

        //logout
        cy.get("i.oxd-userdropdown-icon").click();

        //options
        //cy.contains("Logout").click();

        //parent with child
        cy.get("ul[role='menu']>li:nth-child(4)>a").click();


    })




})