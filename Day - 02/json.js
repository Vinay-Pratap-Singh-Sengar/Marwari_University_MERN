// ===================================================================
// JSON (JavaScript Object Notation)
// ===================================================================

/*
JSON stands for JavaScript Object Notation.

It is a lightweight format used to store and exchange data between
a client and a server.

JSON Syntax Rules:

1. Data is stored in Key : Value pairs.
2. Keys must always be enclosed in double quotes (" ").
3. Values can be:
   - String
   - Number
   - Boolean
   - Array
   - Object
   - null
4. Properties are separated by commas.
5. The entire JSON data is enclosed within curly braces { }.
*/


// Example of a JSON Object

const studentJSON = `{
    "name": "Ayush",
    "age": 33,
    "isMarried": false
}`;

console.log(studentJSON);


/*
Difference Between JavaScript Object and JSON

JavaScript Object
-----------------
const student = {
    name: "Ayush",
    age: 33,
    isMarried: false
};

JSON
----
{
    "name": "Ayush",
    "age": 33,
    "isMarried": false
}

Note:
✔ JavaScript Object keys may or may not use quotes.
✔ JSON keys must always use double quotes.
✔ JSON is generally used for data exchange between applications.
*/