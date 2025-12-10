/*
Prototype is Object 
we can add new property or method to Object using prototype
*/


class EmployeeData
{
    constructor(id,name)
    {
        this.eid=id;
        this.ename=name;
    }



}

//prototype
EmployeeData.prototype.language="Javascript";

//object
let e1=new EmployeeData(101,'Amit');
//e1.language="JavaScript";
console.log("Employee id is: "+e1.eid+" name is: "+e1.ename+" Language is: "+e1.language);

console.log("---------");

let e2=new EmployeeData(102,'Kiran');

console.log("Employee id is: "+e2.eid+" name is: "+e2.ename+" Language is: "+e2.language);

console.log("----------------");


let fname="Sachin      ";
console.log("lenght of fname: "+fname.length);//12
console.log("Actual lenght is: "+fname.trim().length);//6

String.prototype.trueLenght=function(){
                        return this.trim().length;
                                }

let res=fname.trueLenght();
console.log(res);


