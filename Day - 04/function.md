# 📘 JavaScript Functions

> Functions are one of the most important concepts in JavaScript. They allow us to write reusable, modular, and maintainable code.

---

## 📑 Table of Contents

- [Learning Objectives](#-learning-objectives)
- [What is a Function?](#1-what-is-a-function)
- [Function Declaration](#2-function-declaration)
- [Arrow Function](#3-arrow-function-es6)
- [Functions are First-Class Citizens](#4-functions-are-first-class-citizens)
- [Callback Function](#5-callback-function)
- [Higher Order Function](#6-higher-order-function-hof)
- [Different Ways to Write Callback Functions](#7-different-ways-to-write-callback-functions)
- [IIFE (Immediately Invoked Function Expression)](#8-iife-immediately-invoked-function-expression)
- [Comparison Table](#9-comparison-table)
- [Common Mistakes](#10-common-mistakes)
- [Interview Questions](#11-interview-questions)
- [Practice Questions](#12-practice-questions)
- [Summary](#13-summary)

---

# 🎯 Learning Objectives

After completing this chapter, you will be able to:

- Understand what a function is.
- Create functions using different syntaxes.
- Understand callback functions.
- Understand Higher Order Functions.
- Learn different ways of writing callback functions.
- Understand IIFE.
- Solve interview questions related to functions.

---

# 1. What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we write it once inside a function and call it whenever required.

### ✅ Why do we use Functions?

- Reuse code
- Reduce code duplication
- Improve readability
- Make debugging easier
- Divide large programs into smaller modules

---

## 🌍 Real-Life Example

Imagine a **coffee machine**.

You simply press the button.

```
Press Button
      │
      ▼
 Coffee Machine
      │
      ▼
   Coffee Ready
```

Similarly,

```javascript
makeCoffee();
```

You don't need to know the internal steps. You only call the function.

---

# 2. Function Declaration

A Function Declaration is the traditional way of creating a function.

## Syntax

```javascript
function functionName(parameters) {
    // code
}
```

## Example

```javascript
function add(a, b) {
    let sum = a + b;
    return sum;
}

console.log(add(10, 20));
```

### Output

```
30
```

### Explanation

- `function` → Keyword
- `add` → Function Name
- `a, b` → Parameters
- `return` → Returns the result

---

## 💡 Key Points

✔ Function declarations are **hoisted**.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

---

# 3. Arrow Function (ES6)

Arrow Functions were introduced in **ES6** to write cleaner and shorter code.

## Syntax

```javascript
const functionName = (parameters) => {
    // code
};
```

## Example

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

### Output

```
30
```

### Short Syntax

```javascript
const add = (a, b) => a + b;
```

---

## 💡 Key Points

- Short syntax
- Popular in React.js
- Does not have its own `this`

---

# 4. Functions are First-Class Citizens

In JavaScript, functions behave like values.

They can be:

- Stored in variables
- Passed as arguments
- Returned from another function

## Example

```javascript
function greet() {
    return "Vinay";
}

const message = greet;

console.log(message());
```

### Output

```
Vinay
```

---

# 5. Callback Function

## Definition

A **callback function** is a function passed as an argument to another function.

## Example

```javascript
function greet() {
    return "Vinay";
}

function welcome(callback) {
    console.log("Hello " + callback());
}

welcome(greet);
```

### Output

```
Hello Vinay
```

---

## Why do we write `greet` instead of `greet()`?

Correct

```javascript
welcome(greet);
```

Incorrect

```javascript
welcome(greet());
```

### Explanation

```text
greet
```

Pass the function.

```text
greet()
```

Execute the function immediately.

---

# 6. Higher Order Function (HOF)

## Definition

A **Higher Order Function** is a function that:

- Accepts another function as an argument.
- Returns another function.

## Example

```javascript
function greet() {
    return "Vinay";
}

function welcome(callback) {
    console.log("Hello " + callback());
}

welcome(greet);
```

### Identification

```
welcome()  → Higher Order Function

greet()    → Callback Function
```

---

## Real-World Examples

Many JavaScript methods are Higher Order Functions.

```javascript
map()

filter()

reduce()

forEach()

setTimeout()

setInterval()
```

### Example

```javascript
const numbers = [10, 20, 30];

numbers.forEach(function (num) {
    console.log(num);
});
```

Here,

```
forEach() → Higher Order Function

function(num) {} → Callback Function
```

---

# 7. Different Ways to Write Callback Functions

## 1️⃣ Separate Function

```javascript
function greet() {
    return "Vinay";
}

welcome(greet);
```

---

## 2️⃣ Named Function

```javascript
welcome(function greet() {
    return "Vinay";
});
```

---

## 3️⃣ Anonymous Function

```javascript
welcome(function () {
    return "Vinay";
});
```

---

## 4️⃣ Arrow Function

```javascript
welcome(() => {
    return "Vinay";
});
```

---

# 8. IIFE (Immediately Invoked Function Expression)

## Definition

An **IIFE** is a function that executes immediately after it is created.

## Syntax

```javascript
(function () {
    console.log("This is an IIFE.");
})();
```

### Output

```
This is an IIFE.
```

---

## Why do we use IIFE?

- Executes immediately
- Creates a private scope
- Avoids global variable pollution

---

# 9. Comparison Table

| Concept | Description |
|----------|-------------|
| Function | Reusable block of code |
| Arrow Function | Short syntax introduced in ES6 |
| Callback Function | Function passed as an argument |
| Higher Order Function | Function that accepts or returns another function |
| IIFE | Executes immediately after creation |

---

# 10. Common Mistakes

### ❌ Mistake 1

```javascript
welcome(greet());
```

### ✅ Correct

```javascript
welcome(greet);
```

---

### ❌ Mistake 2

Forgetting to return a value.

```javascript
function add(a, b) {
    a + b;
}
```

### ✅ Correct

```javascript
function add(a, b) {
    return a + b;
}
```

---

# 11. Interview Questions

### Q1. What is a Function?

### Q2. Difference between Function Declaration and Arrow Function?

### Q3. What is a Callback Function?

### Q4. What is a Higher Order Function?

### Q5. Why do we write `greet` instead of `greet()`?

### Q6. What is an IIFE?

### Q7. Give real-life examples of Higher Order Functions.

---

# 12. Practice Questions

### Beginner

1. Create a function to add two numbers.
2. Create a function to subtract two numbers.
3. Convert a normal function into an arrow function.

### Intermediate

4. Create a callback function.
5. Create a Higher Order Function.
6. Pass an anonymous function as a callback.
7. Pass an arrow function as a callback.

### Advanced

8. Use `forEach()` with a callback.
9. Use `map()` to double every number.
10. Use `filter()` to print even numbers.

---

# 13. Summary

✔ Functions help us write reusable code.

✔ Arrow Functions provide a shorter syntax.

✔ Functions are first-class citizens in JavaScript.

✔ A Callback Function is passed as an argument.

✔ A Higher Order Function receives or returns another function.

✔ IIFE executes immediately after it is created.

---

## 📚 Next Topic

➡️ **Arrays in JavaScript**