/*
Hoisting is the behavior where you can able to access variable 
before even declaring it.

Hoisting is applicable for var type and function declaration

hoisting is not applicable for let,const and modern js Anonymous function and arrow function

rule:
First declare varibale and function then call it
*/

test1();
//test2();//ReferenceError: Cannot access 'test2' before initialization
//test3();//ReferenceError: Cannot access 'test3' before initialization
console.log(browserName);//var is hoisted

var browserName="chrome";

console.log(browserName);//chrome

//ReferenceError: Cannot access 'browserVersion' before initialization
//console.log(browserVersion);
let browserVersion;
console.log(browserVersion);

//console.log(tool);//ReferenceError: Cannot access 'tool' before initialization
const tool="Selenium";
console.log(tool);

//function declaration is only hoisted
function test1()
{
    console.log('Test1() is calling...');
    
}

let test2=function()
{
console.log("Test2() is calling");

}
test2();

let test3=()=>{console.log("Hi")}

test3();