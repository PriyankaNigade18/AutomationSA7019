
/*
Call Back function/Higher order function
----------------------------------------
Whenever we pass function as parameter to other function then parameter function
is called call back function/higher order function
*/


function greetMessage(name)
{
console.log("Hello "+name+" Welcome to learn Automation!");

}

//executable function
//here two parameters 1.fname(variable) 2.fun(function:call back function)
function greet(fname,fun)
{
    fun(fname);

}
//calling
greet('Amit',greetMessage);
greet('Smita',greetMessage);

console.log("----------------------");


function add(num1,num2)
{
    console.log("Addition is: "+(num1+num2));
    
}


function sub(num1,num2)
{
    console.log("Subtraction is: "+(num1-num2));
    
}


function multiply(num1,num2)
{
    console.log("Multiplication is: "+(num1*num2));
    
}

function divide(num1,num2)
{
    console.log("Division is: "+(num1/num2));
    
}


//executable function
function calculator(num1,num2,callback)//callback is name for function
{
    callback(num1,num2);

}

//call
calculator(100,500,add);
calculator(100,100,multiply);
calculator(300,5,divide);
calculator(800,455,sub);











