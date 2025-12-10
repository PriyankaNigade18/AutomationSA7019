
/*

this keyword:
================
it is used to access current class variable and methods
this keywrod always use as current class instance

Method and Functions is different in js
Methods always belong to class

function can not be method but method can be function


*/
class StudentData
{
    //global data
     id;
     fname;

     constructor(sid,sname)
     {
        this.id=sid;
        this.fname=sname;
     }
  
//SyntaxError: A class may only have one constructor
    //  constructor(sid)
    //  {
    //     this.id=sid;
        
    //  }

     //method
    print()
     {
        console.log("Student id is: "+this.id);
        console.log("Student name is: "+this.fname);
        
     }

}

//object 
let s1=new StudentData(101,"Sneha");
s1.print();

console.log("-----------------");

let s2=new StudentData(201,'Sarang');
s2.print();
console.log("-----------------");

let s3=new StudentData(301);
s3.print();
console.log("-----------------");

let s4=new StudentData();
s4.print();