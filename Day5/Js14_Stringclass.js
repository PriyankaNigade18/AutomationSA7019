/*
String is Immutable class in Js
It is primitive data type also

String is collection of characters

String have multiple methods like java
*/

let message='Hello Everyone!';
console.log(message);
console.log(typeof message);
message[0]='h';
console.log(message);


console.log("-------String methods-------");

//To get length of string in Js lenght property not method
console.log("Message lenght is: "+message.length);

//conversion methods: toUpperCase()  toLowerCase()
console.log(message.toUpperCase());
console.log(message.toLowerCase());

//trim(): ignore white space before and after string
let s1="      Welcome All     ";
console.log(s1);


console.log(s1.trim());

//let message='Hello Everyone!';
//charAt(index): to get the character
console.log("Character at 7th index position is: "+message.charAt(7));

//concat()
console.log(message.concat(s1));

//includes(): like contains() 
let info="Playwright is Modern webUi application testing api"

console.log("look for webui?: "+info.includes('webUi'));//true
console.log("look for Selenium?: "+info.includes("selenium"));//flase

//split(regular expression)

let tools="Selenium,Playwright,Appium,Postman,Cypress";
console.log(tools);
let arr=tools.split(',');
console.log(arr);

console.log("--------");

//just split Appium

let tool=tools.split(",")[0];

console.log(tool);

console.log("-------------");

console.log(tools);
console.log(tools.replace('Postman','RestAssured'));











