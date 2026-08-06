# JSX Attributes

> **Learning Objective**
>
> By the end of this chapter, you will understand how attributes work in JSX, the differences between HTML and JSX attributes, dynamic attributes, boolean attributes, inline styling, spread attributes, data attributes, accessibility (ARIA), and best practices.

---

# Table of Contents

1. What are JSX Attributes?
2. Why JSX Attributes are Different from HTML
3. Basic Attributes
4. Dynamic Attributes
5. Boolean Attributes
6. Event Attributes
7. className
8. htmlFor
9. Inline Styles
10. data-* Attributes
11. ARIA Attributes
12. Spread Attributes
13. Conditional Attributes
14. Common Mistakes
15. Best Practices
16. Real World Examples
17. Summary
18. Interview Questions
19. Practice Questions

---

# What are JSX Attributes?

Attributes provide additional information about an HTML element.

In React, JSX attributes work similarly to HTML attributes but follow JavaScript conventions.

Example

```jsx
<img
    src="logo.png"
    alt="React Logo"
/>
```

Here,

- `src`
- `alt`

are attributes.

---

# HTML vs JSX Attributes

Although JSX looks like HTML, some attributes are different because JSX follows JavaScript naming conventions.

| HTML | JSX |
|-------|------|
| class | className |
| for | htmlFor |
| onclick | onClick |
| tabindex | tabIndex |
| readonly | readOnly |
| maxlength | maxLength |

---

# Basic Attributes

Example

```jsx
function App() {
    return (
        <img
            src="logo.png"
            alt="Company Logo"
            width="200"
        />
    );
}
```

---

# Multiple Attributes

```jsx
<a
    href="https://react.dev"
    target="_blank"
    rel="noreferrer"
>
    React Official Website
</a>
```

---

# Dynamic Attributes

Attributes can receive JavaScript values using `{}`.

Example

```jsx
const image = "logo.png";

function App() {
    return (
        <img
            src={image}
            alt="Logo"
        />
    );
}
```

---

Another Example

```jsx
const title = "React Course";

<h1 title={title}>
    Hover Me
</h1>
```

---

# Boolean Attributes

Boolean attributes are either present or absent.

Example

```jsx
<input disabled />
```

Output

The input field is disabled.

---

Dynamic Boolean Attribute

```jsx
const isDisabled = true;

<input disabled={isDisabled} />
```

---

Example

```jsx
const isChecked = true;

<input
    type="checkbox"
    checked={isChecked}
/>
```

---

# Event Attributes

React events use **camelCase**.

Correct

```jsx
<button onClick={handleClick}>
    Click
</button>
```

Wrong

```jsx
<button onclick={handleClick}>
```

---

Common Events

```jsx
onClick

onChange

onSubmit

onMouseEnter

onMouseLeave

onKeyDown

onKeyUp

onFocus

onBlur
```

---

# className

In HTML

```html
<h1 class="title">
```

In JSX

```jsx
<h1 className="title">
```

Why?

Because `class` is a reserved keyword in JavaScript.

React uses `className` instead.

---

Example

```jsx
<div className="container">

    <h1 className="heading">
        React
    </h1>

</div>
```

---

# Dynamic className

```jsx
const isActive = true;

<button
    className={isActive ? "active" : "inactive"}
>
    Submit
</button>
```

---

# htmlFor

In HTML

```html
<label for="email">
```

In JSX

```jsx
<label htmlFor="email">
```

Example

```jsx
<label htmlFor="username">
    Username
</label>

<input id="username" />
```

---

# Inline Styles

HTML

```html
<h1 style="color:red">
```

JSX

```jsx
<h1
    style={{
        color: "red"
    }}
>
    React
</h1>
```

---

Why Double Curly Braces?

```jsx
style={{
    color: "red"
}}
```

Outer braces

```
{}
```

JavaScript Expression

Inner braces

```
{}
```

JavaScript Object

---

# Multiple Styles

```jsx
<h1
    style={{
        color: "white",
        backgroundColor: "blue",
        padding: "20px",
        borderRadius: "10px"
    }}
>
    Welcome
</h1>
```

---

# CSS Property Naming

HTML

```css
background-color
```

JSX

```jsx
backgroundColor
```

---

Examples

| CSS | JSX |
|------|------|
| background-color | backgroundColor |
| font-size | fontSize |
| text-align | textAlign |
| margin-top | marginTop |
| border-radius | borderRadius |

---

# Dynamic Styles

```jsx
const color = "green";

<h1
    style={{
        color: color
    }}
>
    Hello
</h1>
```

---

Example

```jsx
const isDark = true;

<div
    style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black"
    }}
>
    Welcome
</div>
```

---

# data-* Attributes

Custom data attributes can be added.

```jsx
<button
    data-id="101"
    data-role="admin"
>
    Delete
</button>
```

These are commonly used for testing or storing metadata.

---

# ARIA Attributes

ARIA improves accessibility.

Example

```jsx
<button
    aria-label="Close"
>
    X
</button>
```

Another Example

```jsx
<input
    aria-required="true"
/>
```

---

# Spread Attributes

Suppose

```jsx
const inputProps = {
    type: "text",
    placeholder: "Enter Name",
    maxLength: 20
};
```

Instead of

```jsx
<input
    type="text"
    placeholder="Enter Name"
    maxLength={20}
/>
```

Use

```jsx
<input {...inputProps} />
```

This is called the **Spread Operator**.

---

# Combining Attributes

```jsx
const buttonProps = {
    className: "btn",
    disabled: false
};

<button
    {...buttonProps}
>
    Save
</button>
```

---

# Conditional Attributes

Example

```jsx
const isDisabled = true;

<button
    disabled={isDisabled}
>
    Submit
</button>
```

---

Another Example

```jsx
const image = "react.png";

<img
    src={image}
    alt="React"
/>
```

---

# Common Mistakes

---

## Using class

Wrong

```jsx
<h1 class="title">
```

Correct

```jsx
<h1 className="title">
```

---

## Using for

Wrong

```jsx
<label for="email">
```

Correct

```jsx
<label htmlFor="email">
```

---

## Wrong Event Name

Wrong

```jsx
<button onclick={save}>
```

Correct

```jsx
<button onClick={save}>
```

---

## Inline Style as String

Wrong

```jsx
<h1 style="color:red">
```

Correct

```jsx
<h1
    style={{
        color: "red"
    }}
>
```

---

## CSS Property Names

Wrong

```jsx
background-color
```

Correct

```jsx
backgroundColor
```

---

# Best Practices

✅ Use `className` instead of inline styles whenever possible.

✅ Use inline styles only for dynamic values.

✅ Use descriptive `alt` text for images.

✅ Always provide labels for form elements.

✅ Use ARIA attributes for accessibility.

✅ Avoid unnecessary inline objects in performance-critical components.

✅ Use spread attributes when passing many props.

✅ Keep attribute names readable.

---

# Real World Example

```jsx
function App() {

    const isLoggedIn = true;

    const userImage =
        "https://example.com/user.png";

    return (

        <div className="container">

            <img
                src={userImage}
                alt="User Profile"
                width="150"
            />

            <h1
                className="title"
            >
                Welcome Student
            </h1>

            <button
                disabled={!isLoggedIn}
                className={
                    isLoggedIn
                        ? "active"
                        : "inactive"
                }
            >
                Dashboard
            </button>

        </div>

    );
}

export default App;
```

---

# HTML vs JSX Example

HTML

```html
<label for="name">
    Name
</label>

<input class="input">
```

JSX

```jsx
<label htmlFor="name">
    Name
</label>

<input className="input" />
```

---

# Summary

- JSX attributes provide additional information to elements.
- JSX attributes are similar to HTML attributes but follow JavaScript naming conventions.
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for`.
- Event names use camelCase (e.g., `onClick`, `onChange`).
- Inline styles are written as JavaScript objects.
- Use `{}` for dynamic attribute values.
- Spread attributes simplify passing multiple properties.
- Use `data-*` for custom metadata and `aria-*` for accessibility.

---

# Interview Questions

## Beginner

1. What are JSX attributes?
2. Why do we use `className` instead of `class`?
3. Why do we use `htmlFor` instead of `for`?
4. How do you write inline styles in JSX?
5. What are dynamic attributes?

---

## Intermediate

6. Explain boolean attributes in JSX.
7. What is the spread operator in JSX?
8. Why do React event names use camelCase?
9. Explain the difference between HTML attributes and JSX attributes.
10. What are `data-*` attributes?

---

## Advanced

11. Why are inline styles written using JavaScript objects?
12. When should you use inline styles instead of CSS classes?
13. What are ARIA attributes, and why are they important?
14. Explain conditional attributes with an example.
15. How does the spread operator improve code readability?

---

# Practice Questions

### Question 1

Create an image with:

- src
- alt
- width

---

### Question 2

Create a login button that is disabled.

---

### Question 3

Display a heading with:

- Blue background
- White text
- 20px padding

using inline styles.

---

### Question 4

Create a form with:

- Label
- Input
- Proper `htmlFor`

---

### Question 5

Create a button whose class changes based on a variable named `isActive`.

---

### Question 6

Create an input using the spread operator.

---

# Key Takeaways

- JSX attributes follow JavaScript naming conventions.
- Use `className` and `htmlFor` instead of `class` and `for`.
- Dynamic values are passed using `{}`.
- Inline styles are JavaScript objects with camelCase property names.
- Event handlers use camelCase names like `onClick`.
- Use spread attributes to keep code clean and reusable.
- Write accessible JSX using meaningful `alt` text and ARIA attributes.