console.log("----Simple If----");
/*
Simple Id applicable for single tru condition
*/

console.log("Program started....");
//true condition
//validate current year
let year=2025;

if(year===2025)
{
    console.log("year matched...Current year is: "+year);
    
}

console.log("Program ends.....");

console.log("-----------");
//condition is false
console.log("Program started....");

let cyear=2025;

if(cyear===2026)
{
    console.log("Year matched....");
    
}

console.log("Program ends.....");

console.log("---------If-Else----------");
//validate age for voting
let age=10;

if(age>=18)
{
    console.log("Valid age!");
    
}else{
    console.log("Invalid age!");
    
}

console.log("-------Ladder if---------");
//multiple condition testing

let num=30;

if(num>0)
{
    console.log(num+" is positive number");
    
}else if(num<0)
{
    console.log(num+" is negative number");
    
}else if(num===0)
{
    console.log(num+" is 0");
    
}else
{

    console.log(num+" Wrong number!");
    
}

console.log("--------Real use case---------");
/*
In Js for string comparison use includes()
*/
let browserName="edge".toUpperCase();

if(browserName.includes("CHROME"))
{
    console.log("Test case is execting on Google Chrome!");
    
}else if(browserName.includes("EDGE"))
{
    console.log("Test case is executing on Microsoft Edge!");
    
}else if(browserName.includes("FIREFOX"))
{
    console.log("Test case is executing on Mozilla Firefox!");

}else{
    console.log("Wrong Browser!");
    
}

console.log("---------Nested if-----------");
/*
Declare marks and compare
1.marks are grater than equal to 90--->A
2.marks are grater than equal to 95--->A++
3.Otherwise grade should be B
*/


let marks=93;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++ grade");
        
    }else
        {
        console.log("A grade");
        
    }
}else
{
    console.log('B grade');
    
}


console.log("------SwitchCase-------");

//traffic light

let color="red";

switch (color) {
    case 'red':
        console.log("STOP");
         break;
    case 'yellow':
        console.log("READY");
        break;
    case 'green':
        console.log("GO");
         break;
    default:
        console.log("Wrong color...");
        
       
}


/*Assignments
1. WAP for testing even and odd number
2. WAP for testing grater number between 3numbers
3. WAP for browser validation using switch case 


*/


















































