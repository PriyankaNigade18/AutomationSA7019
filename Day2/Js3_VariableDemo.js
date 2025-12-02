/*

Variable:
----------
Variable is name of storage location where we can store data

In Javascript 3 keywords we use to declare variable
---------------------------------------
1.var(Older not recommended to use)
----------------------
scope: Global + functional
Redeclaration is allowed
Var are hoisted

For modern js we use let or const
2.let
-----------------
Scope: Global+ block +functional
It is Mutable
Redeclaration is not allowed
Reassignment is allowed


3.cont(like final keyword in Java)
----------------------
Scope: Global +Block + functional
It is Immutable
Redeclaration and Reassignment is not allowed

Functional Scope:(local)
-------------------------
Variable declare inside a function we can access only within a function

What is Hoisting?
====================

Rule:
Hoisting is aplicable for var type variable and
function declaration type

Joisting is not applicable for let and const and modern 
function expression (Anonymous function + arrow function)

Global scope:
----------------
data is publicly available
By default any variable you declare outside the function/block
is called global data

*/


console.log("--------------Global scope----------");

var fname="Hiteshi";
let location="Us";
const emailId="hiteshi@gmail.com";

console.log("First name is: "+fname);
console.log("Location is: "+location);
console.log("Emial id: "+emailId);


function globalData()
{
    console.log("------Global data calling fom function----");
    
    console.log("First name is: "+fname);
    console.log("Location is: "+location);
    console.log("Emial id: "+emailId);
}

//call
globalData();

console.log("------Functional Scope------");

/*
Functional Scope:(local)
-------------------------
Variable declare inside a function we can access only within a function not 
outside that function(local)
*/

function info()
{
    var platformName="Windows";//local
    let browserVersion=120;//local
    const toolName="Selenium";//local
    console.log("Platform name is: "+platformName);
    console.log("Browser Version is: "+browserVersion);
    console.log("Tool name is: "+toolName);
    
  }

//call
info();

console.log("-----Calling functional scope data outside that function---");

//console.log("Platform name is: "+platformName);//ReferenceError: platformName is not defined
//console.log("Browser Version is: "+browserVersion);//ReferenceError: browserVersion is not defined
//console.log("Tool name is: "+toolName);//ReferenceError: toolName is not defined

console.log("------Block scope-----");
/*
Block scope means any data you declare inside {}
like if block, for loop block, while loop block ...etc

So block scope is applicable to let and const type variable

Anything you declare inside block you can access only through that block
you can not access that data outside that block

*/


        if(true)
        {
            let userId=101;
            const orgName="HSBC";
            console.log("User id is: "+userId);
            console.log("OrgName is: "+orgName);
            
            
        }

          //console.log("User id is: "+userId);//ReferenceError: userId is not defined
         //console.log("OrgName is: "+orgName);//ReferenceError: orgName is not defined
console.log("-----Redeclaration rule--------");
/*
Only for var type redeclaration allowed
Declare same name variable 

*/

var automationTool="Selenium";

var automationTool="cypress";

var automationTool="Playwright";

var automationTool=12344;


console.log(automationTool);


//Cannot redeclare block-scoped variable 'bookName'
let bookName="Java-Selenium";
//reassignment
bookName="Learn step by step Playwright";
bookName="Selenium";

console.log(bookName);

//let bookName="Java-Selenium";

//Cannot redeclare block-scoped variable 'pi'
const pi=3.14;
//pi=8.67;TypeError: Assignment to constant variable.
//const pi=3.14;






