/****************************************************************************************
 * JavaScript Functions
 *
 * Topics Covered:
 * 1. Function Declaration
 * 2. Arrow Function
 * 3. Callback Function
 * 4. Higher Order Function (HOF)
 * 5. Different Ways to Pass Callback Functions
 * 6. IIFE (Immediately Invoked Function Expression)
 ****************************************************************************************/

// ============================================================================
// 1. Function Declaration (Normal Function)
// ============================================================================

// A Function Declaration is the traditional way of creating a function.
// It can be called before or after its declaration because of hoisting.

function add(a, b) {
    const sum = a + b;
    console.log("Sum:", sum);
}

// Function Call
add(10, 30);

// Output:
// Sum: 40



// ============================================================================
// 2. Arrow Function (ES6)
// ============================================================================

// Arrow Functions provide a shorter syntax for writing functions.

const addArrow = (a, b) => {
    const sum = a + b;
    console.log("Sum:", sum);
};

// Function Call
addArrow(10, 30);

// Output:
// Sum: 40



// ============================================================================
// 3. Callback Function
// ============================================================================

// A Callback Function is a function that is passed as an argument
// to another function.

// Callback Function
function greet() {
    return "Vinay";
}

// Higher Order Function
function hoc(callback) {
    const message = "Hello " + callback();
    console.log(message);
}

// Passing greet as a callback
hoc(greet);

// Output:
// Hello Vinay



// ============================================================================
// Understanding Callback vs Higher Order Function
// ============================================================================

// greet  -> Callback Function
// hoc    -> Higher Order Function (HOF)

/*
Definition:

Callback Function:
A function that is passed as an argument to another function.

Higher Order Function:
A function that accepts another function as an argument
or returns another function.
*/



// ============================================================================
// 4. Callback Using a Named Function
// ============================================================================

// Here the callback function has a name.

hoc(function greet() {
    return "Vinay";
});

// Output:
// Hello Vinay



// ============================================================================
// 5. Callback Using an Anonymous Function
// ============================================================================

// Anonymous Function = Function without a name

hoc(function () {
    return "Vinay";
});

// Output:
// Hello Vinay



// ============================================================================
// 6. Callback Using an Arrow Function
// ============================================================================

// Arrow Function can also be passed as a callback.

hoc(() => {
    return "Vinay";
});

// Output:
// Hello Vinay



// ============================================================================
// 7. Real-Life Example of Callback Function
// ============================================================================

// Imagine placing an online order.
// Once the payment is successful, a callback function is executed.

function orderPlaced(callback) {
    console.log("Order has been placed successfully.");
    callback();
}

function sendConfirmation() {
    console.log("Confirmation email sent.");
}

orderPlaced(sendConfirmation);

// Output:
// Order has been placed successfully.
// Confirmation email sent.



// ============================================================================
// 8. IIFE (Immediately Invoked Function Expression)
// ============================================================================

// An IIFE executes immediately after it is created.

// Syntax:
// (function () {
//     // code
// })();

(function () {
    console.log("This is an IIFE Function.");
})();

// Output:
// This is an IIFE Function.



// ============================================================================
// 9. Summary
// ============================================================================

/*

Function Declaration
--------------------
Traditional way of creating a function.

Arrow Function
--------------
Short syntax introduced in ES6.

Callback Function
-----------------
A function passed as an argument to another function.

Higher Order Function
---------------------
A function that accepts or returns another function.

IIFE
----
A function that executes immediately after it is created.

*/