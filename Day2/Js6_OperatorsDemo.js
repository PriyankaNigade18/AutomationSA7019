console.log("--------Arithmetic Operators-------");

let num1=10,num2=5;
console.log("Addition is: "+(num1+num2));
console.log("Subtraction is: "+(num1-num2));
console.log("Division is: "+(num1/num2));
console.log("Multiplication is: "+(num1*num2));
console.log("Modulus is: "+(num1%num2));

console.log("-----Unary Operator----");
/*
Increment(++)
---------------------
1.postIncrement(a++)       2.PreIncrement(++a)
a++= a=a+1

Decrement(--)
---------------
1.PostDecremnet(a--)     2.Predecrement(--a)
a--= a=a-1

*/

//postIncreament: Post operation will not perform immediate action
//when you reuse the variable you will get result
let a=100;
console.log(a);//100
console.log(a++);//100
console.log(a);//101


let b=200;
console.log(b);//200
console.log(++b);//201


let c=30;
console.log(c);//30
console.log(--c);//29


let d=90;
console.log(d);//90
console.log(d--);//90
console.log(d);//89


let r=189;
let s=r++;//first value will assign then increment
console.log(r);//190
console.log(s);//189


let u=56;
let v=u++;
console.log(u);//57
console.log(v);//56


let i=90;
let j=++i;//first value increment then assign
console.log(i);//91
console.log(j);//91

let e=78;
let f=e--;
console.log(e);//77
console.log(f);//78


let x=678;
let y=--x;
console.log(x);//677
console.log(y);//677

console.log("---------Interview Questions--------");

console.log(90/0);//Infinity
console.log(-90/0);//-Infinity
console.log("Hello"/0);//Nan (Not a number)
console.log(undefined/8);//NaN
console.log(0/0);//Nan

console.log("----Relational Operators------");
/*
< ,<=, >, >=   (loose equality) == & ===(strict Eqauality) !=(not equal to)

Test Data
---------------
i=j=91 u=57 v=56 r=190  s=189 x=y=677
*/

console.log("< less than: "+(v<r));//true
console.log(x<r);//false
console.log("<= less than equal to: "+(x<=y));//true
console.log(i<=v);//false
console.log("> greater than : "+(i>u));//true
console.log(" >= greater than equal to: "+(s>=j));//true
console.log(v>=s);//false

console.log(x==y);
console.log(x===y);

/*

loose equality ==
--------------------
will convert the type and then compare values
It always follow type coercion(type casting)

strict equality ===
-------------------------
Here no coversion and original values tested..

*/

console.log(5=='5');//true '5'coerced into 5
console.log(undefined==null);//true

//correct result
console.log(5==='5');//false

console.log(undefined===null);//false

console.log(x!=y);//false

console.log("-----Logical opertaors------");
/*
    c1      c2         &&(AND)      ||(OR)    !(NOT)
    ----------------------------------------------
    true    true        true        true
    true    false       false       true
    false   true        false       true    
    false   false       false       false

Test Data
---------------
i=j=91 u=57 v=56 r=190  s=189 x=y=677

*/

console.log("----&&-------");

console.log(x===y && v<r);//true
console.log(x===y && v>=s);//false
console.log(v===s && v<s);//false
console.log(v===s && x>y);//false

console.log("----||-------");

console.log(x===y || v<r);//true
console.log(x===y || v>=s);//true
console.log(v===s || v<s);//true
console.log(v===s || x>y);//false

console.log("----!(Not)-----");

console.log(i===j);//true

console.log(!(i===j));//false



























































