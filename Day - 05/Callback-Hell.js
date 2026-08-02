/******************************************************************************
 * JavaScript Callback Hell
 *
 * Topics Covered:
 * 1. Simple Callback
 * 2. Multiple Callbacks
 * 3. Callback Hell (Pyramid of Doom)
 * 4. Problems with Callback Hell
 *
 * Note:
 * Run one example at a time.
 ******************************************************************************/

// ============================================================================
// Example 1: Simple Callback
// ============================================================================

/*
Definition:
A callback is a function passed as an argument to another function.

Flow:
greet()  --->  callback()
*/

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function thankYou() {
    console.log("Thank you for visiting.");
}

greet("Vinay", thankYou);

/*

Expected Output

Hello Vinay
Thank you for visiting.

Explanation

1. greet() executes first.
2. It prints "Hello Vinay".
3. Then it calls callback().
4. callback() refers to thankYou().
5. "Thank you for visiting." is printed.

*/


// ============================================================================
// Example 2: Multiple Callbacks
// ============================================================================

/*
Definition:
One callback starts another operation after the previous one finishes.

Flow:

Login
   │
   ▼
Profile
   │
   ▼
Dashboard
*/

function login(callback) {
    console.log("User Logged In");
    callback();
}

function getProfile(callback) {
    console.log("Profile Loaded");
    callback();
}

function showDashboard() {
    console.log("Dashboard Opened");
}

login(() => {
    getProfile(() => {
        showDashboard();
    });
});

/*

Expected Output

User Logged In
Profile Loaded
Dashboard Opened

Explanation

The second task starts only after the first task finishes.

*/


// ============================================================================
// Example 3: Callback Hell (Pyramid of Doom)
// ============================================================================

/*
Definition:
Callback Hell occurs when callbacks are nested inside one another.

As the number of asynchronous operations increases,
the code becomes deeply nested and difficult to read.
*/

function login(callback) {
    console.log("Login Successful");
    callback();
}

function getProfile(callback) {
    console.log("Profile Loaded");
    callback();
}

function getOrders(callback) {
    console.log("Orders Loaded");
    callback();
}

function makePayment(callback) {
    console.log("Payment Successful");
    callback();
}

login(() => {

    getProfile(() => {

        getOrders(() => {

            makePayment(() => {

                console.log("Order Completed");

            });

        });

    });

});

/*

Expected Output

Login Successful
Profile Loaded
Orders Loaded
Payment Successful
Order Completed

*/


// ============================================================================
// Visualization
// ============================================================================

/*

login()
   │
   ▼
getProfile()
      │
      ▼
getOrders()
          │
          ▼
makePayment()
               │
               ▼
Order Completed

*/


// ============================================================================
// Problems with Callback Hell
// ============================================================================

/*

❌ Difficult to Read

login(() => {
    getProfile(() => {
        getOrders(() => {
            makePayment(() => {

            });
        });
    });
});

-----------------------------------------------------

❌ Difficult to Debug

Finding an error in deeply nested callbacks becomes difficult.

-----------------------------------------------------

❌ Difficult to Maintain

Adding another asynchronous task increases nesting.

-----------------------------------------------------

❌ Pyramid of Doom

The code shifts further to the right with each nested callback,
forming a pyramid shape.

*/


// ============================================================================
// Why Do We Need Promises?
// ============================================================================

/*

Problem

Login
   │
   ▼
Profile
   │
   ▼
Orders
   │
   ▼
Payment
   │
   ▼
Order Completed

↓

Nested callbacks increase.

↓

Code becomes difficult to read.

↓

JavaScript introduced PROMISES
to solve this problem.

*/