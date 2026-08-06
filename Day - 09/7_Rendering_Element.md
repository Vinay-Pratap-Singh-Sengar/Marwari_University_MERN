# Rendering Elements in React

> **Learning Objective**
>
> By the end of this chapter, you will understand how React renders elements, components, variables, arrays, objects, conditional content, and dynamic UI. You will also learn React's rendering process and best practices used in production applications.

---

# Table of Contents

1. What is Rendering?
2. How React Renders Elements
3. Rendering a Single Element
4. Rendering Multiple Elements
5. Rendering Variables
6. Rendering Numbers
7. Rendering Strings
8. Rendering Boolean Values
9. Rendering null and undefined
10. Rendering Objects
11. Rendering Arrays
12. Rendering Lists using map()
13. Rendering Components
14. Conditional Rendering
15. Dynamic Rendering
16. Rendering Nested Elements
17. Rendering Images
18. Rendering HTML (dangerouslySetInnerHTML)
19. Rendering Flow
20. Common Mistakes
21. Best Practices
22. Summary
23. Interview Questions
24. Practice Questions

---

# What is Rendering?

Rendering means displaying the UI on the browser.

Whenever React converts JSX into actual HTML visible to the user, it is called **Rendering**.

Example

```jsx
function App() {
    return (
        <h1>Hello React</h1>
    );
}
```

Browser Output

```
Hello React
```

React renders the `<h1>` element on the screen.

---

# Rendering Flow

```
JSX

↓

Babel

↓

React.createElement()

↓

React Element

↓

Virtual DOM

↓

ReactDOM

↓

Real DOM

↓

Browser Screen
```

---

# Rendering a Single Element

```jsx
function App() {
    return (
        <h1>Welcome Students</h1>
    );
}
```

Output

```
Welcome Students
```

---

# Rendering Multiple Elements

React components must return one root element.

```jsx
function App() {
    return (
        <>
            <h1>React</h1>
            <p>Learning Rendering</p>
            <button>Start</button>
        </>
    );
}
```

Output

```
React

Learning Rendering

[Start]
```

---

# Rendering Variables

```jsx
function App() {

    const name = "Vinay";

    return (
        <h1>Welcome {name}</h1>
    );

}
```

Output

```
Welcome Vinay
```

---

# Rendering Numbers

```jsx
function App() {

    const age = 32;

    return (
        <h2>Age : {age}</h2>
    );

}
```

Output

```
Age : 32
```

---

# Rendering Strings

```jsx
function App() {

    const course = "React";

    return (
        <h2>{course}</h2>
    );

}
```

Output

```
React
```

---

# Rendering Boolean Values

```jsx
function App() {

    const isAdmin = true;

    return (
        <h1>{isAdmin}</h1>
    );

}
```

Output

Nothing appears.

React ignores

- true
- false

---

Example

```jsx
<h1>{true}</h1>
```

Output

Nothing

---

# Rendering null

```jsx
<h1>{null}</h1>
```

Output

Nothing

---

# Rendering undefined

```jsx
<h1>{undefined}</h1>
```

Output

Nothing

---

# Rendering Objects

Wrong

```jsx
const user = {
    name: "Rahul"
};

<h1>{user}</h1>
```

Output

```
Error

Objects are not valid as a React child.
```

Correct

```jsx
<h1>{user.name}</h1>
```

Output

```
Rahul
```

---

# Rendering Arrays

React can render arrays of JSX elements.

```jsx
const fruits = ["Apple", "Banana", "Mango"];

function App() {
    return (
        <div>
            {fruits}
        </div>
    );
}
```

Output

```
AppleBananaMango
```

Notice there are no spaces or separators.

---

Better Example

```jsx
<p>{fruits.join(", ")}</p>
```

Output

```
Apple, Banana, Mango
```

---

# Rendering Lists using map()

The most common way to render lists.

```jsx
const students = [
    "Rahul",
    "Aman",
    "Priya"
];

function App() {

    return (

        <ul>

            {
                students.map((student) => (
                    <li>{student}</li>
                ))
            }

        </ul>

    );

}
```

Output

```
• Rahul

• Aman

• Priya
```

---

# Why key is Required?

React needs a unique identifier to track list items efficiently.

Wrong

```jsx
students.map(student =>

<li>{student}</li>

)
```

Correct

```jsx
students.map((student, index) =>

<li key={index}>{student}</li>

)
```

> **Best Practice:** Use a stable, unique ID from your data whenever possible. Using the array index as a key is acceptable only for static lists where items are never reordered, added, or removed.

---

# Rendering Objects inside map()

```jsx
const users = [

    {
        id: 1,
        name: "Rahul"
    },

    {
        id: 2,
        name: "Vinay"
    }

];

function App() {

    return (

        <ul>

            {
                users.map(user => (

                    <li key={user.id}>
                        {user.name}
                    </li>

                ))
            }

        </ul>

    );

}
```

Output

```
Rahul

Vinay
```

---

# Rendering Components

Component

```jsx
function Welcome() {

    return (
        <h2>Welcome Student</h2>
    );

}
```

App Component

```jsx
function App() {

    return (

        <>
            <Welcome />
            <Welcome />
            <Welcome />
        </>

    );

}
```

Output

```
Welcome Student

Welcome Student

Welcome Student
```

---

# Conditional Rendering

React often renders UI based on conditions.

Using Ternary Operator

```jsx
const isLoggedIn = true;

function App() {

    return (

        <h1>

            {
                isLoggedIn
                    ? "Dashboard"
                    : "Login"
            }

        </h1>

    );

}
```

Output

```
Dashboard
```

---

Using &&

```jsx
const isAdmin = true;

function App() {

    return (

        <>
            {
                isAdmin &&
                <button>
                    Delete User
                </button>
            }
        </>

    );

}
```

Output

```
Delete User
```

---

# Dynamic Rendering

```jsx
const products = [

    "Laptop",

    "Mouse",

    "Keyboard"

];

function App() {

    return (

        <>

            {
                products.map(product => (

                    <h2 key={product}>
                        {product}
                    </h2>

                ))
            }

        </>

    );

}
```

Output

```
Laptop

Mouse

Keyboard
```

---

# Rendering Nested Elements

```jsx
function App() {

    return (

        <div>

            <header>

                <h1>Company</h1>

            </header>

            <main>

                <section>

                    <p>Products</p>

                </section>

            </main>

        </div>

    );

}
```

---

# Rendering Images

```jsx
function App() {

    return (

        <img

            src="react.png"

            alt="React"

            width="200"

        />

    );

}
```

---

# Rendering Dynamic Images

```jsx
const image = "react.png";

<img

    src={image}

    alt="React"

/>
```

---

# Rendering HTML

Sometimes an API returns HTML.

Example

```jsx
const content = "<strong>Welcome</strong>";
```

React displays it as plain text by default.

To render raw HTML:

```jsx
<div
    dangerouslySetInnerHTML={{
        __html: content
    }}
/>
```

⚠️ **Warning:** Never render untrusted HTML. This can introduce Cross-Site Scripting (XSS) vulnerabilities. Only use `dangerouslySetInnerHTML` with sanitized or trusted content.

---

# Rendering Flow in React

```
Component

↓

Returns JSX

↓

Babel

↓

React Element

↓

Virtual DOM

↓

Diffing

↓

Real DOM

↓

Browser Updates
```

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

## Forgetting key

Wrong

```jsx
students.map(student =>

<li>{student}</li>

)
```

Correct

```jsx
students.map(student =>

<li key={student.id}>
    {student.name}
</li>

)
```

---

## Using for Loop inside JSX

Wrong

```jsx
{

for(

)

}
```

Use

```jsx
map()
```

---

## Using if Statement

Wrong

```jsx
{

if()

}
```

Use

```jsx
condition
?
value1
:
value2
```

---

# Best Practices

- Use `map()` to render lists.
- Always provide a stable and unique `key`.
- Do not render JavaScript objects directly.
- Keep rendering logic simple.
- Move complex calculations outside JSX.
- Prefer conditional rendering instead of hiding elements with CSS.
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary and only with trusted HTML.
- Break large UIs into reusable components.

---

# Real World Example

```jsx
function App() {

    const students = [

        {
            id: 1,
            name: "Rahul"
        },

        {
            id: 2,
            name: "Vinay"
        },

        {
            id: 3,
            name: "Priya"
        }

    ];

    return (

        <>

            <h1>Student List</h1>

            <ul>

                {
                    students.map(student => (

                        <li key={student.id}>

                            {student.name}

                        </li>

                    ))
                }

            </ul>

        </>

    );

}
```

Output

```
Student List

• Rahul

• Vinay

• Priya
```

---

# Summary

- Rendering means displaying UI in the browser.
- React renders JSX by converting it into React Elements and then updating the DOM.
- Variables, strings, numbers, arrays, and components can all be rendered.
- Objects cannot be rendered directly.
- Use `map()` for lists.
- Always use a unique `key` for list items.
- Use conditional rendering for dynamic UI.
- Keep rendering logic clean and maintainable.

---

# Interview Questions

## Beginner

1. What is rendering in React?
2. What can React render?
3. Can React render arrays?
4. Can React render objects?
5. Why do we use `map()`?

---

## Intermediate

6. Explain rendering flow in React.
7. Why is `key` required?
8. Difference between rendering arrays and objects.
9. Explain conditional rendering.
10. Why does React ignore `true`, `false`, `null`, and `undefined`?

---

## Advanced

11. How does React efficiently update rendered elements?
12. Why should keys be stable and unique?
13. What happens if keys change between renders?
14. Explain the role of the Virtual DOM during rendering.
15. When should `dangerouslySetInnerHTML` be used?

---

# Practice Questions

### Question 1

Render your name using a variable.

---

### Question 2

Render five fruits using `map()`.

---

### Question 3

Create a student list with

- id
- name

using `map()`.

---

### Question 4

Display **Dashboard** only if the user is logged in.

---

### Question 5

Render an image dynamically.

---

### Question 6

Create a reusable component named `Card` and render it three times.

---

# Key Takeaways

- Rendering is the process of displaying UI in the browser.
- React renders JSX through React Elements, the Virtual DOM, and finally the Real DOM.
- Use `map()` for lists and always provide stable keys.
- Render object properties instead of whole objects.
- Use conditional rendering to build dynamic user interfaces.
- Keep rendering code simple, reusable, and easy to maintain.