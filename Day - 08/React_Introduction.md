# React Basics Notes

## Table of Contents

1. What is React?
2. Why is React Popular?
3. Features of React
4. What is SPA (Single Page Application)?
5. What is Virtual DOM?
6. How Does Virtual DOM Work?
7. Difference Between DOM and Virtual DOM
8. Interview Questions

---

# 1. What is React?

React is an **Open-Source JavaScript Library** developed by **Facebook (Meta)** in **2013** for building fast, interactive, and reusable User Interfaces (UI), especially for Single Page Applications (SPAs).

React focuses only on the **View Layer** (UI) of an application. It follows a **Component-Based Architecture**, where the UI is divided into small, reusable components.

Examples of components:

- Navbar
- Sidebar
- Footer
- Login Form
- Product Card
- Dashboard

Instead of creating one large HTML page, React allows us to build applications using multiple reusable components.

### Example

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
}
```

---

## Why was React created?

Before React, developers had to manually update the DOM whenever data changed.

Example:

```javascript
document.getElementById("count").innerHTML = count;
```

Managing large applications became difficult because developers had to keep the UI synchronized with the data manually.

React solves this problem by automatically updating only the necessary parts of the UI.

---

## Key Points

- Open Source
- Developed by Facebook (Meta)
- Component-Based Architecture
- Declarative Programming
- Uses Virtual DOM
- Reusable Components
- One-Way Data Flow
- Easy State Management

---

# 2. Why is React Popular?

React has become one of the most popular frontend libraries because it simplifies UI development while providing excellent performance.

## Reasons

### 1. Component-Based Architecture

Applications are divided into reusable components.

Example:

```jsx
<Button />
```

The same button component can be used in:

- Login
- Signup
- Dashboard
- Admin Panel

---

### 2. Virtual DOM

React updates only the changed parts of the webpage instead of updating the entire page.

This improves application performance.

---

### 3. Reusable Components

Developers write a component once and reuse it multiple times.

Example:

```jsx
<ProductCard />
```

Instead of writing HTML repeatedly, the same component is reused.

---

### 4. Declarative Programming

Developers describe **what** should be displayed instead of **how** to update the DOM.

Example:

```jsx
return isLoggedIn ? <Dashboard /> : <Login />;
```

React automatically updates the UI.

---

### 5. Easy State Management

React provides:

- useState()
- useReducer()
- Context API

For larger applications, developers commonly use Redux Toolkit.

---

### 6. Huge Community

React has:

- Excellent Documentation
- Large Community
- Thousands of Third-Party Libraries

---

### 7. SEO Support

React applications can achieve excellent SEO using frameworks like **Next.js**, which supports:

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)

---

### 8. Easy to Learn

Anyone with JavaScript knowledge can learn React quickly.

---

## Companies Using React

- Facebook
- Instagram
- Netflix
- Airbnb
- WhatsApp Web
- Discord
- Uber

---

# 3. Features of React

## 1. Component-Based Architecture

The UI is divided into reusable components.

Example:

- Header
- Sidebar
- Footer
- Card
- Navbar

---

## 2. Virtual DOM

Improves rendering performance by updating only changed elements.

---

## 3. JSX

JSX allows developers to write HTML inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

---

## 4. One-Way Data Binding

Data flows from Parent to Child.

```
Parent
   |
   |
Child
```

This makes applications easier to understand and debug.

---

## 5. Reusable Components

One component can be used multiple times throughout the application.

---

## 6. State Management

React provides:

- useState()
- useReducer()
- Context API

For complex applications:

- Redux Toolkit

---

## 7. Hooks

Hooks allow Functional Components to use React features.

Common Hooks:

- useState
- useEffect
- useContext
- useRef
- useMemo
- useCallback
- useReducer

---

## 8. Fast Rendering

React improves rendering performance using the Virtual DOM.

---

## 9. Rich Ecosystem

Popular libraries include:

- React Router
- Axios
- Redux Toolkit
- React Query
- Formik
- Next.js

---

## 10. Easy Testing

React applications can be tested using:

- Jest
- React Testing Library

---

# 4. What is SPA (Single Page Application)?

A **Single Page Application (SPA)** is a web application that loads only one HTML page initially. After that, JavaScript dynamically updates the content without reloading the entire webpage.

---

## Traditional Website

```
User Clicks About

↓

Browser Requests Server

↓

Server Returns New HTML

↓

Entire Page Reloads
```

---

## React SPA

```
User Clicks About

↓

React Updates Content

↓

No Full Page Reload
```

Only the required content changes.

---

## Examples

- Gmail
- Facebook
- Instagram
- Twitter (X)
- LinkedIn

---

## Advantages

- Faster Navigation
- Better User Experience
- Less Server Requests
- Smooth Page Transitions

---

## Disadvantages

- Initial Bundle Size can be larger.
- SEO may require Server-Side Rendering (Next.js).

---

# 5. What is Virtual DOM?

The **Virtual DOM** is a lightweight JavaScript representation (copy) of the Real DOM.

Whenever data changes, React first updates the Virtual DOM instead of directly modifying the Real DOM.

React then compares the old and new Virtual DOM and updates only the changed parts in the Real DOM.

---

## Visual Representation

```
Real DOM

↓

Virtual DOM (JavaScript Copy)

↓

Compare Changes

↓

Update Only Changed Elements
```

---

## Example

Initial UI

```
Name : Rahul
Age  : 20
City : Delhi
```

Updated UI

```
Name : Rahul
Age  : 21
City : Delhi
```

React updates only the **Age** text.

---

# 6. How Does Virtual DOM Work?

Whenever the application state changes, React follows these steps.

---

## Step 1

React creates the initial Virtual DOM.

```
Virtual DOM

↓

Real DOM
```

---

## Step 2

The application state changes.

Example:

```jsx
setCount(5);
```

---

## Step 3

React creates a new Virtual DOM based on the updated state.

---

## Step 4

React compares the old Virtual DOM with the new Virtual DOM.

This comparison process is called **Diffing**.

The overall update process is known as **Reconciliation**.

---

## Step 5

React identifies only the changed nodes.

Example:

Old:

```
Count : 4
```

New:

```
Count : 5
```

Only this text node has changed.

---

## Step 6

React updates only the changed elements in the Real DOM.

---

## Complete Flow

```
User Action

↓

State Changes

↓

New Virtual DOM

↓

Diffing Algorithm

↓

Find Changes

↓

Update Real DOM

↓

Browser Repaint
```

---

# 7. Difference Between DOM and Virtual DOM

| Real DOM | Virtual DOM |
|----------|-------------|
| Actual browser DOM | JavaScript representation of the DOM |
| Directly manipulated | Updated first in memory |
| Slower updates | Faster updates |
| Every change affects the browser DOM | Only changed nodes are updated |
| More Reflow and Repaint | Less Reflow and Repaint |
| Browser API | React Feature |
| Used in Vanilla JavaScript | Used internally by React |

---

# Real DOM vs Virtual DOM Example

Suppose we have:

```
Welcome

Products

Cart (2)

Footer
```

The user adds one more product.

Updated UI:

```
Welcome

Products

Cart (3)

Footer
```

### Without Virtual DOM

The browser may re-render a larger portion of the page depending on how the code is written.

### With Virtual DOM

React identifies that only the **Cart** text changed.

Only this node is updated:

```
Cart (2)

↓

Cart (3)
```

This makes React applications faster and more efficient.

---

# Summary

React is a JavaScript library used to build fast and interactive user interfaces.

It follows a Component-Based Architecture where the UI is divided into reusable components.

React uses the Virtual DOM to improve rendering performance by updating only the changed parts of the UI.

React applications are usually built as Single Page Applications (SPAs), where only the content changes without reloading the entire webpage.

Because of its simplicity, performance, large ecosystem, and community support, React has become one of the most widely used frontend libraries.

---

# Interview Questions

### Basic Questions

1. What is React?
2. Why is React popular?
3. Is React a library or a framework?
4. What are the features of React?
5. What is JSX?
6. What is Component-Based Architecture?
7. What is SPA?
8. What is Virtual DOM?
9. How does Virtual DOM work?
10. What is Diffing?
11. What is Reconciliation?
12. Difference between DOM and Virtual DOM?
13. What is One-Way Data Binding?
14. What are Hooks?
15. Why is React faster than traditional DOM manipulation?

---

# Key Takeaways

- React is a JavaScript Library for building User Interfaces.
- React uses reusable components to build applications.
- React follows One-Way Data Flow.
- React uses JSX to write HTML inside JavaScript.
- React uses Virtual DOM for efficient updates.
- React updates only the changed elements instead of the entire page.
- Diffing compares the old and new Virtual DOM.
- Reconciliation updates the Real DOM efficiently.
- React is widely used for building Single Page Applications (SPAs).