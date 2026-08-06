# Expressions in JSX

> **Learning Objective**
>
> By the end of this chapter, you will understand how JavaScript expressions work inside JSX, what can and cannot be written inside JSX, and how to dynamically render content using variables, functions, arrays, objects, conditional operators, and modern JavaScript features.

---

# Table of Contents

1. What are Expressions in JSX?
2. Why Do We Use Expressions?
3. Curly Braces `{}` in JSX
4. Types of Expressions
5. Variables
6. Strings
7. Numbers
8. Arithmetic Expressions
9. Template Literals
10. Function Calls
11. Object Properties
12. Array Elements
13. Array Methods
14. Ternary Operator
15. Logical AND (`&&`)
16. Optional Chaining (`?.`)
17. Nullish Coalescing (`??`)
18. What Cannot Be Written Inside JSX?
19. Common Mistakes
20. Best Practices
21. Real World Examples
22. Summary
23. Interview Questions
24. Practice Questions

---

# What are Expressions in JSX?

An **expression** is any piece of JavaScript code that produces (evaluates to) a value.

JSX allows JavaScript expressions to be written inside **curly braces `{}`**.

Example

```jsx
const name = "Vinay";

function App() {
    return (
        <h1>Hello {name}</h1>
    );
}
```

Output

```
Hello Vinay
```

---

# Why Do We Use Expressions?

Without expressions, every value on the page would be static.

Static Example

```jsx
<h1>Hello Student</h1>
```

Dynamic Example

```jsx
const student = "Rahul";

<h1>Hello {student}</h1>
```

Output

```
Hello Rahul
```

Expressions make React applications dynamic.

---

# Curly Braces `{}`

Whenever React sees `{}`, it treats the content inside as JavaScript.

Example

```jsx
const course = "React";

<h2>{course}</h2>
```

Output

```
React
```

---

# Rules of Curly Braces

Inside `{}` you can write:

- Variables
- Numbers
- Strings
- Function Calls
- Arithmetic Expressions
- Ternary Operator
- Array Methods
- Object Properties
- Boolean Expressions

Inside `{}` you **cannot** write JavaScript statements like:

- if
- for
- while
- switch

We'll see why later.

---

# Variables

Variables are the most common expressions used in JSX.

```jsx
const name = "Rahul";

function App() {
    return (
        <h1>{name}</h1>
    );
}
```

Output

```
Rahul
```

---

# Multiple Variables

```jsx
const firstName = "Rahul";
const lastName = "Sharma";

function App() {
    return (
        <h1>
            {firstName} {lastName}
        </h1>
    );
}
```

Output

```
Rahul Sharma
```

---

# Strings

```jsx
{"Welcome to React"}
```

```jsx
<h1>{"Learning JSX"}</h1>
```

Output

```
Learning JSX
```

---

# Numbers

```jsx
const age = 25;

<h2>{age}</h2>
```

Output

```
25
```

---

# Arithmetic Expressions

Any mathematical expression can be written.

```jsx
<h2>{10 + 20}</h2>
```

Output

```
30
```

---

```jsx
const price = 500;
const quantity = 3;

<h2>Total = {price * quantity}</h2>
```

Output

```
Total = 1500
```

---

# Template Literals

```jsx
const firstName = "Rahul";
const lastName = "Sharma";

<h1>{`${firstName} ${lastName}`}</h1>
```

Output

```
Rahul Sharma
```

---

# Function Calls

Functions can be called inside JSX.

```jsx
function greet() {
    return "Welcome";
}

function App() {
    return (
        <h1>{greet()}</h1>
    );
}
```

Output

```
Welcome
```

---

# Function with Parameters

```jsx
function square(num) {
    return num * num;
}

<h2>{square(5)}</h2>
```

Output

```
25
```

---

# Object Properties

React cannot directly render objects.

But object properties can be rendered.

```jsx
const student = {
    name: "Rahul",
    age: 22
};

<h1>{student.name}</h1>
```

Output

```
Rahul
```

---

```jsx
<p>{student.age}</p>
```

Output

```
22
```

---

# Rendering an Entire Object

Wrong

```jsx
const student = {
    name: "Rahul"
};

<h1>{student}</h1>
```

Error

```
Objects are not valid as a React child.
```

Correct

```jsx
<h1>{student.name}</h1>
```

---

# Array Elements

Arrays can be accessed like normal JavaScript.

```jsx
const colors = ["Red", "Green", "Blue"];

<h2>{colors[1]}</h2>
```

Output

```
Green
```

---

# Joining Arrays

```jsx
const skills = ["HTML", "CSS", "JavaScript"];

<p>{skills.join(", ")}</p>
```

Output

```
HTML, CSS, JavaScript
```

---

# Using map()

The `map()` method is commonly used to render lists.

```jsx
const fruits = ["Apple", "Banana", "Mango"];

function App() {
    return (
        <ul>
            {fruits.map((fruit) => (
                <li>{fruit}</li>
            ))}
        </ul>
    );
}
```

Output

```
• Apple

• Banana

• Mango
```

> **Note:** React will show a warning because each list item should have a unique `key`. We'll cover `key` in detail in the Rendering Lists chapter.

Better version:

```jsx
<ul>
    {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ))}
</ul>
```

---

# Ternary Operator

The ternary operator is the preferred way to write conditional expressions in JSX.

Syntax

```javascript
condition ? value1 : value2
```

Example

```jsx
const isLoggedIn = true;

<h2>
    {isLoggedIn ? "Welcome" : "Please Login"}
</h2>
```

Output

```
Welcome
```

---

Another Example

```jsx
const age = 20;

<p>
    {age >= 18 ? "Adult" : "Minor"}
</p>
```

Output

```
Adult
```

---

# Logical AND (`&&`)

Used to render something only when a condition is true.

```jsx
const isAdmin = true;

function App() {
    return (
        <>
            {isAdmin && <button>Delete User</button>}
        </>
    );
}
```

Output

```
Delete User
```

If `isAdmin` is `false`, nothing is rendered.

---

# Optional Chaining (`?.`)

Prevents errors when accessing nested properties.

Without Optional Chaining

```jsx
const user = null;

<h1>{user.name}</h1>
```

Error

```
Cannot read properties of null
```

With Optional Chaining

```jsx
const user = null;

<h1>{user?.name}</h1>
```

Output

Nothing is rendered, and no error occurs.

---

Another Example

```jsx
const user = {
    profile: {
        name: "Vinay"
    }
};

<h1>{user?.profile?.name}</h1>
```

Output

```
Vinay
```

---

# Nullish Coalescing (`??`)

Provides a default value only when the value is `null` or `undefined`.

```jsx
const username = null;

<h2>{username ?? "Guest"}</h2>
```

Output

```
Guest
```

---

Example

```jsx
const username = "Rahul";

<h2>{username ?? "Guest"}</h2>
```

Output

```
Rahul
```

---

# Combining Expressions

```jsx
const user = {
    name: "Rahul",
    age: 24
};

<h1>
    {user.name} ({user.age})
</h1>
```

Output

```
Rahul (24)
```

---

# What Cannot Be Written Inside JSX?

JSX accepts **expressions**, not **statements**.

---

## Wrong

```jsx
{
    if (true) {
        return "Hello";
    }
}
```

Error

---

## Correct

```jsx
{
    true ? "Hello" : "Bye"
}
```

---

## Wrong

```jsx
{
    for(let i = 0; i < 5; i++) {

    }
}
```

---

Instead, use

```jsx
array.map()
```

---

# Why Can't We Use if or for?

Because:

- `if` is a **statement**
- `for` is a **statement**
- JSX only accepts **expressions**

A quick way to remember:

- **Expression → Produces a value ✅**
- **Statement → Performs an action ❌**

---

# Common Mistakes

## Rendering Objects

Wrong

```jsx
<h1>{user}</h1>
```

Correct

```jsx
<h1>{user.name}</h1>
```

---

## Calling Functions Incorrectly

Wrong

```jsx
<h1>{greet}</h1>
```

Correct

```jsx
<h1>{greet()}</h1>
```

---

## Using if Statement

Wrong

```jsx
{
    if(isLoggedIn){

    }
}
```

Correct

```jsx
{
    isLoggedIn ? "Welcome" : "Login"
}
```

---

## Forgetting `key` in `map()`

Wrong

```jsx
{items.map(item => (
    <li>{item}</li>
))}
```

Better

```jsx
{items.map((item, index) => (
    <li key={index}>{item}</li>
))}
```

---

# Best Practices

- Keep expressions simple and readable.
- Avoid writing complex business logic directly inside JSX.
- Use helper functions for lengthy calculations.
- Use optional chaining for nested objects.
- Use `??` when providing default values.
- Prefer `map()` for rendering lists.
- Use the ternary operator for conditional rendering.
- Keep JSX clean by moving complex logic outside the `return` statement.

---

# Real World Example

```jsx
function App() {

    const user = {
        name: "Vinay",
        age: 32,
        city: "Indore"
    };

    const isLoggedIn = true;

    return (
        <>
            <h1>Welcome {user.name}</h1>

            <p>Age : {user.age}</p>

            <p>City : {user.city}</p>

            <h2>
                {isLoggedIn ? "Dashboard" : "Login"}
            </h2>
        </>
    );
}

export default App;
```

Output

```
Welcome Vinay

Age : 32

City : Indore

Dashboard
```

---

# Summary

- Expressions are JavaScript code that produce a value.
- JSX uses `{}` to embed JavaScript expressions.
- You can render variables, strings, numbers, function calls, object properties, arrays, and conditional expressions.
- `map()` is commonly used to render lists.
- Use the ternary operator and `&&` for conditional rendering.
- Use optional chaining (`?.`) to safely access nested properties.
- Use nullish coalescing (`??`) to provide default values.
- JSX does **not** allow JavaScript statements like `if`, `for`, or `while` directly inside `{}`.

---

# Interview Questions

### Beginner

1. What are expressions in JSX?
2. Why do we use curly braces `{}`?
3. Can you write JavaScript inside JSX?
4. Can you call functions inside JSX?
5. Can you display variables inside JSX?

---

### Intermediate

6. Explain the difference between expressions and statements.
7. Why can't we use `if` directly inside JSX?
8. Explain the use of the ternary operator in JSX.
9. What is the purpose of `&&` in JSX?
10. Why is `map()` commonly used in React?

---

### Advanced

11. Explain optional chaining with JSX.
12. What is nullish coalescing, and when should it be used?
13. Why can't React render a JavaScript object directly?
14. Explain how expressions improve dynamic UI rendering.
15. What are the best practices for writing expressions inside JSX?

---

# Practice Questions

### Question 1

Display your name using a variable.

---

### Question 2

Display the sum of two numbers.

---

### Question 3

Call a function that returns your college name.

---

### Question 4

Display the second element of an array.

---

### Question 5

Show **"Admin Panel"** only if `isAdmin` is `true`.

---

### Question 6

Display **"Guest"** if `username` is `null`.

---

### Question 7

Render a list of five programming languages using `map()`.

---

# Key Takeaways

- Curly braces `{}` allow JavaScript expressions inside JSX.
- JSX accepts **expressions**, not **statements**.
- Use variables, function calls, object properties, arrays, and operators to build dynamic UIs.
- Use `map()` for rendering lists, `&&` and the ternary operator for conditional rendering, and `?.` / `??` for safer data access.
- Keep expressions concise and move complex logic outside the JSX whenever possible.