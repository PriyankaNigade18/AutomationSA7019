/*
Any real time entity which has state and function/property that is object

In Js Oject is key : value pair

Ways
==============
1.Literal Object
2.Class level object
3.Constructor function
4.Object.create() prototype based object


*/
console.log("--------------1.Object Literal-------");
/*
Object is Key value pair data
Keys are always String and value is real data
*/
let person={};
console.log(person);
console.log(typeof person);//Object

console.log("--------------");

let user={
            uid:101,
            uname:"Sarang",
            age:27,
            isActive:true
        }

console.log(user);
console.log(typeof user);//object
//single properties
console.log(user.isActive);//true
console.log(user.uname);//Sarang

console.log("------Iterate----");
//for...in loop iterates over keys and use for  object
for(let u in user)
{
    console.log("for Key: "+u+" Value is: "+user[u]);
    
}


console.log("--------------2.Class level object------");

class Fruit
{
    name;
    price;

    constructor(n,p)
    {
        this.name=n;
        this.price=p;
    }

    display()
    {
        console.log("Fruit name is: "+this.name);
        console.log("Fruit price is: "+this.price);
                
    }

}

//Object
let f1=new Fruit("Apple",350);
f1.display();

    

console.log("--------------3.Constrcutor Function------");

/*
Constrcutor function is special function use to create and initialize
object in js

*/

function EmployeeData(empId,empName)
{
    this.id=empId;
    this.name=empName;

   this.print=()=>
    {
        console.log(this.id);
        console.log(this.name);
        
        
    }


}

let e1=new EmployeeData(111,'Sani');
e1.print();

console.log("--------------4.Prototype Based object------");
//Object.create()

let student={
    id:101,
    sname:"Kirti"
}
//Creates an object that has the specified prototype or that has null prototype.
let s1=Object.create(student);
console.log(s1.id);
console.log(s1.sname);
s1.id=222;
console.log(s1.id);









