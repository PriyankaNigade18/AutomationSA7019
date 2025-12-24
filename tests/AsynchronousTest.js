
/*
let response=fetch("https://api.restful-api.dev/objects/7");
console.log(response);
//Promise { <pending> }*/

//Some methods returns you promise then handle it with async function and await keyword

async function apitest()
{
let response=await fetch("https://api.restful-api.dev/objects/7");
console.log(response);

}

//call
apitest();


