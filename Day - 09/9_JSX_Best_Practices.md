# JSX Best Practices

> **Learning Objective**
>
> By the end of this chapter, you will understand the industry-standard best practices for writing clean, readable, maintainable, reusable, and performant JSX code. These practices are followed by professional React developers in production applications.

---

# Table of Contents

1. What are JSX Best Practices?
2. Why Best Practices Matter
3. Keep JSX Clean and Readable
4. Return One Parent Element
5. Prefer Fragments Over Unnecessary div
6. Keep Logic Outside JSX
7. Use Meaningful Variable Names
8. Use Meaningful Component Names
9. Destructure Props
10. Keep Components Small
11. Use Conditional Rendering Properly
12. Render Lists Correctly
13. Use Unique Keys
14. Avoid Inline Styles
15. Avoid Deep Nesting
16. Use Semantic HTML
17. Write Accessible JSX
18. Avoid Code Duplication
19. Organize JSX Properly
20. Performance Best Practices
21. Common Mistakes
22. Real World Example
23. Summary
24. Interview Questions
25. Practice Questions

---

# What are JSX Best Practices?

JSX Best Practices are a set of coding guidelines that make your React applications:

- Easier to read
- Easier to debug
- Easier to maintain
- Easier to scale
- More performant
- More reusable

These practices are commonly followed in production-level React projects.

---

# Why Best Practices Matter

Poor JSX

```jsx
<div><h1>Hello</h1><button>Save</button></div>
```

Better JSX

```jsx
<div>

    <h1>Hello</h1>

    <button>Save</button>

</div>
```

Readable code is easier to maintain and debug.

---

# 1. Keep JSX Clean and Readable

Avoid writing everything on one line.

❌ Bad

```jsx
<div><h1>React</h1><button>Login</button></div>
```

✅ Good

```jsx
<div>

    <h1>React</h1>

    <button>Login</button>

</div>
```

---

# 2. Return One Parent Element

Every component should return one root element.

Use

```jsx
<>
    <Header />
    <Main />
    <Footer />
</>
```

Instead of

```jsx
<Header />

<Main />

<Footer />
```

---

# 3. Prefer Fragments Over Unnecessary div

❌ Unnecessary Wrapper

```jsx
<div>

    <Header />

    <Footer />

</div>
```

✅ Better

```jsx
<>

    <Header />

    <Footer />

</>
```

Use a `<div>` only when it has semantic or styling purposes.

---

# 4. Keep Logic Outside JSX

❌ Bad

```jsx
<h1>

{
students.filter(student=>student.age>18).sort().map(student=>

student.name.toUpperCase()

)
}

</h1>
```

✅ Better

```jsx
const adultStudents = students
    .filter(student => student.age > 18)
    .sort();

return (

    <h1>

        {adultStudents.map(student => student.name)}

    </h1>

);
```

---

# 5. Use Meaningful Variable Names

❌ Bad

```jsx
const a = "Vinay";
```

✅ Good

```jsx
const studentName = "Vinay";
```

Readable names improve code quality.

---

# 6. Use Meaningful Component Names

❌ Bad

```jsx
function A() {}
```

✅ Good

```jsx
function StudentCard() {}
```

Component names should describe their purpose.

---

# 7. Destructure Props

❌ Bad

```jsx
function Student(props){

    return <h1>{props.name}</h1>;

}
```

✅ Good

```jsx
function Student({ name }){

    return <h1>{name}</h1>;

}
```

Destructuring improves readability.

---

# 8. Keep Components Small

❌ One Component

```
1000+ Lines
```

✅ Better

```
Navbar

Sidebar

Footer

ProductCard

LoginForm
```

Small components are easier to maintain.

---

# 9. Use Conditional Rendering Properly

Use the ternary operator.

```jsx
{
isLoggedIn

?

<Dashboard/>

:

<Login/>

}
```

Use `&&` when rendering something only if a condition is true.

```jsx
{
isAdmin &&

<DeleteButton/>

}
```

---

# 10. Render Lists Correctly

Always use

```jsx
map()
```

Example

```jsx
students.map(student=>

<li key={student.id}>

{student.name}

</li>

)
```

---

# 11. Use Unique Keys

❌ Bad

```jsx
key={index}
```

✅ Better

```jsx
key={student.id}
```

Stable keys help React efficiently update the UI.

Use the array index only for static lists that never change order.

---

# 12. Avoid Inline Styles

❌

```jsx
<h1
style={{color:"red"}}
>
```

✅

```jsx
<h1
className="title"
>
```

Inline styles are acceptable for dynamic values, but reusable styling should be handled with CSS Modules, Tailwind CSS, or standard CSS classes.

---

# 13. Avoid Deep Nesting

❌ Bad

```jsx
<div>

<div>

<div>

<div>

<Card/>

</div>

</div>

</div>

</div>
```

✅ Better

```jsx
<section>

<Card/>

</section>
```

Deep nesting reduces readability.

---

# 14. Use Semantic HTML

Instead of

```jsx
<div>

<div>

<div>

</div>

</div>

</div>
```

Use

```jsx
<header>

<main>

<section>

<article>

<footer>
```

Semantic HTML improves accessibility and SEO.

---

# 15. Write Accessible JSX

Always provide

### alt

```jsx
<img

src={image}

alt="Student Profile"

/>
```

### Labels

```jsx
<label htmlFor="email">

Email

</label>

<input id="email"/>
```

### Buttons

Instead of

```jsx
<button>

Click

</button>
```

Write meaningful labels.

```jsx
<button>

Submit Form

</button>
```

---

# 16. Avoid Code Duplication

❌ Bad

```jsx
<Card/>

<Card/>

<Card/>
```

Instead

```jsx
products.map(product=>

<ProductCard

key={product.id}

product={product}

/>

)
```

Reusable components reduce duplicate code.

---

# 17. Organize JSX Properly

Recommended order

```
Imports

↓

Variables

↓

Functions

↓

Return JSX

↓

Export
```

Example

```jsx
import "./App.css";

function App(){

const name="Vinay";

function greet(){

alert("Hello");

}

return(

<h1>

{name}

</h1>

);

}

export default App;
```

---

# 18. Performance Best Practices

- Use stable keys.
- Avoid unnecessary wrapper elements.
- Avoid expensive calculations inside JSX.
- Move business logic outside the `return` statement.
- Split large components into smaller reusable components.
- Memoize expensive computations with `useMemo` only when profiling shows it is beneficial.
- Memoize callbacks with `useCallback` only when necessary (for example, when passing callbacks to memoized child components).

---

# Common Mistakes

### Using index as key

```jsx
key={index}
```

Prefer

```jsx
key={id}
```

---

### Writing complex expressions

```jsx
{

students.filter().map().sort()

}
```

Move logic outside JSX.

---

### Huge Components

```
App.jsx

1500 Lines
```

Break it into

```
Navbar

Hero

Sidebar

Footer

Card

Form
```

---

### Missing alt

```jsx
<img src="react.png"/>
```

Better

```jsx
<img

src="react.png"

alt="React Logo"

/>
```

---

# Real World Example

```jsx
function StudentCard({ student }) {

    return (

        <article className="student-card">

            <img
                src={student.image}
                alt={student.name}
            />

            <h2>{student.name}</h2>

            <p>{student.course}</p>

            {
                student.isPlaced

                ?

                <span>

                    ✅ Placed

                </span>

                :

                <span>

                    ❌ Not Placed

                </span>

            }

        </article>

    );

}

export default StudentCard;
```

This example demonstrates:

- Clean JSX
- Semantic HTML
- Props destructuring
- Conditional rendering
- Accessibility
- Readability
- Reusability

---

# Summary

- Write clean and readable JSX.
- Keep components small and reusable.
- Use meaningful names for variables and components.
- Prefer Fragments instead of unnecessary `<div>` elements.
- Keep business logic outside JSX.
- Always use unique keys while rendering lists.
- Prefer CSS classes over inline styles for reusable styling.
- Write semantic and accessible HTML.
- Organize files and components consistently.
- Follow industry coding standards to build scalable React applications.

---

# Interview Questions

### Beginner

1. What are JSX Best Practices?
2. Why should components return one parent element?
3. Why should we use Fragments?
4. Why are meaningful names important?
5. Why should components be small?

---

### Intermediate

6. Why should business logic stay outside JSX?
7. Why are unique keys important?
8. Why is semantic HTML recommended?
9. What are the benefits of reusable components?
10. When should inline styles be used?

---

### Advanced

11. How do JSX best practices improve application performance?
12. How do best practices improve maintainability?
13. Explain accessibility best practices in React.
14. Why should large components be split?
15. What practices make React applications scalable?

---

# Practice Questions

### Question 1

Refactor a component with 300 lines into smaller reusable components.

---

### Question 2

Replace unnecessary `<div>` elements with Fragments.

---

### Question 3

Render a product list using `map()` with proper keys.

---

### Question 4

Convert a component using `props.name` into one that uses destructuring.

---

### Question 5

Create a semantic webpage using:

- `header`
- `main`
- `section`
- `article`
- `footer`

---

# Key Takeaways

- Clean JSX is easier to read, debug, and maintain.
- Write small, reusable components with meaningful names.
- Keep complex logic outside the JSX returned by your component.
- Use Fragments, semantic HTML, and accessibility features appropriately.
- Prefer CSS classes for reusable styling and reserve inline styles for dynamic values.
- Follow consistent coding standards to build scalable, production-ready React applications.