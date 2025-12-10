/*
Inheritance
=================
an Acquaring properties of one class into other class is Inheritance

What is purpose of Inheritance
==============================
1.To avoid code duplication
2.To reuse code
3.To achieve run time polymorphism (Method Overriding)


Real time example
======================
Parent child relation

How to implement in Js
======================
we use extends keyword

Parent class can access only parent properties
Child class can access Parent + child properties

Types
===============
1.Single level Inheritance
2.Multi level Inheritance
3.Heirachical Inheritance

In Js we can not inplement
--------------------------
4.Multiple 
5.Hybrid


*/

class Vehical
{
    breakFeature()
    {
        console.log("Vehical.....break()");
        
    }
}

class Car extends Vehical
{
    price()
    {
        console.log("Car.....1L");
        
    }
    start()
    {
        console.log("Car......start()");
        
    }

    refule()
    {
        console.log("Car.......refule()");
        
    }


    stop()
    {
        console.log("Car......stop()");
        
    }
}

class BMW extends Car//single level Inheritance
{
    autoEngine()
    {
        console.log("BMW.......autoEngine()");
        
    }

     price()
    {
        console.log("BMw.....70L");
        
    }

}

class Audi extends Car//Hierarchical inheritance
{
    autoGear()
    {
        console.log("Audi.....autoGear()");
        
    }
     price()
    {
        console.log("Audi.....50L");
        
    }
}


//Object
//Scenario1: Create Parent class Object=>Parent properties
let c1=new Car();
c1.start();//individaul method
c1.refule();//individaul method
c1.stop();//individaul method
c1.breakFeature();
c1.price();
//c1.autoEngine();//TypeError: c1.autoEngine is not a function

console.log("--------------------");

//scenario2: Child class Object=>Parent + child
let b1=new BMW();
b1.start();//inherited method
b1.refule();//inherited method
b1.stop();//inherited method
b1.autoEngine();//individaul method
b1.breakFeature();
b1.price();

console.log("--------------------");

let a1=new Audi();
a1.start();//inherited method
a1.refule();//inherited method
a1.stop();//inherited method
a1.autoGear();////individaul method
a1.breakFeature();
a1.price();







