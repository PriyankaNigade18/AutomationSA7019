/*
JSON String object into Javascript:parse()

Javscript Object into JSONString:stringify()

*/

//Javascript object
let user={
    id:101,
    fname:"Jay"

}

console.log(user);
console.log(typeof user);//object

//convert js object into JSON string
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let jsonstring=JSON.stringify(user);
console.log(jsonstring);
console.log(typeof jsonstring);



console.log("---------------------");


//JSON string 
let jsonData=`{
   "id": "7",
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}`;


console.log(jsonData);
console.log(typeof jsonData);//String

//json string convert into Javscript object
//Converts a JavaScript Object Notation (JSON) string into an object.
let jsObject=JSON.parse(jsonData);
console.log(jsObject);
console.log(typeof jsObject);


//year
console.log(jsObject.data.year);
console.log(jsObject.id);

