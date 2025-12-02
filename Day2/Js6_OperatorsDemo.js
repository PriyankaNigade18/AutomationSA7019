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














