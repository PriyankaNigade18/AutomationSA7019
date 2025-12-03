/*
Type Casting
================
It is process where we convert one data type into other type

Two types
==============
1.Implicit Casting
-----------------------
It is automatic conversion taken care by Js
It is known as Type Coercion

2.Explicit Casting
------------------
Forecefull conversion of one type of data into other
Number()
String()
Boolean()

Type casting in Js applicable for Number,string and Boolean

Truthy
===========
Any true value in boolean context is callled truthy value
eg. nonzero number ,nonempty string

falsy
=============
Any false value in boolean context is called Falsy value
eg. O,"",null,undefined,Nan


*/

console.log("-----String Conversion-------");
/*
number /boolean data into string
When we use String with + operator then other data will convert into string
*/
//Type Coercion:(Autmatic conversion)

let a="Hello"+10+20;//10 & 20 coerced into String
console.log(a);//Hello1020
console.log(typeof a);//String

let b=10+50+"Hi";//10+50=60 then 60 coerced into string
console.log(b);//60Hi
console.log(typeof b);//string

console.log("Welcome"+true);//Welcometrue true coerced into string

console.log("-----Number conversion------");
/*
//String to number
If we use string with any other arithmetic operator (-,*,/) and
if string convertable then only string will convert into number
*/


let c="hello"-100;//hello is not a number
console.log(c);//NaN
console.log(typeof c);//number


let d="500"-100;//"500" coerced into number 500-100=400
console.log(d);
console.log(typeof d);

console.log(10+20+"100"-30);//10+20=30+"100"="30100"-30=30100-30=30070
console.log("100"/5);//"100" coerced into number 100/5=20
console.log("10"*"10");//"10" & "10" coerced into number 10*10=100

console.log("100"-true);//"100" & true coerced into number 100-1=99
console.log("10"/false);//"10" & false coerced into number 10/0=Infinity

console.log("100"+true+true);//100truetrue
console.log("100"-true-true);//98

console.log("-----Explicit Casting-----");

//Explicit conversion
//number to string
let num=1000;
console.log(num);
console.log(typeof num);//number
console.log(num+2000);//3000


//convert this number into string -String()

let s1=String(num);
console.log(typeof s1);//string
console.log(s1+2000);//10002000

console.log("String to number conversion");

//edge case
let s2="Hi";
console.log(Number(s2));//NaN

let s3="7000";
console.log(s3+1000);//70001000
//string --->number
let num2=Number(s3);
console.log(num2+1000);//8000


/*
Use Case:
validate bill amount should be less than 10000
*/

let bill="Total bill amount is 5000";

let stringTypeData=bill.split(" ")[4];//"5000"
//conversion
let amount=Number(stringTypeData);//5000

if(amount<10000)
{
    console.log("Test Pass....");
    
}else{
    console.log("Test Fail.....");
    
}

console.log("------Boolean Conversion--------");
/*

Truthy
===========
Any true value in boolean context is callled truthy value
eg. nonzero number ,nonempty string

falsy
=============
Any false value in boolean context is called Falsy value
eg. O,"",null,undefined,Nan

*/

let fname="Jay";

console.log(Boolean(fname));//true
console.log(Boolean(90));//true
console.log(Boolean(-90));//true
console.log(Boolean(89.76));//true
console.log(Boolean('p'));//true

console.log(Boolean(""));//false
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(10/0));//true
console.log(Boolean(0/0));//false















