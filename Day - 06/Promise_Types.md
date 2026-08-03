# Promise.all() and Promise.race()

This lesson explains two important Promise methods in JavaScript:

- `Promise.all()`
- `Promise.race()`

These methods are commonly used when working with multiple asynchronous operations.

---

# 1. Promise.all()

## Definition

`Promise.all()` executes multiple promises **at the same time** and waits until **all of them are completed successfully**.

If every promise is resolved, it returns an array containing all resolved values.

If **any one promise is rejected**, the entire `Promise.all()` is rejected immediately.

---

## Syntax

```javascript
Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

## Example

```javascript
const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])

.then((result) => {
    console.log(result);
});
```

### Output

```javascript
["HTML", "CSS", "JavaScript"]
```

---

## How It Works

```
Promise 1 ──✔

Promise 2 ──✔

Promise 3 ──✔

        │

        ▼

Promise.all()

        │

        ▼

["HTML", "CSS", "JavaScript"]
```

---

## Real-Life Use Cases

### 1. Load User Dashboard

- User Profile
- Notifications
- Messages

All three API calls are executed together before displaying the dashboard.

---

### 2. E-Commerce Website

Load:

- Products
- Categories
- Offers

All data is fetched simultaneously to improve performance.

---

### 3. Admin Dashboard

Load:

- Users
- Sales Report
- Analytics

The dashboard is displayed only after all data is available.

---

### 4. Social Media App

Fetch:

- Posts
- Stories
- Friend Suggestions

Everything loads together.

---

### 5. Student Portal

Load:

- Student Details
- Attendance
- Marks

Display the complete profile after all requests finish.

---

# 2. Promise.race()

## Definition

`Promise.race()` executes multiple promises together but returns the result of the **first promise that settles** (either resolved or rejected).

The remaining promises continue running, but their results are ignored.

---

## Syntax

```javascript
Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

## Example

```javascript
const p4 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 1"), 3000);
});

const p5 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 2"), 1000);
});

Promise.race([p4, p5])

.then((result) => {
    console.log(result);
});
```

### Output

```javascript
Server 2
```

---

## How It Works

```
Server 1 -----------3 sec

Server 2 ----1 sec ✔

        │

        ▼

Promise.race()

        │

        ▼

Server 2
```

---

## Real-Life Use Cases

### 1. Fastest Server Response

Send requests to multiple servers and use whichever responds first.

---

### 2. CDN (Content Delivery Network)

Load files from multiple CDNs and use the fastest one.

---

### 3. API Timeout

If the API takes too long, return a timeout response.

---

### 4. GPS Location

Use the first available location source.

---

### 5. Search Suggestions

Display suggestions from the fastest available search service.

---

# Difference Between Promise.all() and Promise.race()

| Promise.all() | Promise.race() |
|---------------|----------------|
| Waits for all promises | Returns the first settled promise |
| Returns an array of results | Returns a single result |
| Rejects if any promise rejects | Settles as soon as one promise settles |
| Used when every task is required | Used when only the fastest result is needed |

---

# Interview Questions

### 1. What is `Promise.all()`?

### 2. What happens if one promise is rejected in `Promise.all()`?

### 3. What does `Promise.all()` return?

### 4. What is `Promise.race()`?

### 5. Does `Promise.race()` wait for all promises?

### 6. Which method is used for loading multiple APIs together?

### 7. Which method is used to get the fastest server response?

### 8. Can `Promise.race()` return a rejected promise?

### 9. What is the main difference between `Promise.all()` and `Promise.race()`?

### 10. Give two real-world use cases of `Promise.all()` and `Promise.race()`.

---

# Practice Exercise

## Task 1

Create three promises that resolve after different time intervals using `Promise.all()`.

Expected Output:

```javascript
["HTML", "CSS", "JavaScript"]
```

---

## Task 2

Create two promises where one resolves after **5 seconds** and another after **2 seconds** using `Promise.race()`.

Expected Output:

```javascript
Second Promise
```

---

## Learning Outcome

After completing this lesson, you will be able to:

- Create multiple promises.
- Execute promises in parallel using `Promise.all()`.
- Execute multiple promises and get the fastest result using `Promise.race()`.
- Identify real-world scenarios where each method should be used.
- Answer common interview questions related to `Promise.all()` and `Promise.race()`.