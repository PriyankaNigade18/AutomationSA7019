/*

Polymorphism
==================
One thing in many forms we can access that is polymorphism

What is Purpose
=====================
Method Reusability

Real time example
=========================
communication,Payment,Ola/uber

Types
===========
1.compile time (Method Overloadig)
-----------------------
Method will be overloaded only that method have same name and
different signature

Signature
---------------
1.number of parameter
2.type of parameter
3.order of parameter

In js as Js is interpreted programming language
It means we have only interpreter to run code we dont
have compiler phase and thats the reason Js does not support
compile time polymorphism


2.Run time(Method Overriding)
====================
Method can be override when two classes are in Is-A relation
and both the classes should have  same name method and same signature

Child class method override parent class method

*/

//method Oveloding

class Test
{

    login()
    {
        console.log("Login with default data");
        
    }

    login(un,psw)
    {
        console.log("Login with username: "+un);
        console.log("Login with Password: "+psw);
        
        
    }

    login(data)
    {
        console.log("data is calling....");
        
    }


}

let t1=new Test();
t1.login("admin","test123");


console.log("--------------Run time polymorphism------");

class Parent
{
    color()
    {
        console.log("Red");
        
    }
}

class Child extends Parent
{
    color()
    {
        console.log("Blue");
        
    }
}

//object
//parent object
let p1=new Parent();
p1.color();//red

//child object
let c1=new Child();
c1.color();//blue
