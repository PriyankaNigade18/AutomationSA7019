/*
1.break:
------------ 
exit from switch and loop body

2.continue:
----------------
skip the match value and continue iteration upto true

3.return
----------------
to return outcome from method we use return keyword

*/


console.log("----------break----------");
for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
    {
        console.log(i);
        
    }
}
console.log("--------");

for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else
    {
        console.log(i);
        
    }
}

console.log("-----continue------");

for(let i=1;i<=10;i++)
{
    if(i===5)
    {
        continue;//skip the certain part of code and continue upto that iteration
    }else
    {
        console.log(i);
        
    }
}














