/******************************************************************************
 * JavaScript Synchronous and Asynchronous Programming
 * ----------------------------------------------------------------------------
 * Topics Covered:
 * 1. Synchronous Programming
 * 2. Asynchronous Programming (setTimeout)
 * 3. setTimeout()
 * 4. setInterval()
 * 5. clearInterval()
 * 6. Async Function
 * 7. await (Understanding Execution Flow)
 * 8. await with Promise
 * 9. Real-Life Example
 * 10. Interview Output Prediction
 *
 * Note:
 * Run one example at a time. Uncomment the example you want to execute.
 ******************************************************************************/

/***********************************************************************
 * Example 1 : Synchronous Programming
 *
 * Definition:
 * In synchronous programming, JavaScript executes code one line at a time.
 * The next statement waits until the previous statement finishes.
 ***********************************************************************/

console.log("Start");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

console.log("Addition :", add(10, 5));
console.log("Subtraction :", sub(10, 5));

console.log("End");

/*
Output

Start
Addition : 15
Subtraction : 5
End
*/


/***********************************************************************
 * Example 2 : Asynchronous Programming
 *
 * setTimeout() executes a function after a specified delay.
 * JavaScript does not wait for setTimeout() to complete.
 ***********************************************************************/

console.log("Line 1");

setTimeout(() => {
    console.log("Line 2");
}, 0);

console.log("Line 3");

/*
Output

Line 1
Line 3
Line 2
*/


/***********************************************************************
 * Example 3 : setTimeout()
 *
 * Executes only once after the specified delay.
 ***********************************************************************/

console.log("Program Started");

setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);

console.log("Program Ended");

/*
Output

Program Started
Program Ended

(after 3 seconds)

Executed after 3 seconds
*/


/***********************************************************************
 * Example 4 : setInterval()
 *
 * Executes repeatedly after every given interval.
 ***********************************************************************/

const timer = setInterval(() => {
    console.log("Hello Students");
}, 2000);

/*
Output

Hello Students
Hello Students
Hello Students
...
*/


/***********************************************************************
 * Example 5 : clearInterval()
 *
 * Stops the interval after 5 seconds.
 ***********************************************************************/

const timer = setInterval(() => {
    console.log("Learning JavaScript...");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Interval Stopped");
}, 5000);

/*
Output

Learning JavaScript...
Learning JavaScript...
Learning JavaScript...
Learning JavaScript...
Learning JavaScript...

Interval Stopped
*/


/***********************************************************************
 * Example 6 : Async Function
 *
 * An async function always returns a Promise.
 ***********************************************************************/

async function greet() {
    return "Welcome Students!";
}

greet().then((message) => {
    console.log(message);
});

/*
Output

Welcome Students!
*/


/***********************************************************************
 * Example 7 : Understanding async & await
 *
 * NOTE:
 * console.log() is NOT a Promise.
 * This example is only to understand execution flow.
 ***********************************************************************/

console.log("Line 5");

async function sum() {

    console.log("Line 1");

    await console.log("Line 2");

    console.log("Line 3");

    console.log("Line 4");

}

sum();

console.log("Line 6");
console.log("Line 7");

/*
Output

Line 5
Line 1
Line 2
Line 6
Line 7
Line 3
Line 4
*/


/***********************************************************************
 * Example 8 : await with Promise
 *
 * This is the correct way to use await.
 ***********************************************************************/

function wait() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

async function demo() {

    console.log("Start");

    await wait();

    console.log("After 2 Seconds");

}

demo();

console.log("Program Continues");

/*
Output

Start
Program Continues

(after 2 seconds)

After 2 Seconds
*/


/***********************************************************************
 * Example 9 : Real-Life Example
 *
 * Ordering food is asynchronous.
 ***********************************************************************/

function orderFood() {

    return new Promise((resolve) => {

        console.log("Food Ordered");

        setTimeout(() => {
            resolve("Food Delivered");
        }, 3000);

    });

}

async function customer() {

    console.log("Customer Waiting");

    const message = await orderFood();

    console.log(message);

}

customer();

console.log("Watching YouTube while waiting...");

/*
Output

Customer Waiting
Food Ordered
Watching YouTube while waiting...

(after 3 seconds)

Food Delivered
*/


// ============================================================================
// Example 10: Interview Question
// ============================================================================

/*
Predict the output before running the code.
*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

/*
Expected Output

A
D
C
B

Explanation

1. Synchronous code executes first.
2. Promise callbacks (Microtasks) execute next.
3. setTimeout() callbacks (Macrotasks) execute last.
*/


// ============================================================================
// End of File
// ============================================================================

/*
Summary

✔ Synchronous Programming
✔ Asynchronous Programming
✔ setTimeout()
✔ setInterval()
✔ clearInterval()
✔ Async Function
✔ await
✔ Promise
✔ Event Loop
✔ Interview Questions
*/