# Fetch API using Promises

## 📌 What is Fetch API?

The **Fetch API** is a built-in JavaScript feature used to communicate with a server.

Using the Fetch API, we can:

- Get data from a server (**GET**)
- Send data to a server (**POST**)
- Update existing data (**PUT / PATCH**)
- Delete data from a server (**DELETE**)

---

# Why Do We Need Fetch API?

Suppose we have a website like:

- Amazon
- Instagram
- Facebook
- Flipkart

All the data (users, products, posts, orders, etc.) is stored on a server.

If we want to display that data in our application, we first need to send a request to the server.

JavaScript provides the **Fetch API** for this purpose.

```
Browser
    │
    │ Request
    ▼
Server
    │
    │ Response
    ▼
Browser
```

---

# Fetch API Syntax

```javascript
fetch("API_URL");
```

Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users");
```

---

# Does fetch() Return Data?

Most beginners think this code returns user data.

```javascript
const users = fetch("https://jsonplaceholder.typicode.com/users");
```

❌ Wrong

It returns a **Promise**.

Example

```javascript
const users = fetch("https://jsonplaceholder.typicode.com/users");

console.log(users);
```

Output

```
Promise { <pending> }
```

---

# Why Does fetch() Return a Promise?

Fetching data from a server takes time.

For example:

- Slow Internet
- Server Processing
- Database Query
- Large Response

JavaScript is **single-threaded**.

It cannot stop executing the remaining code while waiting for the server.

Therefore,

- fetch() immediately returns a Promise.
- JavaScript continues executing the next lines.
- Once the server responds, the Promise gets resolved.

---

# Promise States

```
                Promise
                   │
             Pending
                 │
        ┌────────┴────────┐
        │                 │
    Resolved          Rejected
```

### Pending

The request is still processing.

### Resolved (Fulfilled)

The request completed successfully.

### Rejected

The request failed.

Examples:

- Wrong URL
- No Internet
- Server Down

---

# Using .then()

Since fetch() returns a Promise, we use `.then()`.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response);
    });
```

---

# What Does the First .then() Receive?

The first `.then()` receives a **Response Object**.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response);
    });
```

The Response object contains

- Status Code
- Headers
- Response Body
- HTTP Information

It **does not** contain the actual JavaScript object.

---

# What is response.json()?

The server sends data in JSON format.

JavaScript cannot directly use that JSON response.

We convert it into a JavaScript object using

```javascript
response.json();
```

Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    });
```

---

# Does response.json() Return Data?

❌ No.

It returns another Promise.

Because converting JSON into a JavaScript object is also an asynchronous operation.

---

# Why Do We Need Another .then()?

Since `response.json()` returns a Promise, we need another `.then()`.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    });
```

Here

- First `.then()` receives the Response object.
- response.json() converts JSON into a JavaScript object.
- Second `.then()` receives the actual user data.

---

# Error Handling using .catch()

```javascript
fetch("wrong-url")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

`.catch()` executes when

- Internet is unavailable
- API URL is wrong
- Server is down
- Promise is rejected

---

# Complete Fetch Flow

```
fetch(URL)
      │
      ▼
Returns Promise
      │
      ▼
.then(response)
      │
      ▼
Response Object
      │
      ▼
response.json()
      │
      ▼
Returns Promise
      │
      ▼
.then(data)
      │
      ▼
Actual JavaScript Object
      │
      ▼
.catch(error)
```

---

# Complete Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

# Summary

| Step | Description |
|------|-------------|
| fetch() | Sends an HTTP request |
| Return Value | Promise |
| First .then() | Receives Response Object |
| response.json() | Converts JSON into JavaScript Object |
| response.json() Return Value | Promise |
| Second .then() | Receives Actual Data |
| .catch() | Handles Errors |

---

# Interview Questions

### 1. What is Fetch API?

**Answer:**

Fetch API is a built-in JavaScript API used to communicate with a server.

---

### 2. What does fetch() return?

**Answer:**

A Promise.

---

### 3. Why does fetch() return a Promise?

**Answer:**

Because communicating with a server takes time, and JavaScript should not block execution while waiting for the response.

---

### 4. What does the first .then() receive?

**Answer:**

A Response Object.

---

### 5. What does response.json() do?

**Answer:**

It converts JSON into a JavaScript object.

---

### 6. Does response.json() return data directly?

**Answer:**

No.

It returns another Promise.

---

### 7. Why do we need another .then()?

**Answer:**

Because response.json() returns a Promise, and the second `.then()` receives the actual JavaScript object.

---

### 8. When does .catch() execute?

**Answer:**

Whenever the Promise is rejected due to:

- Wrong URL
- Network Issue
- Server Failure

---

# Key Points to Remember

- Fetch API is used to communicate with a server.
- fetch() always returns a Promise.
- The first `.then()` receives a Response object.
- response.json() converts JSON into a JavaScript object.
- response.json() also returns a Promise.
- The second `.then()` receives the actual data.
- `.catch()` handles errors.
- async/await is a cleaner syntax built on top of Promises.