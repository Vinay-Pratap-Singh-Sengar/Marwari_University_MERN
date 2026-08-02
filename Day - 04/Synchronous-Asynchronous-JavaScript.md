# 📘 JavaScript Synchronous and Asynchronous Programming

JavaScript is a **single-threaded** programming language. It executes one statement at a time. However, with the help of the **Event Loop**, **Web APIs**, and **Promises**, JavaScript can perform asynchronous operations.

---

# 📑 Table of Contents

1. Synchronous Programming
2. Asynchronous Programming
3. setTimeout()
4. setInterval()
5. clearInterval()
6. Async Function
7. Await Keyword
8. Difference Between Synchronous and Asynchronous Programming
9. Interview Questions
10. Practice Questions

---

# 1. Synchronous Programming

## Definition

In **Synchronous Programming**, code executes **line by line**.

The next statement waits until the previous statement has finished executing.

## Flow

```
Line 1
   │
   ▼
Line 2
   │
   ▼
Line 3
   │
   ▼
Line 4
```

---

## Example

```javascript
console.log("Start");

const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

console.log(add(5, 3));
console.log(sub(5, 3));

console.log("End");
```

### Output

```
Start
8
2
End
```

---

## Explanation

1. "Start" is printed.
2. `add()` executes.
3. `sub()` executes.
4. "End" is printed.

Everything executes in sequence.

---

# 2. Asynchronous Programming

## Definition

In **Asynchronous Programming**, some operations do **not block** the execution of the remaining code.

Instead, JavaScript continues executing the next statements while waiting for asynchronous tasks to complete.

---

## Example

```javascript
console.log("Line 1");

setTimeout(() => {
    console.log("Line 2");
}, 0);

console.log("Line 3");
```

### Output

```
Line 1
Line 3
Line 2
```

---

## Why?

Even though the delay is **0 milliseconds**, `setTimeout()` is an asynchronous function.

It is placed in the **Web API** and later moved to the **Callback Queue**.

Only after the Call Stack becomes empty does JavaScript execute the callback.

---

## Execution Flow

```
Main Program

↓

console.log("Line 1")

↓

setTimeout()

↓

console.log("Line 3")

↓

Call Stack Empty

↓

Execute Callback

↓

console.log("Line 2")
```

---

# 3. setTimeout()

## Definition

`setTimeout()` executes a function **only once** after a specified delay.

## Syntax

```javascript
setTimeout(function () {
    // code
}, timeInMilliseconds);
```

---

## Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
```

### Output

```
Start
End
Executed after 2 seconds
```

---

# 4. setInterval()

## Definition

`setInterval()` repeatedly executes a function after a fixed interval.

## Syntax

```javascript
const id = setInterval(function () {
    // code
}, interval);
```

---

## Example

```javascript
const timer = setInterval(() => {
    console.log("Hello");
}, 2000);
```

### Output

```
Hello
Hello
Hello
...
```

The function keeps executing every **2 seconds** until it is stopped.

---

# 5. clearInterval()

`clearInterval()` is used to stop a running interval.

## Example

```javascript
const timer = setInterval(() => {
    console.log("Hello");
}, 1000);

clearInterval(timer);
```

In this example, the interval is cleared immediately, so nothing is printed.

---

## Complete Example

```javascript
console.log("Line 1");

setTimeout(() => {
    console.log("Line 2");
}, 0);

const timer = setInterval(() => {
    console.log("Hi");
}, 2000);

clearInterval(timer);

console.log("Line 3");
```

### Output

```
Line 1
Line 3
Line 2
```

---

# 6. Async Function

## Definition

An **async function** always returns a **Promise**.

The `async` keyword allows us to use `await` inside the function.

## Syntax

```javascript
async function functionName() {

}
```

---

## Example

```javascript
async function greet() {
    return "Hello";
}

greet().then(console.log);
```

### Output

```
Hello
```

---

# 7. Await Keyword

## Definition

The `await` keyword pauses the execution of an **async function** until a Promise is resolved.

> **Important:** `await` only waits for **Promises**. Using `await` with normal values or `console.log()` does not make the code asynchronous.

---

## Your Example

```javascript
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
```

### Output

```
Line 5
Line 1
Line 2
Line 6
Line 7
Line 3
Line 4
```

---

## Why?

```javascript
await console.log("Line 2");
```

`console.log()` is **not a Promise**.

It executes immediately.

However, `await` still causes the remaining part of the async function to continue in a later microtask, so `Line 3` and `Line 4` are printed after the synchronous code (`Line 6` and `Line 7`).

> **Better Example**

```javascript
function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

async function demo() {
    console.log("Start");

    await delay();

    console.log("After 2 Seconds");
}

demo();
```

Output

```
Start

(2 seconds)

After 2 Seconds
```

---

# Difference Between Synchronous and Asynchronous Programming

| Synchronous | Asynchronous |
|-------------|--------------|
| Executes line by line | Does not block execution |
| Waits for each task | Continues executing other tasks |
| Simple execution | Uses Event Loop |
| Blocking | Non-blocking |

---

# Interview Questions

### 1. What is synchronous programming?

### 2. What is asynchronous programming?

### 3. Why does `setTimeout(..., 0)` execute after synchronous code?

### 4. Difference between `setTimeout()` and `setInterval()`?

### 5. What is `clearInterval()`?

### 6. What does the `async` keyword do?

### 7. What does the `await` keyword do?

### 8. Can `await` be used outside an async function?

### 9. Does an async function always return a Promise?

### 10. What is the Event Loop?

---

# Practice Questions

1. Print "Hello" after 3 seconds using `setTimeout()`.
2. Print numbers from 1 to 5 every second using `setInterval()`.
3. Stop an interval after 5 seconds.
4. Create an async function that returns your name.
5. Create a Promise that resolves after 2 seconds and use `await` to consume it.
6. Predict the output of:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

7. Predict the output:

```javascript
async function test() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

test();

console.log("3");
```

---

# Summary

- ✅ Synchronous code executes one statement at a time.
- ✅ Asynchronous code allows other tasks to continue while waiting.
- ✅ `setTimeout()` runs a function once after a delay.
- ✅ `setInterval()` runs a function repeatedly after a fixed interval.
- ✅ `clearInterval()` stops an interval.
- ✅ `async` functions always return a Promise.
- ✅ `await` pauses execution until a Promise is resolved.
- ✅ JavaScript handles asynchronous operations using the Event Loop.