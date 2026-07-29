# 📘 DOM Manipulation - Day 1

## 🎯 Objective

In this session, we learned the basics of the **Document Object Model (DOM)** and how JavaScript can interact with HTML elements.

The DOM allows JavaScript to:

- Access HTML elements
- Read and modify content
- Change CSS styles
- Respond to user actions (events)

---

# 📚 Topics Covered

## 1. Understanding the `document` Object

```javascript
console.log(document);
console.dir(document);
```

The `document` object represents the entire HTML page and acts as the entry point for DOM manipulation.

---

## 2. Accessing Different Parts of the Document

```javascript
document.head;
document.body;
document.title;
```

These properties are used to access different sections of the webpage.

| Property | Description |
|----------|-------------|
| `document.head` | Returns the `<head>` section of the document |
| `document.body` | Returns the `<body>` section of the document |
| `document.title` | Gets or sets the title of the webpage |

---

## 3. Selecting Elements by Tag Name

```javascript
document.getElementsByTagName("p");
```

Returns all `<p>` elements as an **HTMLCollection**.

---

## 4. Selecting Elements by ID

```javascript
document.getElementById("para1");
```

Returns the HTML element with the specified `id`.

---

## 5. Changing CSS Using JavaScript

```javascript
para1.style.color = "pink";
```

JavaScript can dynamically modify CSS properties using the `style` property.

---

## 6. Functions in JavaScript

```javascript
function changeColor() {
    para1.style.color = "blue";
}
```

Functions help organise code and make it reusable.

---

## 7. Event Listeners

```javascript
btn.addEventListener("click", changeColor);
```

`addEventListener()` listens for user actions such as clicks, keyboard events, mouse movements, and more.

In this example, clicking the button changes the paragraph colour to blue.

---

# 📖 Concepts Learned

- HTML DOM
- `document` object
- `console.log()`
- `console.dir()`
- `document.head`
- `document.body`
- `document.title`
- `getElementById()`
- `getElementsByTagName()`
- CSS manipulation using JavaScript
- Functions
- Events
- `addEventListener()`

---

# 📂 Project Structure

```
DOM-Day-01/
│
├── index.html
├── README.md
└── screenshots/
    └── output.png
```

---

# 📸 Expected Output

- The webpage displays:
  - A heading
  - Two paragraphs
  - A hyperlink
  - A button

- Initially, the first paragraph is **red** (using inline CSS).
- When the page loads, JavaScript changes the paragraph colour to **pink**.
- Clicking the **Change Paragraph Color** button changes the colour to **blue**.

---

# 🚀 Learning Outcomes

After completing this exercise, students will be able to:

- Understand the Document Object Model (DOM)
- Access different parts of an HTML document
- Select elements using IDs and tag names
- Modify CSS dynamically using JavaScript
- Create reusable JavaScript functions
- Handle user events using `addEventListener()`
- Connect JavaScript with HTML for interactive webpages

---

# 📌 Homework Assignment – DOM Mini Projects

Now that you've learned the fundamentals of **DOM Manipulation**, complete the following mini projects using the concepts covered in class.

> **Instructions**
>
> - Build each project from scratch.
> - Use **HTML**, **CSS**, and **JavaScript** only.
> - Do not copy the solution directly.
> - Focus on understanding the DOM concepts learned in class.

---

# 📝 Project 1: Live Text Editor

## 🎯 Objective

Create a webpage where the displayed text updates instantly as the user types.

### Requirements

- Create an input field.
- Display the entered text below the input field.
- Show **"Guest"** when the input field is empty.
- Update the text in real time without refreshing the page.

### Concepts to Practice

- DOM Selection
- `getElementById()`
- `addEventListener()`
- `input` Event
- `textContent`
- Dynamic Content Update

---

# 👤 Project 2: Interactive Profile Card

## 🎯 Objective

Build an interactive profile card using JavaScript DOM.

### Requirements

- Display:
  - Name
  - Profession
- Add a button to change the profile name.
- Add a button to change the card background colour.
- Add a button to display a welcome message.

### Concepts to Practice

- DOM Selection
- Event Handling
- CSS Manipulation
- `textContent`
- `style` Property

---

# 👁️ Project 3: Password Visibility Toggle

## 🎯 Objective

Create a password field where users can show or hide their password.

### Requirements

- Add a password input field.
- Create a **Show Password** button.
- Clicking the button should:
  - Show the password.
  - Change the button text to **Hide Password**.
- Clicking again should hide the password and restore the original button text.

### Concepts to Practice

- DOM Selection
- Event Handling
- Conditional Statements (`if...else`)
- Changing HTML Attributes
- `textContent`

---

# 🔢 Project 4: Counter Application

## 🎯 Objective

Build a simple counter application.

### Requirements

- Display the counter value.
- Create:
  - ➕ Increment button
  - ➖ Decrement button
  - 🔄 Reset button
- Prevent the counter from going below **0**.

### Concepts to Practice

- Variables
- DOM Selection
- Event Handling
- Conditional Statements (`if...else`)
- `textContent`

---

# 📚 Overall Concepts Covered

By completing these projects, you will gain hands-on experience with:

- HTML DOM
- `document` Object
- `getElementById()`
- `addEventListener()`
- `input` Event
- `click` Event
- `textContent`
- `style` Property
- HTML Attribute Manipulation
- Variables
- Functions
- Conditional Statements (`if...else`)
- Dynamic Content Updates
- Interactive User Interfaces

---

# 🎯 Submission Guidelines

Create the following project structure:

```
DOM-Mini-Projects/
│
├── 01-Live-Text-Editor/
│   ├── index.html
│   └── README.md
│
├── 02-Interactive-Profile-Card/
│   ├── index.html
│   └── README.md
│
├── 03-Password-Visibility-Toggle/
│   ├── index.html
│   └── README.md
│
├── 04-Counter-Application/
│   ├── index.html
│   └── README.md
│
└── screenshots/
```

Push all four projects to your GitHub repository.

---

## 🚀 Happy Coding!

> **Programming is learned by building. Complete each project on your own, experiment with the code, and challenge yourself to add new features beyond the requirements.**
---

# 💡 Summary

In this practical, we explored the fundamentals of DOM manipulation by selecting HTML elements, modifying their styles, creating functions, and handling button click events. These concepts form the foundation for building dynamic and interactive web applications using JavaScript.

---

## 👨‍🏫 Instructor

**Vinay Pratap Singh Sengar**  
*MERN Stack Trainer | Full Stack Developer*

---

⭐ **If this repository helped you learn DOM Manipulation, don't forget to star the repository and keep practising!**