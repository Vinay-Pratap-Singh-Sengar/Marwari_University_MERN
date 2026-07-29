# Dynamic Theme Change Project

This project demonstrates how JavaScript can interact with HTML elements and change the webpage style dynamically using DOM manipulation.

---

## Version 1: Changing CSS Directly Using JavaScript

### Concept

In this approach, JavaScript directly changes the CSS properties of HTML elements.

JavaScript can access HTML elements using DOM methods and modify their styles.

### How it works:

1. Select the HTML element using `getElementById()`.
2. Create a function that contains the style changes.
3. Add a click event to the button.
4. When the button is clicked, JavaScript changes the CSS properties.

### Example:

```javascript
body.style.backgroundColor = "black";
body.style.color = "white";