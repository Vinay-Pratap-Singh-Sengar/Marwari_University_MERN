# JSX Rules

> **Learning Objective**
>
> By the end of this chapter, you will understand all the important JSX rules that every React developer must follow. These rules are essential for writing valid, readable, and maintainable React applications.

---

# Table of Contents

1. Why JSX Has Rules
2. Rule 1 - Return Only One Parent Element
3. Rule 2 - Close Every Tag
4. Rule 3 - Self-Closing Tags
5. Rule 4 - Use camelCase for DOM Properties
6. Rule 5 - Use `className` Instead of `class`
7. Rule 6 - Use `htmlFor` Instead of `for`
8. Rule 7 - JavaScript Goes Inside `{}` Only
9. Rule 8 - JSX Accepts Expressions, Not Statements
10. Rule 9 - Component Names Must Start with a Capital Letter
11. Rule 10 - Event Names Use camelCase
12. Rule 11 - Inline Styles Must Be Objects
13. Rule 12 - Comments in JSX
14. Rule 13 - Always Use `key` in Lists
15. Rule 14 - Don't Modify Props
16. Rule 15 - Return `null` to Render Nothing
17. Rule 16 - Escape Special Characters
18. Rule 17 - Avoid Duplicate Attributes
19. Rule 18 - Keep JSX Readable
20. Common Mistakes
21. Best Practices
22. Summary
23. Interview Questions
24. Practice Questions

---

# Why JSX Has Rules?

JSX is **not HTML**.

It is a syntax extension for JavaScript that is converted into JavaScript before execution.

Because JSX becomes JavaScript, it must follow specific syntax rules.

Ignoring these rules results in compilation errors or unexpected behavior.

---

# Rule 1 - Return Only One Parent Element

Every React component must return **one root element**.

✅ Correct

```jsx
function App() {
    return (
        <div>
            <h1>Hello</h1>
            <p>Welcome</p>
        </div>
    );
}
```

Also Correct

```jsx
function App() {
    return (
        <>
            <h1>Hello</h1>
            <p>Welcome</p>
        </>
    );
}
```

❌ Wrong

```jsx
function App() {
    return (
        <h1>Hello</h1>
        <p>Welcome</p>
    );
}
```

---

# Rule 2 - Close Every Tag

Every JSX tag must be properly closed.

✅ Correct

```jsx
<h1>Hello</h1>
```

```jsx
<div></div>
```

❌ Wrong

```jsx
<h1>Hello
```

---

# Rule 3 - Self-Closing Tags

Self-closing elements must end with `/>`.

✅ Correct

```jsx
<img src="logo.png" alt="Logo" />

<input />

<br />

<hr />
```

❌ Wrong

```jsx
<img>

<input>
```

---

# Rule 4 - Use camelCase for DOM Properties

Many DOM property names use camelCase in JSX.

| HTML | JSX |
|------|------|
| tabindex | tabIndex |
| readonly | readOnly |
| maxlength | maxLength |
| colspan | colSpan |
| rowspan | rowSpan |

Example

```jsx
<input maxLength={20} />

<button tabIndex={1}>
    Submit
</button>
```

---

# Rule 5 - Use `className` Instead of `class`

`class` is a reserved keyword in JavaScript.

Use

```jsx
<h1 className="title">
```

Not

```jsx
<h1 class="title">
```

---

# Rule 6 - Use `htmlFor` Instead of `for`

HTML

```html
<label for="email">
```

JSX

```jsx
<label htmlFor="email">
```

---

# Rule 7 - JavaScript Goes Inside `{}`

To display dynamic values, wrap JavaScript expressions in curly braces.

```jsx
const name = "Vinay";

<h1>Hello {name}</h1>
```

```jsx
<p>{10 + 20}</p>
```

```jsx
<p>{new Date().getFullYear()}</p>
```

---

# Rule 8 - JSX Accepts Expressions, Not Statements

✅ Allowed

```jsx
{10 + 20}
```

```jsx
{name}
```

```jsx
{isLoggedIn ? "Dashboard" : "Login"}
```

❌ Not Allowed

```jsx
{
    if (true) {

    }
}
```

```jsx
{
    for (...) {

    }
}
```

If you need logic, write it before the `return` statement or use expressions like the ternary operator.

---

# Rule 9 - Component Names Must Start with a Capital Letter

React treats lowercase tags as HTML elements.

✅ Correct

```jsx
function Navbar() {
    return <h1>Navbar</h1>;
}

<Navbar />
```

❌ Wrong

```jsx
function navbar() {
    return <h1>Navbar</h1>;
}

<navbar />
```

React assumes `<navbar />` is a custom HTML tag.

---

# Rule 10 - Event Names Use camelCase

React event names follow camelCase.

✅ Correct

```jsx
<button onClick={handleClick}>
    Save
</button>
```

```jsx
<input onChange={handleChange} />
```

❌ Wrong

```jsx
<button onclick={handleClick}>
```

---

# Rule 11 - Inline Styles Must Be Objects

HTML

```html
<h1 style="color:red">
```

JSX

```jsx
<h1
    style={{
        color: "red",
        backgroundColor: "black"
    }}
>
    React
</h1>
```

Notice the use of a JavaScript object with camelCase property names.

---

# Rule 12 - Comments in JSX

Use comments inside `{/* ... */}`.

✅ Correct

```jsx
<div>

    {/* Student Name */}

    <h1>Rahul</h1>

</div>
```

❌ Wrong

```jsx
<div>

    // Student Name

</div>
```

---

# Rule 13 - Always Use `key` in Lists

Whenever rendering a list with `map()`, each element should have a unique `key`.

```jsx
students.map(student => (

    <li key={student.id}>
        {student.name}
    </li>

))
```

Avoid using the array index as the key when the list can change order or items can be inserted/removed.

---

# Rule 14 - Don't Modify Props

Props are **read-only**.

❌ Wrong

```jsx
function User(props) {

    props.name = "Vinay";

}
```

✅ Correct

```jsx
function User({ name }) {

    return <h1>{name}</h1>;

}
```

---

# Rule 15 - Return `null` to Render Nothing

If a component should display nothing, return `null`.

```jsx
function Message({ show }) {

    if (!show) {
        return null;
    }

    return <h1>Hello</h1>;

}
```

---

# Rule 16 - Escape Special Characters

React automatically escapes values rendered inside JSX expressions.

```jsx
const input = "<script>alert('Hi')</script>";

<p>{input}</p>
```

Output

```
<script>alert('Hi')</script>
```

The script is displayed as text, not executed.

---

# Rule 17 - Avoid Duplicate Attributes

❌ Wrong

```jsx
<input
    type="text"
    type="password"
/>
```

Always keep attribute names unique.

---

# Rule 18 - Keep JSX Readable

Avoid writing everything on one line.

❌ Hard to Read

```jsx
<div><h1>Hello</h1><button>Save</button></div>
```

✅ Better

```jsx
<div>

    <h1>Hello</h1>

    <button>Save</button>

</div>
```

---

# Common Mistakes

### Using `class`

```jsx
<h1 class="title">
```

Use

```jsx
<h1 className="title">
```

---

### Using `for`

```jsx
<label for="email">
```

Use

```jsx
<label htmlFor="email">
```

---

### Forgetting to Close Tags

```jsx
<img>
```

Use

```jsx
<img />
```

---

### Returning Multiple Root Elements

```jsx
<h1>Hello</h1>
<p>World</p>
```

Wrap them in a Fragment or another parent element.

---

### Rendering Objects Directly

❌ Wrong

```jsx
<h1>{user}</h1>
```

✅ Correct

```jsx
<h1>{user.name}</h1>
```

---

# Best Practices

- Return a single root element.
- Use Fragments when no wrapper element is needed.
- Follow camelCase naming for DOM properties and events.
- Keep JSX clean and readable.
- Use descriptive component names.
- Provide unique keys for list items.
- Keep complex logic outside JSX.
- Write semantic HTML where appropriate (`header`, `main`, `section`, `article`, etc.).
- Avoid unnecessary wrapper elements.

---

# Real World Example

```jsx
function StudentCard({ student }) {

    return (

        <article className="card">

            <img
                src={student.image}
                alt={student.name}
            />

            <h2>{student.name}</h2>

            <p>{student.course}</p>

            <button
                onClick={() => alert(student.name)}
            >
                View Profile
            </button>

        </article>

    );

}

export default StudentCard;
```

This example follows JSX rules:

- One root element
- `className`
- Dynamic values inside `{}`
- Properly closed tags
- camelCase event name
- Semantic HTML

---

# Summary

- JSX follows JavaScript syntax rules, not HTML rules.
- Always return a single root element.
- Close every tag.
- Use `className` and `htmlFor`.
- Wrap JavaScript expressions inside `{}`.
- Use camelCase for DOM properties and events.
- Use objects for inline styles.
- Use `key` when rendering lists.
- Keep JSX clean, readable, and maintainable.

---

# Interview Questions

### Beginner

1. Why does JSX require one parent element?
2. Why do we use `className` instead of `class`?
3. Why is `htmlFor` used instead of `for`?
4. How do you write comments in JSX?
5. Why do self-closing tags need `/>`?

---

### Intermediate

6. Why are JavaScript statements not allowed directly inside JSX?
7. Why do React component names start with a capital letter?
8. Explain camelCase naming in JSX.
9. Why is the `key` prop important in lists?
10. What is the purpose of returning `null` from a component?

---

### Advanced

11. Explain why React automatically escapes values rendered in JSX.
12. What problems can occur if keys are not stable?
13. Why are props considered immutable?
14. How do JSX rules improve code maintainability?
15. Which JSX rules are enforced by React, and which are recommended as best practices?

---

# Practice Questions

### Question 1

Fix the following code:

```jsx
<h1 class="title">
    React
</h1>
```

---

### Question 2

Correct the label:

```jsx
<label for="email">
```

---

### Question 3

Write a component that returns two elements using a Fragment.

---

### Question 4

Create a list of students using `map()` and unique keys.

---

### Question 5

Write a component that returns `null` when `isVisible` is `false`.

---

# Key Takeaways

- JSX has its own syntax rules because it is compiled into JavaScript.
- Following JSX rules prevents compilation errors and improves readability.
- Use `className`, `htmlFor`, camelCase property names, and proper closing tags.
- Keep components simple, readable, and semantically correct.
- Following these rules makes your React applications easier to maintain and scale.