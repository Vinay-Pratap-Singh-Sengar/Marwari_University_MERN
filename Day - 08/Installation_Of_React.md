# Installing a React Application

## Prerequisites

Before creating a React application, make sure the following software is installed on your computer.

### 1. Install Node.js

Download and install the **LTS (Long Term Support)** version from:

https://nodejs.org

Node.js installation automatically installs:

- Node.js Runtime
- npm (Node Package Manager)

---

### 2. Verify Installation

Open the terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
node -v
```

Example Output

```bash
v22.17.0
```

Check npm version:

```bash
npm -v
```

Example Output

```bash
10.9.2
```

---

# Ways to Create a React Application

There are two popular ways:

1. Create React App (CRA) *(Older Approach)*
2. Vite *(Recommended & Modern Approach)*

Today, most companies prefer **Vite** because it is much faster.

---

# Method 1: Using Vite (Recommended)

## Step 1: Create the Project

```bash
npm create vite@latest
```

---

## Step 2: Enter the Project Name

Example:

```text
Project name:
react-app
```

---

## Step 3: Select Framework

Choose:

```text
React
```

---

## Step 4: Select Variant

Choose:

```text
JavaScript
```

or

```text
TypeScript
```

Most beginners should start with **JavaScript**.

---

## Step 5: Move into the Project Folder

```bash
cd react-app
```

---

## Step 6: Install Dependencies

```bash
npm install
```

or

```bash
npm i
```

This downloads all required packages listed in the **package.json** file.

---

## Step 7: Start the Development Server

```bash
npm run dev
```

Example Output:

```text
Local: http://localhost:5173/
```

Open the URL in your browser.

Congratulations! Your React application is running.

---

# Complete Installation Commands

```bash
npm create vite@latest
```

```bash
cd react-app
```

```bash
npm install
```

```bash
npm run dev
```

---

# Folder Structure

```
react-app
│
├── node_modules
├── public
├── src
│   ├── assets
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Understanding the Folder Structure

## node_modules

Contains all installed packages and dependencies.

- Automatically created after `npm install`
- Should never be modified manually
- Should not be uploaded to GitHub

---

## public

Stores static files.

Examples:

- favicon
- images
- PDF files

Files inside **public** are served directly.

---

## src

The most important folder.

Contains the application source code.

Inside this folder we write:

- Components
- CSS
- Hooks
- Pages
- Business Logic

---

## assets

Stores application resources.

Examples:

- Images
- Icons
- Logos
- Videos
- Fonts

---

## App.jsx

Main application component.

Initially contains sample React code.

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

---

## main.jsx

Entry point of the React application.

It renders the root component into the browser.

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
```

---

## index.html

The only HTML file.

Contains:

```html
<div id="root"></div>
```

React injects the entire application into this div.

---

## package.json

Contains project information.

Example:

- Project Name
- Version
- Dependencies
- Scripts

Example:

```json
{
  "name": "react-app",
  "version": "1.0.0"
}
```

---

## package-lock.json

Locks the exact versions of installed packages.

Ensures every developer installs the same dependency versions.

---

## vite.config.js

Configuration file for Vite.

Used for:

- Proxy setup
- Plugins
- Build configuration

---

## README.md

Contains project documentation.

Usually includes:

- Installation Steps
- Project Description
- Folder Structure
- Screenshots

---

# Understanding package.json Scripts

Open **package.json**

Example:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### npm run dev

Starts the development server.

```bash
npm run dev
```

---

### npm run build

Creates the production build.

```bash
npm run build
```

Output folder:

```
dist/
```

---

### npm run preview

Runs the production build locally.

```bash
npm run preview
```

---

# Method 2: Create React App (CRA)

Although still available, CRA is no longer the recommended choice for new projects.

Create a project:

```bash
npx create-react-app react-app
```

Move into the folder:

```bash
cd react-app
```

Start the application:

```bash
npm start
```

Default URL:

```
http://localhost:3000
```

---

# Vite vs Create React App

| Feature | Vite | Create React App |
|---------|------|------------------|
| Startup Speed | Very Fast | Slow |
| Hot Reload | Instant | Slower |
| Build Tool | ESBuild + Rollup | Webpack |
| Production Build | Fast | Slower |
| Current Industry Standard | ✅ Yes | ❌ Mostly Legacy |
| Recommended for New Projects | ✅ Yes | ❌ No |

---

# Common Commands

### Install a Package

```bash
npm install axios
```

or

```bash
npm i axios
```

---

### Install Multiple Packages

```bash
npm install axios react-router-dom
```

---

### Install Development Dependency

```bash
npm install -D eslint
```

---

### Remove a Package

```bash
npm uninstall axios
```

---

### Check Installed Packages

```bash
npm list
```

---

# Common Errors

## Error

```text
node is not recognized
```

### Solution

- Install Node.js
- Restart the terminal
- Verify using:

```bash
node -v
```

---

## Error

```text
npm is not recognized
```

### Solution

Reinstall Node.js or ensure Node.js is added to the system PATH.

---

## Error

```text
Port already in use
```

### Solution

Stop the process using the port or run Vite on another port.

---

# Interview Questions

1. What is Vite?
2. Why is Vite preferred over Create React App?
3. What is npm?
4. What is npx?
5. What is package.json?
6. What is package-lock.json?
7. What is node_modules?
8. Why should node_modules not be uploaded to GitHub?
9. What is the purpose of the src folder?
10. What is the purpose of main.jsx?
11. What is the role of App.jsx?
12. Why is there only one HTML file in a React application?
13. What is the purpose of the `<div id="root"></div>` element?
14. What is the difference between `npm install` and `npm create vite@latest`?
15. What is the difference between `npm run dev`, `npm run build`, and `npm run preview`?

---

# Key Takeaways

- Install **Node.js (LTS)** before creating a React project.
- **Vite** is the recommended tool for creating modern React applications.
- `npm create vite@latest` creates a new project.
- `npm install` installs project dependencies.
- `npm run dev` starts the development server.
- `main.jsx` is the entry point of the application.
- `App.jsx` is the main React component.
- `package.json` manages project metadata, scripts, and dependencies.
- `node_modules` contains installed packages and should not be committed to GitHub.