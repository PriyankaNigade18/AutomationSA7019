
/*
3 ways to declare function
------------------------------
1. function declaration
2.  Function Expression
    2.1. Anonymous fuction (function without name)
    2.2. Arrow function
*/


console.log("----Function Declaration----");


function show()
{
    console.log("This is show() calling.....");
    
}


//calling
show();

console.log("----Anonymous function----");


let test1=function()
{
console.log("This is Anonymous function calling....");

}

//call
test1();

console.log("----Arrow function----");

let test2=()=>{
    console.log("This is Arrow function calling.....");
    
}

let test3=()=>console.log("Hello All.....");

//call
test2();

test3();

