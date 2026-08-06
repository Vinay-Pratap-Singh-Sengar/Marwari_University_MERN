# JSX Syntax

> **Learning Objective**
>
> By the end of this chapter, you will understand how to write JSX correctly, follow JSX syntax rules, avoid common mistakes, and write clean, readable React code.

---

# Table of Contents

1. What is JSX Syntax?
2. Writing Your First JSX
3. JSX is an Expression
4. JSX Structure
5. Parent Element Rule
6. Self Closing Tags
7. Closing Tags
8. Nesting Elements
9. Writing JavaScript Inside JSX
10. Comments in JSX
11. Multiline JSX
12. Formatting JSX
13. JSX Attributes
14. Inline Styles
15. JSX Naming Conventions
16. JSX Syntax Rules
17. Common Mistakes
18. Best Practices
19. Summary
20. Interview Questions
21. Practice Questions

---

# What is JSX Syntax?

JSX syntax is a set of rules used to write HTML-like code inside JavaScript.

Although JSX looks like HTML, it follows JavaScript rules because JSX is converted into JavaScript before execution.

Example

```jsx
function App() {
    return (
        <h1>Hello React</h1>
    );
}
```

---

# Your First JSX Program

```jsx
function App() {
    return (
        <h1>Welcome to React</h1>
    );
}

export default App;
```

Output

```
Welcome to React
```

---

# JSX is an Expression

JSX itself is an expression.

This means JSX can be:

- Assigned to a variable
- Passed as an argument
- Returned from a function
- Stored inside an array
- Passed as props

Example

```jsx
const heading = <h1>Hello Students</h1>;

function App() {
    return heading;
}
```

---

# Parent Element Rule

One of the most important JSX rules.

Every JSX expression must return **only one parent element**.

✅ Correct

```jsx
function App() {
    return (
        <div>
            <h1>Hello</h1>
            <p>Learning React</p>
        </div>
    );
}
```

---

❌ Wrong

```jsx
function App() {
    return (
        <h1>Hello</h1>
        <p>Learning React</p>
    );
}
```

Error

```
Adjacent JSX elements must be wrapped
in an enclosing tag.
```

---

# Why Does React Require One Parent?

React components return **one value**.

Since JSX becomes JavaScript, the component must return a single root element.

Think of it like returning one object from a function.

---

# Solution 1

Use a `<div>`.

```jsx
return (
    <div>

        <h1>Hello</h1>

        <p>React</p>

    </div>
);
```

---

# Solution 2 (Recommended)

Use Fragment.

```jsx
return (
    <>

        <h1>Hello</h1>

        <p>React</p>

    </>
);
```

Fragments do not create an extra HTML element.

---

# Self Closing Tags

In HTML, some tags may be written without a closing slash.

Example

```html
<img>
```

In JSX, every self-closing tag **must** end with `/`.

Correct

```jsx
<img src="logo.png" />
```

```jsx
<input />
```

```jsx
<br />
```

```jsx
<hr />
```

```jsx
<meta />
```

```jsx
<link />
```

---

Wrong

```jsx
<img>
```

```jsx
<input>
```

React will throw an error.

---

# Closing Tags

Every opening tag must have a closing tag.

Correct

```jsx
<h1>Hello</h1>
```

Correct

```jsx
<div>

</div>
```

Wrong

```jsx
<h1>Hello
```

---

# Nesting Elements

JSX supports nesting just like HTML.

Example

```jsx
<div>

    <h1>Welcome</h1>

    <p>Learning JSX</p>

    <button>Login</button>

</div>
```

Output

```
Welcome

Learning JSX

Login Button
```

---

# Deep Nesting

```jsx
<div>

    <section>

        <article>

            <h1>Title</h1>

        </article>

    </section>

</div>
```

Nested JSX is converted into nested `React.createElement()` calls.

---

# JavaScript Inside JSX

JavaScript expressions are written inside **curly braces `{}`**.

Example

```jsx
const name = "Rahul";

function App() {
    return (
        <h1>Hello {name}</h1>
    );
}
```

Output

```
Hello Rahul
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

# Mathematical Expressions

```jsx
<h2>{10 + 20}</h2>
```

Output

```
30
```

---

# Function Calls

```jsx
function greet() {
    return "Welcome";
}

<h1>{greet()}</h1>
```

Output

```
Welcome
```

---

# Boolean Values

```jsx
const isAdmin = true;

<h1>{isAdmin}</h1>
```

Output

Nothing appears because React does not render `true` or `false` directly.

---

# Comments in JSX

Normal JavaScript comments **do not work inside JSX**.

Wrong

```jsx
<div>

    // Hello

</div>
```

---

Correct

```jsx
<div>

    {/* Hello */}

</div>
```

---

Multiple Line Comment

```jsx
<div>

    {/*
        Welcome
        To
        React
    */}

</div>
```

---

# Multiline JSX

For multiple lines, wrap JSX inside parentheses.

Correct

```jsx
return (

    <div>

        <h1>Hello</h1>

    </div>

);
```

---

# Formatting JSX

Good formatting improves readability.

Good

```jsx
<div>

    <h1>React</h1>

    <button>Login</button>

</div>
```

Avoid writing everything on one line unless it's very small.

---

# JSX Attributes

Attributes work similarly to HTML but with some differences.

Example

```jsx
<img
    src="logo.png"
    alt="Logo"
/>
```

---

Button Example

```jsx
<button disabled>

    Submit

</button>
```

---

# Inline Styles

In HTML

```html
<h1 style="color:red">
```

In JSX

```jsx
<h1 style={{ color: "red" }}>
    Hello
</h1>
```

Why?

Because the `style` attribute expects a JavaScript object.

---

Multiple Styles

```jsx
<h1
    style={{
        color: "blue",
        backgroundColor: "yellow",
        fontSize: "30px"
    }}
>
    React
</h1>
```

---

# JSX Naming Conventions

React follows camelCase for many DOM properties.

Correct

```jsx
className
```

Wrong

```jsx
class
```

---

Correct

```jsx
htmlFor
```

Wrong

```jsx
for
```

---

Correct

```jsx
tabIndex
```

Wrong

```jsx
tabindex
```

---

Correct

```jsx
onClick
```

Wrong

```jsx
onclick
```

---

# JSX Syntax Rules

## Rule 1

Return one parent element.

---

## Rule 2

Close every tag.

---

## Rule 3

Use self-closing tags correctly.

---

## Rule 4

Use camelCase for many DOM property names.

Examples

- className
- htmlFor
- tabIndex
- readOnly

---

## Rule 5

JavaScript goes inside `{}`.

---

## Rule 6

Comments use

```jsx
{/* Comment */}
```

---

## Rule 7

Attribute values can be strings or JavaScript expressions.

Example

```jsx
<img src={imagePath} />
```

---

## Rule 8

Component names start with a Capital Letter.

Correct

```jsx
<Login />
```

Wrong

```jsx
<login />
```

Lowercase tags are treated as HTML elements.

---

## Rule 9

Strings use quotes.

```jsx
title="React"
```

JavaScript expressions use braces.

```jsx
title={pageTitle}
```

---

# Common Mistakes

## Missing Parent

```jsx
return (
    <h1>Hello</h1>
    <p>React</p>
);
```

---

## Missing Closing Tag

```jsx
<h1>Hello
```

---

## Using class Instead of className

Wrong

```jsx
<h1 class="title">
```

Correct

```jsx
<h1 className="title">
```

---

## Using for Instead of htmlFor

Wrong

```jsx
<label for="name">
```

Correct

```jsx
<label htmlFor="name">
```

---

## Using Quotes for JavaScript

Wrong

```jsx
<img src="imagePath" />
```

Correct

```jsx
<img src={imagePath} />
```

---

# Best Practices

- Keep JSX clean and readable.
- Avoid deeply nested JSX when possible.
- Split large JSX into smaller components.
- Use Fragments instead of unnecessary `<div>` elements.
- Use meaningful component names.
- Write one component for one responsibility.
- Format JSX consistently.
- Keep JavaScript logic outside JSX when it becomes complex.

---

# Real World Example

```jsx
function App() {
    const user = "Vinay";

    return (
        <>
            <header>
                <h1>Welcome {user}</h1>
            </header>

            <main>
                <p>Learning JSX Syntax</p>

                <button>Start Learning</button>
            </main>
        </>
    );
}

export default App;
```

---

# Summary

- JSX is an HTML-like syntax used in React.
- Every JSX expression must have one parent element.
- Every tag must be closed.
- Self-closing tags require `/>`.
- JavaScript expressions are written inside `{}`.
- Comments use `{/* ... */}`.
- JSX uses camelCase for many DOM property names.
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for`.
- Keep JSX clean, readable, and reusable.

---

# Interview Questions

### Beginner

1. What is JSX syntax?
2. Why must JSX have one parent element?
3. What are self-closing tags?
4. Why do we use curly braces `{}` in JSX?
5. How do you write comments in JSX?

---

### Intermediate

6. Why does JSX use `className` instead of `class`?
7. Explain the difference between HTML syntax and JSX syntax.
8. Why does the `style` attribute use an object?
9. What happens if you return multiple sibling elements?
10. Why do component names start with a capital letter?

---

### Advanced

11. Why does React require a single root element?
12. What is the difference between HTML attributes and JSX attributes?
13. Explain how JSX syntax is validated before rendering.
14. Why is JSX considered an expression?
15. What are common JSX syntax errors and how do you fix them?

---

# Practice Questions

### Question 1

Fix the following JSX.

```jsx
<h1>Hello
```

---

### Question 2

Correct the following code.

```jsx
<label for="email">

<input>
```

---

### Question 3

Write JSX to display:

```
Welcome

React

Start Button
```

---

### Question 4

Write JSX using Fragment instead of a `<div>`.

---

### Question 5

Create a component that displays:

- Student Name
- Course
- College
- Button

using proper JSX syntax.

---

# Key Takeaways

- JSX follows JavaScript syntax, not HTML syntax.
- Every component should return a single parent element.
- Use `className`, `htmlFor`, and camelCase property names.
- Write JavaScript expressions inside `{}`.
- Keep JSX clean, readable, and modular.
- Following JSX syntax rules helps prevent common React errors and makes your code easier to maintain.