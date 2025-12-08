/*
1.for loop
==============
Number of iterations are fixed

2.while loop
=================
-Entry controlled loop
-Number of iterations are not known

3.do-while
==========
-Exit controlled loop
-one time iteration 

*/
console.log("-----for loop-----");

//print hello 5 time
for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}
console.log("---------------");

//print 1 to 10 numbers
for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("---------------");
//print 10 to 1

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("---------------");

//factorial logic
//5!=5*4*3*2*1=120

let fact=1;
for(let i=5;i>=1;i--)
{
fact=fact*i;
}
console.log("Result is: "+fact);

//interview question
// for(;;)
// {
//     console.log("Hi");//infinite time this code run
    
// }


console.log("--------while loop------");

let i=1;

while(i<=5)
{
    console.log("Hello...");
   i++;
    
}

console.log("---------");

//sum of 100 natural numbers
//1+2+3+4.....+100=5050

let num=1;
let sum=0;

while(num<=100)
{
sum=sum+num;
num++;
}

console.log("Result of Sum of 100 natural numbers: "+sum);

console.log("--------do while------");

let j=1;

do{
    console.log("Welcome");
    j++;
    
}while(j<=10);


console.log("---------");


let k=1;
do{
    console.log("Hello");
    k++;
}while(k<=5);







































