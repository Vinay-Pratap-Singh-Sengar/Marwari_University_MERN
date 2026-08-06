# React Fragments

> **Learning Objective**
>
> By the end of this chapter, you will understand what React Fragments are, why they are used, how they work internally, different ways to use them, when to use them, and best practices followed in real-world React applications.

---

# Table of Contents

1. What are Fragments?
2. Why Do We Need Fragments?
3. Problem Without Fragments
4. Solution Using Fragments
5. Types of Fragments
6. React.Fragment
7. Short Syntax (<> </>)
8. Fragment vs div
9. Fragments with Keys
10. Nested Fragments
11. Real World Examples
12. Common Mistakes
13. Best Practices
14. Summary
15. Interview Questions
16. Practice Questions

---

# What are Fragments?

A **Fragment** is a special React component that allows grouping multiple JSX elements **without adding an extra HTML element** to the DOM.

In simple words,

> A Fragment acts as an invisible wrapper.

It satisfies React's requirement of returning a single parent element without creating an unnecessary DOM node.

---

# Why Do We Need Fragments?

React components must return **only one root element**.

Suppose we write

```jsx
function App() {
    return (
        <h1>React</h1>
        <p>Learning JSX</p>
    );
}
```

React throws an error.

```
Adjacent JSX elements must be wrapped
in an enclosing tag.
```

This happens because React expects one parent element.

---

# Traditional Solution

Before Fragments existed, developers used `<div>`.

```jsx
function App() {
    return (
        <div>

            <h1>React</h1>

            <p>Learning React</p>

        </div>
    );
}
```

Output

```html
<div>
    <h1>React</h1>
    <p>Learning React</p>
</div>
```

Although this works, it creates an extra `<div>`.

---

# Problem with Extra div

Imagine writing

```jsx
<ul>

    <div>

        <li>HTML</li>

        <li>CSS</li>

    </div>

</ul>
```

Browser Output

```html
<ul>

    <div>

        <li>HTML</li>

        <li>CSS</li>

    </div>

</ul>
```

This is **invalid HTML** because a `<ul>` should contain only `<li>` elements as direct children.

It may also affect styling and layout.

---

Another Example

```jsx
<table>

    <div>

        <tr>
            <td>Vinay</td>
        </tr>

    </div>

</table>
```

This is also invalid because `<table>` expects rows (`<tr>`), not `<div>` elements.

---

# Solution Using Fragments

```jsx
function App() {
    return (
        <>

            <h1>React</h1>

            <p>Learning React</p>

        </>
    );
}
```

Browser Output

```html
<h1>React</h1>

<p>Learning React</p>
```

Notice that **no extra HTML element** is created.

---

# How Fragments Work

When React encounters a Fragment,

```jsx
<>
    <h1>Hello</h1>
    <p>Students</p>
</>
```

React groups both elements together.

The Fragment itself is **not rendered** into the DOM.

Final DOM

```html
<h1>Hello</h1>

<p>Students</p>
```

---

# Types of Fragments

React provides two ways to write Fragments.

### 1. React.Fragment

### 2. Short Syntax (`<> </>`)

Both produce the same output.

---

# React.Fragment

```jsx
import React from "react";

function App() {

    return (

        <React.Fragment>

            <h1>Welcome</h1>

            <p>Learning React</p>

        </React.Fragment>

    );
}

export default App;
```

Output

```html
<h1>Welcome</h1>

<p>Learning React</p>
```

---

# Short Syntax

React introduced a shorter syntax.

```jsx
function App() {

    return (

        <>

            <h1>Welcome</h1>

            <p>Learning React</p>

        </>

    );

}
```

This is the preferred approach in most React projects.

---

# React.Fragment vs Short Syntax

| React.Fragment | <> </> |
|----------------|---------|
| Can receive a `key` prop | Cannot receive a `key` prop |
| Slightly longer | Shorter and cleaner |
| Used in special cases | Used in most applications |

---

# When Should You Use React.Fragment?

Use `React.Fragment` when you need to assign a **key**.

Example

```jsx
import React from "react";

const students = ["Rahul", "Aman", "Priya"];

function App() {

    return (

        <>
            {students.map((student) => (

                <React.Fragment key={student}>

                    <h2>{student}</h2>

                    <hr />

                </React.Fragment>

            ))}
        </>

    );

}
```

Here, the shorthand `<>...</>` cannot be used because it doesn't support the `key` prop.

---

# Fragment vs div

Using `<div>`

```jsx
<div>

    <Header />

    <Navbar />

    <Footer />

</div>
```

DOM

```html
<div>

    <header></header>

    <nav></nav>

    <footer></footer>

</div>
```

---

Using Fragment

```jsx
<>

    <Header />

    <Navbar />

    <Footer />

</>
```

DOM

```html
<header></header>

<nav></nav>

<footer></footer>
```

No unnecessary wrapper.

---

# Why Avoid Extra div?

Extra `<div>` elements can:

- Increase DOM size
- Make CSS selectors more complicated
- Break layouts (Flexbox/Grid)
- Produce invalid HTML in elements like `<table>` and `<ul>`

Keeping the DOM clean improves readability and maintainability.

---

# Fragments in Lists

Suppose each item needs multiple sibling elements.

```jsx
const users = [
    "Vinay",
    "Rahul",
    "Priya"
];

function App() {

    return (

        <>
            {users.map((user) => (

                <React.Fragment key={user}>

                    <h2>{user}</h2>

                    <hr />

                </React.Fragment>

            ))}
        </>

    );

}
```

Output

```
Vinay
----------

Rahul
----------

Priya
----------
```

---

# Nested Fragments

Fragments can be nested.

```jsx
function App() {

    return (

        <>

            <>

                <h1>React</h1>

            </>

            <>

                <p>Learning Fragments</p>

            </>

        </>

    );

}
```

Although possible, avoid unnecessary nesting.

---

# Real World Example

Imagine building an E-Commerce product card.

```jsx
function Product() {

    return (

        <>

            <img
                src="shoe.jpg"
                alt="Shoe"
            />

            <h2>Nike Air Max</h2>

            <p>₹7,999</p>

            <button>
                Add to Cart
            </button>

        </>

    );

}
```

No extra wrapper is added to the DOM.

---

# Fragment in Tables

Without Fragment

```jsx
<tbody>

    <div>

        <tr>

            <td>Rahul</td>

        </tr>

    </div>

</tbody>
```

Invalid HTML.

---

Correct

```jsx
<tbody>

    <React.Fragment>

        <tr>

            <td>Rahul</td>

        </tr>

    </React.Fragment>

</tbody>
```

The Fragment doesn't render, so the browser sees only the `<tr>`.

---

# Fragment in Description Lists

```jsx
<dl>

    <React.Fragment>

        <dt>React</dt>

        <dd>JavaScript Library</dd>

    </React.Fragment>

</dl>
```

Again, no extra wrapper is inserted.

---

# Common Mistakes

### Using `<div>` Everywhere

```jsx
<div>

    <Header />

    <Footer />

</div>
```

If the wrapper is only for grouping elements, consider using a Fragment instead.

---

### Using Shorthand Fragment with `key`

Wrong

```jsx
<>
    <h1>Hello</h1>
</>
```

You cannot write:

```jsx
<>
    key="1"
</>
```

If you need a `key`, use `React.Fragment`.

---

### Unnecessary Nested Fragments

```jsx
<>

    <>

        <>

            <h1>Hello</h1>

        </>

    </>

</>
```

This makes the code harder to read.

---

# Best Practices

- Use the shorthand `<>...</>` when you only need to group elements.
- Use `React.Fragment` when a `key` prop is required.
- Avoid adding unnecessary `<div>` elements just to satisfy the single parent rule.
- Keep the DOM as clean as possible.
- Avoid deeply nested Fragments.
- Use meaningful wrapper elements (`section`, `article`, `main`, etc.) when semantic HTML is required instead of replacing everything with Fragments.

---

# Summary

- A Fragment groups multiple JSX elements without creating an extra DOM element.
- Fragments help satisfy React's single root element requirement.
- `<>...</>` is the shorthand syntax and is suitable for most cases.
- `React.Fragment` should be used when you need to provide a `key`.
- Fragments help create cleaner, more semantic HTML by avoiding unnecessary wrapper elements.

---

# Interview Questions

### Beginner

1. What is a Fragment in React?
2. Why are Fragments used?
3. What problem do Fragments solve?
4. What is the shorthand syntax for a Fragment?
5. Does a Fragment create an HTML element?

---

### Intermediate

6. Explain the difference between a `<div>` and a Fragment.
7. When should you use `React.Fragment` instead of `<>...</>`?
8. Why can't the shorthand Fragment accept a `key`?
9. How do Fragments improve HTML structure?
10. Can Fragments be nested?

---

### Advanced

11. Explain how Fragments help in tables and lists.
12. Do Fragments improve performance?
13. How do Fragments affect the Virtual DOM?
14. What are the limitations of shorthand Fragments?
15. When should you avoid using a Fragment?

---

# Practice Questions

### Question 1

Create a component that returns:

- Heading
- Paragraph
- Button

using a Fragment.

---

### Question 2

Convert the following code from `<div>` to a Fragment.

```jsx
<div>

    <Header />

    <Footer />

</div>
```

---

### Question 3

Render a list of students using `React.Fragment` with a `key`.

---

### Question 4

Explain why a `<div>` inside a `<ul>` is not recommended.

---

### Question 5

When would you choose a semantic element like `<section>` over a Fragment?

---

# Key Takeaways

- Fragments are invisible wrappers used to group multiple JSX elements.
- They prevent unnecessary DOM nodes.
- Use `<>...</>` for most cases.
- Use `React.Fragment` when you need to assign a `key`.
- Fragments help maintain clean, semantic, and valid HTML structures.
- They are especially useful inside lists, tables, and other elements with strict HTML nesting rules.