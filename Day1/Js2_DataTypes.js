
/*
    DataTypes Help to define what type of data we store into variable

    Variable is name of storage location where we can store data

    Js Support two types for Datatype
    --------------------------------------
    1.Primitive
    ---------------
    1.Number
    2.Boolean
    3.String
    4.Undefined
    5.Null

    after ES6 its added
    6.BigInt(NA)
    7.Symbol(NA)

    2.NonPrimitive
    -------------------
    Object
    Array

    Syntax to declare any variable in Js
    -------------------------------------------

    Keyword variableName=value;

    Js support for modern js : let(Mutable)and const(Immutable)
    Older: var

    typeOf operator
    ------------------
    Will check type of variable

*/

console.log("------------Number type----------------");
/*
In Js every numerical data (+int,-ve,decimal digit number) is number type only
*/

let num1=1000;
console.log("Num1 is: "+num1);//1000
console.log("Type is: "+typeof num1);//number


let num2=-90;
console.log("Num2 is: "+num2);
console.log("Type is: "+typeof num2);//number

let num3=89.77;
console.log("Num3 is: "+num3);
console.log("Type is: "+typeof num3);//number

console.log("-------Boolean Type-------");
/*
boolean true/false
*/

let isActive=true;
console.log("Is Active: "+isActive);//true
console.log("Type is: "+typeof isActive);//boolean

let isStatus=false;
console.log("Is Status: "+isStatus);//false
console.log("Type is: "+typeof isStatus);//boolean


console.log("-----String type------------");
/*
String is collection of characters
1.declare with single quote 'Hello'
2.declare with double quote "Hello"
3.declare with template string(back tick) `Hello`

*/


let firstName='Dhriti';
console.log("First name is: "+firstName);
console.log("Type is: "+typeof firstName);//String

let lastName="Sharma";
console.log("Last name is: "+lastName);
console.log("Type is: "+typeof lastName);//String

let gender='F';
console.log("Gender is: "+gender);
console.log("Type is: "+typeof gender);//String



//template string
let info=`My name is Priyanka, completed ME in Computers 
            I am ISTQB certified trainer,
            having 15+ years of experience and working as SDET`;

            console.log(info);
            console.log(typeof info);//string
            
            
let jsonData=`{
   "id": "7",
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}`

console.log(jsonData);


console.log("-------------Undefined type--------------");
/*
Undefined
--------------
When you declare variable without any value so by default
js store undefined and type also undefined.

*/

let marks;
console.log("Marks are: "+marks);//undefined
console.log("Type is: "+typeof marks);//undefined

console.log("----------null type---------------");

/*
null means unknown
when you check type you will get Object not null
as ot is bug mensioned in js
*/


let address=null;
console.log("Address is: "+address);
console.log("Type is: "+typeof address);//object


//Big int(Not required)
console.log("Max number in js: "+Number.MAX_VALUE);
//7976931348623157e+308

let num4=7976931348623157308n;
console.log("number is: "+num4);

console.log("Type is: "+typeof num4);//BigInt


console.log("-----------Non primitive-------------");

//Object
let user={};
console.log(typeof user);//object

//Array []
let studentData=[];
console.log(typeof studentData);//Object
































