# How JSX Works Internally

> **Learning Objective**
>
> By the end of this chapter, you will understand what happens behind the scenes when you write JSX, how Babel converts JSX into JavaScript, how `React.createElement()` works, and how React finally renders the UI in the browser.

---

# Table of Contents

- How JSX Works
- Complete JSX Execution Flow
- JSX Compilation Process
- What is Babel?
- Why Do We Need Babel?
- How Babel Converts JSX
- Understanding React.createElement()
- Virtual DOM Creation
- Rendering to the Browser
- Flow Diagram
- Common Misconceptions
- Summary
- Interview Questions
- Practice Questions

---

# Introduction

When we write React code, it looks like HTML.

Example:

```jsx
function App() {
  return <h1>Welcome to React</h1>;
}
```

Many beginners think the browser understands this syntax.

**This is incorrect.**

Browsers understand only:

- HTML
- CSS
- JavaScript

They **do not understand JSX**.

Before the browser can execute your code, JSX must first be converted into normal JavaScript.

---

# Complete JSX Execution Flow

Whenever a React application runs, it follows this sequence:

```
Developer Writes JSX
        │
        ▼
Babel Compiles JSX
        │
        ▼
React.createElement()
        │
        ▼
React Element (JavaScript Object)
        │
        ▼
Virtual DOM
        │
        ▼
ReactDOM
        │
        ▼
Real DOM
        │
        ▼
Browser Displays UI
```

Every React application follows this process.

---

# Step 1: Writing JSX

Suppose we write the following code.

```jsx
const element = <h1>Hello React</h1>;
```

This looks like HTML.

But it is **not HTML**.

It is JSX.

At this stage, the browser cannot understand it.

---

# Step 2: Babel

Before execution, Babel converts JSX into JavaScript.

The above code becomes:

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

Now the browser can execute it because it is valid JavaScript.

---

# What is Babel?

**Babel** is a JavaScript compiler.

It converts modern JavaScript and JSX into JavaScript that browsers can understand.

---

## Definition

> Babel is a JavaScript compiler that transforms JSX and modern JavaScript syntax into browser-compatible JavaScript.

---

# Why Do We Need Babel?

Browsers do not understand:

- JSX
- Some modern JavaScript features (depending on browser support)

Example:

```jsx
const element = <h1>Hello</h1>;
```

Without Babel:

❌ Browser Error

With Babel:

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello"
);
```

✅ Browser executes successfully.

---

# What Else Does Babel Do?

Besides converting JSX, Babel also converts newer JavaScript syntax into forms that work in older browsers.

Example:

Modern JavaScript

```javascript
const greet = (name) => `Hello ${name}`;
```

Babel can transform it into older JavaScript syntax if required for compatibility.

---

# JSX Compilation Process

Let's see the complete compilation process.

### Step 1

Developer writes JSX.

```jsx
<h1>Hello</h1>
```

↓

### Step 2

Babel reads the JSX.

↓

### Step 3

Babel converts it into:

```javascript
React.createElement(
  "h1",
  null,
  "Hello"
);
```

↓

### Step 4

React creates a React Element.

↓

### Step 5

React builds the Virtual DOM.

↓

### Step 6

ReactDOM updates the Real DOM.

↓

### Step 7

The browser displays the UI.

---

# Understanding React.createElement()

This is one of the most important concepts in React.

Whenever Babel sees JSX,

it converts it into `React.createElement()`.

---

## Example 1

JSX

```jsx
<h1>Hello React</h1>
```

becomes

```javascript
React.createElement(
  "h1",
  null,
  "Hello React"
);
```

---

## Example 2

JSX

```jsx
<div>
  <h1>Welcome</h1>
  <p>Learning React</p>
</div>
```

becomes

```javascript
React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Welcome"
  ),
  React.createElement(
    "p",
    null,
    "Learning React"
  )
);
```

Notice that nested JSX becomes nested `React.createElement()` calls.

---

# Syntax of React.createElement()

```javascript
React.createElement(
    type,
    props,
    children
)
```

It accepts **three main arguments**.

---

## 1. Type

Specifies which element or component should be created.

Example:

```javascript
"h1"
```

or

```javascript
"div"
```

or

```javascript
App
```

---

## 2. Props

An object containing attributes.

Example

JSX

```jsx
<h1 className="title">
    Hello
</h1>
```

becomes

```javascript
React.createElement(
  "h1",
  {
    className: "title"
  },
  "Hello"
);
```

---

## 3. Children

Everything inside the tag becomes children.

Example

```jsx
<button>
    Login
</button>
```

becomes

```javascript
React.createElement(
    "button",
    null,
    "Login"
);
```

---

# What Does React.createElement() Return?

Many beginners think it creates HTML.

It does **not**.

It returns a **React Element**.

A React Element is a plain JavaScript object that describes what the UI should look like.

Example (simplified):

```javascript
{
  type: "h1",
  props: {
    children: "Hello React"
  }
}
```

React later uses these objects to build the Virtual DOM.

---

# React Element vs DOM Element

React Element

- JavaScript Object
- Lightweight
- Created by React
- Describes the UI

DOM Element

- Real HTML Element
- Exists in the browser
- Created by the browser

---

# Virtual DOM Creation

After creating React Elements,

React builds a Virtual DOM tree.

Example

```
<div>

    <h1>Hello</h1>

    <button>Login</button>

</div>
```

Virtual DOM

```
div
├── h1
│     └── Hello
└── button
      └── Login
```

This tree exists only in memory.

It is much faster to work with than the browser's Real DOM.

---

# ReactDOM

ReactDOM is responsible for displaying the Virtual DOM in the browser.

Example

```jsx
ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);
```

ReactDOM compares the Virtual DOM with the Real DOM and updates only the parts that changed.

---

# Complete Rendering Flow

```
Write JSX

      │

      ▼

Babel

      │

      ▼

React.createElement()

      │

      ▼

React Element

      │

      ▼

Virtual DOM

      │

      ▼

Diffing

      │

      ▼

Real DOM Update

      │

      ▼

Browser Paint
```

---

# Real-World Example

Suppose your application displays:

```
Cart (2)
```

The user adds one item.

JSX becomes:

```jsx
<h2>Cart (3)</h2>
```

Flow:

```
JSX Updated

↓

Babel

↓

React.createElement()

↓

Virtual DOM Updated

↓

Compare with Old Virtual DOM

↓

Only Cart Text Changed

↓

Update Browser
```

React does **not** rebuild the whole page.

It updates only the changed part.

---

# Common Misconceptions

## Babel Creates HTML

❌ Incorrect

Babel creates JavaScript.

---

## React.createElement() Creates HTML

❌ Incorrect

It creates React Elements (JavaScript objects).

---

## Browser Understands JSX

❌ Incorrect

Browsers only understand JavaScript.

---

## Babel Runs in the Browser

❌ Not in most production workflows.

In modern React projects (Vite, CRA, Next.js), Babel or another compiler/transpiler processes your code during development/build before it reaches the browser.

---

# Real-Life Analogy

Imagine ordering food.

```
Customer

↓

Menu Selection (JSX)

↓

Chef (Babel)

↓

Prepared Dish (React Element)

↓

Waiter (ReactDOM)

↓

Table (Browser)
```

The customer never cooks the food.

Similarly,

The browser never understands JSX directly.

---

# Summary

- Browsers do not understand JSX.
- Babel converts JSX into JavaScript.
- Babel generates `React.createElement()` calls (or equivalent code depending on the JSX runtime).
- `React.createElement()` returns React Elements.
- React builds the Virtual DOM.
- ReactDOM updates the Real DOM.
- The browser finally displays the UI.

---

# Interview Questions

## Beginner

1. What happens when JSX is written?
2. Why do we need Babel?
3. Does the browser understand JSX?
4. What is `React.createElement()`?
5. What does Babel do?

---

## Intermediate

6. Explain the JSX compilation process.
7. What are the parameters of `React.createElement()`?
8. What does `React.createElement()` return?
9. Explain React Element.
10. Explain the difference between React Element and DOM Element.

---

## Advanced

11. Explain the complete rendering flow from JSX to the browser.
12. Why doesn't React directly create HTML?
13. How is the Virtual DOM created?
14. What is the relationship between Babel and React?
15. What happens after Babel converts JSX?

---

# Practice Questions

## Question 1

Convert the following JSX into `React.createElement()`.

```jsx
<h2>Hello Students</h2>
```

---

## Question 2

Convert this JSX.

```jsx
<button>Login</button>
```

---

## Question 3

Convert this JSX.

```jsx
<div>
  <h1>React</h1>
  <p>Learning JSX</p>
</div>
```

---

## Question 4

Explain the JSX execution flow in your own words.

---

## Question 5

Draw the following flow on paper.

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

Browser
```

---

# Key Takeaways

- JSX is **not** understood by browsers.
- Babel transforms JSX into JavaScript.
- `React.createElement()` creates **React Elements**, not HTML.
- React Elements are lightweight JavaScript objects.
- React uses these objects to build the Virtual DOM.
- ReactDOM renders the Virtual DOM into the browser's Real DOM.
- This process enables React to efficiently update only the parts of the UI that change.