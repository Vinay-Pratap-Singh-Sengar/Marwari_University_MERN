/**
 * ===========================================================
 * JavaScript Event Loop - Output Based Questions
 * ===========================================================
 *
 * Topics Covered:
 * ✔ Callback Functions
 * ✔ Promises
 * ✔ Promise Chaining
 * ✔ Async / Await
 * ✔ Event Loop
 * ✔ Call Stack
 * ✔ Web APIs
 * ✔ Callback Queue (Macrotask Queue)
 * ✔ Microtask Queue
 *
 * Instructions:
 * Predict the output before running each question.
 * Focus on understanding the Event Loop rather than memorizing.
 *
 * ===========================================================
 */

// --------------------------------------------------
// Question 01
// Concept:
// Synchronous Code → Promise (Microtask) → setTimeout (Macrotask)
// --------------------------------------------------

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
// });

// console.log("D");


// // --------------------------------------------------
// // Question 02
// // Concept:
// // Multiple Promise callbacks execute before setTimeout.
// // --------------------------------------------------

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// Promise.resolve().then(() => {
//     console.log(3);
// });

// Promise.resolve().then(() => {
//     console.log(4);
// });

// console.log(5);


// // --------------------------------------------------
// // Question 03
// // Concept:
// // async function execution with await.
// // Code before await is synchronous.
// // --------------------------------------------------

// console.log("Start");

// async function test() {
//     console.log("Inside");
//     await Promise.resolve();
//     console.log("After Await");
// }

// test();

// console.log("End");


// // --------------------------------------------------
// // Question 04
// // Concept:
// // Multiple await statements create multiple microtasks.
// // --------------------------------------------------

// async function demo() {
//     console.log(1);
//     await Promise.resolve();
//     console.log(2);
//     await Promise.resolve();
//     console.log(3);
// }

// demo();

// console.log(4);


// // --------------------------------------------------
// // Question 05
// // Concept:
// // Promise chaining.
// // Each .then() executes after the previous one.
// // --------------------------------------------------

// console.log("A");

// Promise.resolve()
// .then(() => {
//     console.log("B");
// })
// .then(() => {
//     console.log("C");
// });

// console.log("D");


// // --------------------------------------------------
// // Question 06
// // Concept:
// // Promise inside setTimeout.
// // Microtasks execute before moving to the next macrotask.
// // --------------------------------------------------

// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout 1");
//     Promise.resolve().then(() => {
//         console.log("Promise");
//     });
// }, 0);

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);
// console.log("End");


// // --------------------------------------------------
// // Question 07
// // Concept:
// // Multiple Promise chains share the Microtask Queue.
// // --------------------------------------------------

// Promise.resolve()
// .then(() => {
//     console.log(1);
// })
// .then(() => {
//     console.log(2);
// });

// Promise.resolve()
// .then(() => {
//     console.log(3);
// });

// console.log(4);


// // --------------------------------------------------
// // Question 08
// // Concept:
// // Multiple timers with different delays.
// // Microtasks always execute before timers.
// // --------------------------------------------------

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// },100);

// setTimeout(() => {
//     console.log("C");
// },0);

// Promise.resolve().then(() => {
//     console.log("D");
// });

// console.log("E");


// // --------------------------------------------------
// // Question 09
// // Concept:
// // Async function starts synchronously.
// // Code after await goes to Microtask Queue.
// // --------------------------------------------------

// async function test(){
//     console.log("1");
//     await Promise.resolve();
//     console.log("2");
// }
// console.log("3");
// test();
// console.log("4");


// // --------------------------------------------------
// // Question 10
// // Concept:
// // Async functions always return a Promise.
// // --------------------------------------------------

// async function demo(){
//     console.log("A");
//     return "Hello";
// }
// demo().then((value)=>{
//     console.log(value);
// });
// console.log("B");

// // --------------------------------------------------
// // Question 11
// // Concept:
// // Returning a Promise from .then().
// // Promise chaining waits for returned Promise.
// // --------------------------------------------------

// console.log("Start");
// Promise.resolve()
// .then(()=>{
//     console.log("One");
//     return Promise.resolve();
// })
// .then(()=>{
//     console.log("Two");
// });
// console.log("End");


// // --------------------------------------------------
// // Question 12
// // Concept:
// // setTimeout created inside a Promise callback.
// // --------------------------------------------------

// console.log("A");
// setTimeout(()=>{
//     console.log("B");
// },0);
// Promise.resolve().then(()=>{
//     console.log("C");
//     setTimeout(()=>{
//         console.log("D");
//     },0);
// });
// console.log("E");


// // --------------------------------------------------
// // Question 13
// // Concept:
// // Returning a value from Promise.
// // Value becomes available to next .then().
// // --------------------------------------------------

// console.log(1);
// Promise.resolve()
// .then(()=>{
//     console.log(2);
//     return Promise.resolve(3);
// })
// .then((value)=>{
//     console.log(value);
// });
// console.log(4);


// // --------------------------------------------------
// // Question 14
// // Concept:
// // setTimeout scheduled after await.
// // --------------------------------------------------

// async function test(){
//     console.log("A");
//     await Promise.resolve();
//     console.log("B");
//     setTimeout(()=>{
//         console.log("C");
//     },0);

// }
// test();
// console.log("D");


// // --------------------------------------------------
// // Question 15
// // Concept:
// // Promise inside timer callback.
// // Event Loop executes microtasks before next timer.
// // --------------------------------------------------

// console.log("Start");
// setTimeout(()=>{
//     console.log("Timeout");
//     Promise.resolve().then(()=>{
//         console.log("Promise");
//     });
//     console.log("End Timeout");
// },0);
// Promise.resolve().then(()=>{
//     console.log("Main Promise");
// });
// console.log("Finish");


// // --------------------------------------------------
// // Question 16
// // Concept:
// // Multiple Promise chaining.
// // Every .then() creates another microtask.
// // --------------------------------------------------

// Promise.resolve()
// .then(()=>{
//     console.log(1);
//     return Promise.resolve();
// })
// .then(()=>{
//     console.log(2);
//     return Promise.resolve();
// })
// .then(()=>{
//     console.log(3);
// });
// console.log(4);


// // --------------------------------------------------
// // Question 17
// // Concept:
// // async/await mixed with Promise.then().
// // Observe Microtask execution order.
// // --------------------------------------------------

// console.log("A");
// async function test(){
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
//     await Promise.resolve();
//     console.log("D");
// }
// test();
// Promise.resolve().then(()=>{
//     console.log("E");
// });
// console.log("F");


// // --------------------------------------------------
// // Question 18
// // Concept:
// // setTimeout inside Promise and Promise inside setTimeout.
// // --------------------------------------------------

// console.log(1);
// setTimeout(()=>{
//     console.log(2);
//     Promise.resolve().then(()=>{
//         console.log(3);
//     });
// },0);

// Promise.resolve().then(()=>{
//     console.log(4);
//     setTimeout(()=>{
//         console.log(5);
//     },0);
// });
// console.log(6);


// // --------------------------------------------------
// // Question 19
// // Concept:
// // Awaiting another async function.
// // --------------------------------------------------

// async function first(){
//     console.log("A");
//     await second();
//     console.log("B");
// }

// async function second(){
//     console.log("C");
// }

// first();
// console.log("D");


// // --------------------------------------------------
// // Question 20
// // Concept:
// // Complete Event Loop challenge.
// // Combines Promises, async behavior and multiple timers.
// // --------------------------------------------------

// console.log("Start");
// setTimeout(()=>{
//     console.log("Timeout 1");
//     Promise.resolve().then(()=>{
//         console.log("Promise 1");
//     });
// },0);

// Promise.resolve()
// .then(()=>{
//     console.log("Promise 2");
//     setTimeout(()=>{
//         console.log("Timeout 2");
//     },0);
//     return Promise.resolve();
// })
// .then(()=>{
//     console.log("Promise 3");
// });
// console.log("End");


