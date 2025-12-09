/*
Function help to run group of statement

function and methods are different in Js

Method belongs to class

3 ways to declare function
------------------------------
1. function declaration
2.  Function Expression
    2.1. Anonymous fuction (function without name)
    2.2. Arrow function
*/

console.log("------Function Declaration without parameter-----");

function test1()
{
   console.log("This is test1() declaration calling.....");
    
}

//call
test1();

console.log("------Function Declaration with parameters-----");

function add(num1,num2)
{
    let result=num1+num2;
    console.log("Addition is: "+result);
    
}

//call
add(100,200);

console.log("------Function Declaration with parameters using return statament-----");
/*
return keyword:
==============
Whenever from function if you wanted to return any result or data use return keyword
return keyword return the value to calling function
*/
function sum(num1,num2)
{
    return num1+num2;
}

//call
let result=sum(10,20);
console.log("Sum is: "+result);

console.log("------Anonymous function without parameter-------");


let test2=function()
    {
    console.log("This is Anonymous function is calling....");

    }

    //call
    test2();

console.log("------Anonymous function with parameter-------");

let multiply=function(num1,num2)
    {
        console.log("Multiplication is : "+(num1*num2));
        
    }


//call
multiply(10,10);

console.log("------Anonymous function with parameter using return keyword-------");

let test3=function(message)
            {
                return message;
            }

//call
//console.log(test3("Cypress is modern web application tool..."));

let res=test3("Cypress is modern web application tool...");
console.log("Message: "+res);

console.log("------Arrow function without parameters-------");

let test4=()=>{console.log("This is arrow function.....");};

//call
test4();

  console.log("------Arrow function with parameters-------");          

  let divide=(num1,num2)=>{
                console.log("Division is: "+(num1/num2));
    
                }

//call
divide(100,2);

  console.log("------Arrow function with parametersusing return-------");          

let test5=(isActive)=>{
            return isActive;
            }

//call
 let isStatus=test5(false);
 console.log("Satus is: "+isStatus);
 










