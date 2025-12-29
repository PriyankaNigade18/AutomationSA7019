
/*
let response=fetch("https://api.restful-api.dev/objects/7");
console.log(response);
*/

//Some methods returns you promise then handle it with async function and await keyword

async function test()
{

let response=await fetch("https://api.restful-api.dev/objects/7");
console.log(response);
}

test();
