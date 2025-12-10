/*

Encapsulation
============
Wrapping of data and functions together in single unit is called Encapsulation

What is Purpose:
--------------------
Data hhiding

Real time example
==================
capsule,class,ATM...etc

How to implement in Js
=============================
Data should be private data and declare public method
to access/modify private data
public methods : getters and setters

getters: get the data
setteres : set the data


*/

class Emp
{
    //public data
    id;
    name;
//private data use #
#salary=40000;//private variable

constructor(id,name)
{
this.id=id;
this.name=name;

}

//for private data setter() and getter()

setSalary(sal)
{
this.#salary=sal;
}


getSalary()
{
    return this.#salary;
}

}

//Object
let e1=new Emp(111,"Jay");
console.log(e1.id);
console.log(e1.name);
//console.log(e1.#salary);//SyntaxError: Private field '#salary' must be declared in an enclosing class

//e1.setSalary(50000);
console.log(e1.getSalary());
