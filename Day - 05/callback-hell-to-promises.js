/******************************************************************************
 * JavaScript Promises
 * ----------------------------------------------------------------------------
 * Topic:
 * Solving Callback Hell using Promises
 *
 * Definition:
 * A Promise is an object that represents the eventual completion (success)
 * or failure of an asynchronous operation.
 *
 * Why Promises?
 * Callback Hell makes code deeply nested and difficult to read.
 * Promises provide a cleaner and more maintainable way to handle
 * asynchronous operations.
 *
 * Note:
 * Run one example at a time.
 ******************************************************************************/

// ============================================================================
// Example 1: Callback Hell (Problem)
// ============================================================================

/*
Definition:
When multiple asynchronous operations depend on each other,
callbacks become deeply nested. This is known as Callback Hell
or the Pyramid of Doom.
*/

// function login(callback) {
//     console.log("Login Successful");
//     callback();
// }

// function getProfile(callback) {
//     console.log("Profile Loaded");
//     callback();
// }

// function getOrders(callback) {
//     console.log("Orders Loaded");
//     callback();
// }

// function makePayment(callback) {
//     console.log("Payment Successful");
//     callback();
// }

// login(() => {

//     getProfile(() => {

//         getOrders(() => {

//             makePayment(() => {

//                 console.log("Order Completed");

//             });

//         });

//     });

// });

/*

Expected Output

Login Successful
Profile Loaded
Orders Loaded
Payment Successful
Order Completed

Problems

❌ Difficult to Read
❌ Difficult to Debug
❌ Difficult to Maintain
❌ Pyramid of Doom

*/


// ============================================================================
// Example 2: Solving Callback Hell using Promises
// ============================================================================

/*
Definition:
Instead of passing callbacks, each function returns a Promise.
The next operation starts using .then().
*/

function login() {

    return new Promise((resolve) => {

        console.log("Login Successful");

        resolve();

    });

}

function getProfile() {

    return new Promise((resolve) => {

        console.log("Profile Loaded");

        resolve();

    });

}

function getOrders() {

    return new Promise((resolve) => {

        console.log("Orders Loaded");

        resolve();

    });

}

function makePayment() {

    return new Promise((resolve) => {

        console.log("Payment Successful");

        resolve();

    });

}

login()

.then(() => {

    return getProfile();

})

.then(() => {

    return getOrders();

})

.then(() => {

    return makePayment();

})

.then(() => {

    console.log("Order Completed");

})

.catch((error) => {

    console.log(error);

});

/*

Expected Output

Login Successful
Profile Loaded
Orders Loaded
Payment Successful
Order Completed

Explanation

1. login() returns a Promise.
2. After login is completed, getProfile() executes.
3. After profile is loaded, getOrders() executes.
4. After orders are loaded, makePayment() executes.
5. Finally, "Order Completed" is displayed.

*/


// ============================================================================
// Example 3: Promise Chaining (Cleaner Syntax)
// ============================================================================

/*
Definition:
Each .then() returns a new Promise, allowing multiple asynchronous
operations to be chained together.
*/

login()
    .then(getProfile)
    .then(getOrders)
    .then(makePayment)
    .then(() => {
        console.log("Order Completed");
    })
    .catch((error) => {
        console.log(error);
    });

/*

Expected Output

Login Successful
Profile Loaded
Orders Loaded
Payment Successful
Order Completed

Advantages

✔ Easy to Read
✔ Easy to Maintain
✔ Easy to Debug
✔ No Callback Hell

*/


// ============================================================================
// Example 4: Real Asynchronous Example using setTimeout()
// ============================================================================

/*
Definition:
Real asynchronous tasks take time to complete.
Here we simulate that delay using setTimeout().
*/

// function login() {

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             console.log("Login Successful");

//             resolve();

//         }, 1000);

//     });

// }

// function getProfile() {

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             console.log("Profile Loaded");

//             resolve();

//         }, 1000);

//     });

// }

// function getOrders() {

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             console.log("Orders Loaded");

//             resolve();

//         }, 1000);

//     });

// }

// function makePayment() {

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             console.log("Payment Successful");

//             resolve();

//         }, 1000);

//     });

// }

// login()
//     .then(getProfile)
//     .then(getOrders)
//     .then(makePayment)
//     .then(() => {
//         console.log("Order Completed");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/*

Expected Output

(after 1 second)

Login Successful

(after 1 second)

Profile Loaded

(after 1 second)

Orders Loaded

(after 1 second)

Payment Successful

Order Completed

*/


// ============================================================================
// Summary
// ============================================================================

/*

Callback Hell

login(() => {
    getProfile(() => {
        getOrders(() => {
            makePayment(() => {
                console.log("Order Completed");
            });
        });
    });
});

------------------------------------------------------------

Promise Chaining

login()
    .then(getProfile)
    .then(getOrders)
    .then(makePayment)
    .then(() => {
        console.log("Order Completed");
    })
    .catch((error) => {
        console.log(error);
    });

------------------------------------------------------------

Advantages of Promises

✔ Cleaner Code
✔ Better Readability
✔ Easier Debugging
✔ Better Error Handling
✔ Solves Callback Hell

*/