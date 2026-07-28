/*
=====================================================================
                    JavaScript Placement Training
                              Day - 02
=====================================================================

Topics Covered:
1. Variables (var, let, const)
2. Scope (Block Scope & Function Scope)
3. Primitive Data Types
4. typeof Operator
5. Arrays
6. Array Traversal
7. Objects
8. Array Methods

Instructor : Vinay Pratap Singh Sengar
GitHub     : https://github.com/Vinay-Pratap-Singh-Sengar
=====================================================================
*/


// ===================================================================
// VARIABLES (var, let, const)
// ===================================================================

/*
=====================================================================
                         var vs let vs const
=====================================================================

Feature                 var         let         const
------------------------------------------------------------
Redeclare               ✔️          ❌           ❌
Update                  ✔️          ✔️           ❌
Scope                Function      Block       Block
Hoisting                ✔️          ✔️           ✔️
Temporal Dead Zone      ❌          ✔️           ✔️

=====================================================================
*/


// -------------------------------------------------------------------
// var
// Can be redeclared as well as updated.
// Scope : Function Scope
// -------------------------------------------------------------------

var a;              // Declaration
var a;              // Redeclaration

a = 10;             // Initialization
a = 20;             // Updation

console.log("Value of a :", a);


// -------------------------------------------------------------------
// let
// Cannot be redeclared.
// Can be updated.
// Scope : Block Scope
// -------------------------------------------------------------------

let b;

b = 12;
b = 30;

console.log("Value of b :", b);


// -------------------------------------------------------------------
// const
// Cannot be redeclared.
// Cannot be updated.
// Scope : Block Scope
// -------------------------------------------------------------------

const PI = 3.14;

console.log("Value of PI :", PI);




// ===================================================================
// BLOCK SCOPE
// ===================================================================

/*
A block is represented using curly braces { }.

Variables declared using let and const are accessible
only inside the block in which they are declared.
*/

let teacher = "Khan Sir";

{
    let teacher = "Rishav";
    console.log("Inside Block :", teacher);
}

console.log("Outside Block :", teacher);


// var is NOT block scoped

{
    var marks = 20;
}

console.log("Marks :", marks);




// ===================================================================
// FUNCTION SCOPE
// ===================================================================

/*
Variables declared using var are Function Scoped.

They can be accessed anywhere inside the function,
but cannot be accessed outside the function.
*/

function demoFunction() {

    var course = "JavaScript";
    let duration = "2 Months";
    const trainer = "Vinay";

    console.log("\nInside Function");

    console.log(course);
    console.log(duration);
    console.log(trainer);

}

demoFunction();


// These statements will produce an error because
// the variables are declared inside the function.

// console.log(course);
// console.log(duration);
// console.log(trainer);




// ===================================================================
// PRIMITIVE DATA TYPES
// ===================================================================

/*
JavaScript has 7 Primitive Data Types

N N B B S S U

1. Number
2. Null
3. Boolean
4. BigInt
5. String
6. Symbol
7. Undefined
*/


let name = "Vinay";
console.log(typeof name);


const score = 70;
console.log(typeof score);


let isPlaced = false;
console.log(typeof isPlaced);


let attendance = null;
console.log(typeof attendance);      // object (JavaScript Bug)


let city;
console.log(typeof city);


let mobileNumber = 9876543210123456789n;
console.log(typeof mobileNumber);


let id = Symbol("Student");
console.log(typeof id);




// ===================================================================
// ARRAYS
// ===================================================================

/*
Array is a collection of multiple values stored inside a single variable.
*/

let nums = [10, 20, 30, 40, 50, "Vinay", false];


// Accessing Array Elements

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);
// console.log(nums[4]);




// ===================================================================
// ARRAY TRAVERSAL
// ===================================================================


// Using for loop

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }


// Printing Alternate Elements

// for (let i = 0; i < nums.length; i += 2) {
//     console.log(nums[i]);
// }


// Using for...of loop

// for (let value of nums) {
//     console.log(value);
// }




// ===================================================================
// OBJECTS
// ===================================================================

/*
Object is a named collection of data.

Objects store data in the form of

Key : Value
*/

const obj = {

    "first name": "Vinay",
    age: 28,
    address: "Datia"

};


// Accessing Object Properties

console.log(obj["first name"]);
console.log(obj.age);


// Traversing an Object

for (let key in obj) {

    console.log("Key   :", key);
    console.log("Value :", obj[key]);

}




// ===================================================================
// ARRAY METHODS
// ===================================================================

let arr = [10, 20, 30, 40];


// -------------------------------------------------
// push()
// Adds one or more elements at the end of an array.
// -------------------------------------------------

arr.push(50);
arr.push(70);


// -------------------------------------------------
// pop()
// Removes the last element from an array.
// -------------------------------------------------

arr.pop();


// -------------------------------------------------
// shift()
// Removes the first element from an array.
// -------------------------------------------------

arr.shift();


// -------------------------------------------------
// unshift()
// Adds one or more elements at the beginning.
// -------------------------------------------------

arr.unshift(5);


console.log(arr);




// ===================================================================
// IMPORTANT ARRAY METHODS
// ===================================================================

/*

push()       -> Add element at the end.

pop()        -> Remove the last element.

shift()      -> Remove the first element.

unshift()    -> Add element at the beginning.

length       -> Returns the size of the array.

*/


// ===================================================================
// PRACTICE QUESTIONS
// ===================================================================

/*

Q1. Create an array of five student names.

Q2. Print all array elements using a for loop.

Q3. Print alternate elements of an array.

Q4. Print all array elements using a for...of loop.

Q5. Create an object that stores your personal details.

Q6. Traverse the object using a for...in loop.

Q7. Perform push(), pop(), shift() and unshift() on an array.

Q8. Demonstrate the difference between var, let and const.

Q9. Write one example of Block Scope.

Q10. Write one example of Function Scope.

*/



// ===================================================================
//                            HOMEWORK
// ===================================================================

/*

1. Revise all the concepts covered in today's class.

2. Practice all the programs demonstrated during the session.

3. Explore and understand the following important Array Methods:

   - push()
   - pop()
   - shift()
   - unshift()
   - splice()
   - slice()
   - concat()
   - indexOf()
   - includes()
   - reverse()
   - sort()
   - join()
   - map()
   - filter()
   - reduce()
   - find()
   - forEach()

4. Explore and understand the following important Object Methods:

   - Object.keys()
   - Object.values()
   - Object.entries()
   - Object.assign()
   - Object.freeze()
   - Object.seal()
   - Object.hasOwn()
   - hasOwnProperty()

5. Read about the difference between Primitive and Non-Primitive Data Types.

6. Be prepared to explain any one Array Method and one Object Method in the next class.

*/
