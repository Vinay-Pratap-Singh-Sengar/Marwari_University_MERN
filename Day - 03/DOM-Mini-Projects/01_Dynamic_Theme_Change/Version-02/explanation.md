---

# Version 2: Changing Theme Using CSS Class Toggle

## Concept

In this approach, instead of changing CSS properties directly using JavaScript, we create a CSS class and use JavaScript to add or remove that class.

This is a cleaner and more professional way to handle themes because all styling remains inside CSS and JavaScript only controls the class.

---

## How it works:

1. Create a CSS class for the dark theme.

Example:

```css
.dark {
    background-color: black;
    color: white;
}
```

2. Select the HTML element using DOM methods.

Example:

```javascript
const body = document.getElementById("bdy");
```

3. Add a click event to the button.

Example:

```javascript
btn.addEventListener("click", function(){

});
```

4. Use `classList.toggle()` to add or remove the theme class.

Example:

```javascript
body.classList.toggle("dark");
```

---

## Working Flow:

Before clicking the button:

```
Normal Theme
```

After clicking the button:

```
.dark class is added
        ↓
Dark Theme Applied
```

Clicking again:

```
.dark class is removed
        ↓
Normal Theme Returned
```

---

## Complete Code:

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <title>Theme Toggle</title>

    <style>

        body {
            font-family: Arial;
            text-align: center;
            margin-top: 100px;
            transition: 0.5s;
        }


        .dark {
            background-color: black;
            color: white;
        }


        button {
            padding: 10px 20px;
            cursor: pointer;
        }

    </style>

</head>


<body id="bdy">

    <h1>Theme Toggle</h1>

    <button id="btn">
        Change Theme
    </button>


    <script>

        const body = document.getElementById("bdy");
        const btn = document.getElementById("btn");


        btn.addEventListener("click", function(){

            body.classList.toggle("dark");

        });


    </script>


</body>

</html>
```

---

## What Students Learn:

✅ DOM Selection  
✅ Event Handling  
✅ CSS Class Manipulation  
✅ `classList.toggle()`  
✅ Dynamic Theme Switching  
✅ Better code organization  

---

## Why Version 2 is Better?

| Version 1 | Version 2 |
|-----------|-----------|
| JavaScript changes CSS directly | JavaScript controls CSS classes |
| More style code in JavaScript | Styling stays inside CSS |
| Difficult to manage multiple themes | Easy to add more themes |
| Good for learning basics | Used in real-world applications |

---

## Learning Progress:

```
HTML
  ↓
DOM Selection
  ↓
Change CSS using JavaScript
  ↓
CSS Class Manipulation
  ↓
Dynamic UI Development
```