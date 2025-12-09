/*

Array is Static data structure
Array can store collection of data and Object in single variable
Array size is fixed and type always same type
Array index always starts with 0

Types:
----------
1.Single dimensional array(1D)
2.Multi Dimensional array(2D)

In Js Array is an Object and by default its dynamic

Syntax:
=========
let arrayVariableName=[e1,e2,e3...en]

*/
console.log("---------1D array--------");

let arr=[];
console.log(arr);//[]
console.log(typeof arr);//object

console.log("--------------");

let sid=[10,20,30,40,50];
console.log(sid);
//get the length of array
console.log("Total Student ids are: "+sid.length);//5

//single id
console.log(sid[3]);//

//wrong index
console.log(sid[9]);//undefined

/*
Itearation for array
-----------------------
    1.Simple for loop 
    2.for...of loop
    3.for...in loop

    for...of loop  iterates over values and applicable for array and string
    for...in loop iterates over index/keys and applicable for Object

*/

console.log("-------Iteration with for loop---------");

for(let i=0;i<sid.length;i++)
{
    console.log(sid[i]);
    
}
console.log("-------Iteration with for...of loop---------");

for(let i of sid)
{
    console.log(i);
    
}

console.log("-------Iteration with for..in loop---------");
//for...in loop applicable for object 
//it iterates over keys or index

for(let i in sid)
{
    console.log(i);
    
}

console.log("-------------");

for(let i in sid)
{
    console.log("for index: "+i+" value is: "+sid[i]);
    
}

console.log("--------Array methods----------");

let sname=["Ravi","Kiran","Archana","Smita","Abhi"];
console.log(sname);
console.log("Total Student names are: "+sname.length);

//push():append new element at the end of array

sname.push('Jay');

console.log(sname);

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
sname.unshift('Amit');

console.log(sname);



//pop():Removes the last element from an array and returns it. 
sname.pop();
console.log(sname);

//shift():Removes the first element from an array and returns it.
sname.shift();
console.log(sname);

//splice(start index,delete count,replacelement)
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

//[ 'Ravi', 'Kiran', 'Archana', 'Smita', 'Abhi' ]
//    0         1        2           3       4

// sname.splice(0,1);//ravi will delete
// console.log(sname);

//delete Archana 
// sname.splice(2,1);//Archana will delete
// console.log(sname);

//delete Archana and replace Aprana
// sname.splice(2,1,"Aprana");
// console.log(sname);

//delete Archana and smita
sname.splice(2,2,"Jaya","Pari","Komal");
console.log(sname);

console.log("------map()--------");
//to transform the array

let num=[1,2,3,4,5];
console.log(num);

//square of these number

let result=num.map(n=>{
    return n*n

});

console.log(result);

console.log("----------");
//sum of array elements
let res=num.reduce((ele,total)=>{
    total=total+ele,0;
    return total;
})

console.log(res);

console.log("--------");

let sum=0;
for(let n of num)
{
sum=sum+n;
}

console.log("Sum of array elements: "+sum);


console.log("------------Multi Dimensional array------");

let loginData=[["Admin","admin123"],
                ["Kiran","test123"],
                    ["Datta","test123"]];

console.log(loginData);

console.log("--------");

for(let e of loginData)
{
    console.log(e);
    
}















