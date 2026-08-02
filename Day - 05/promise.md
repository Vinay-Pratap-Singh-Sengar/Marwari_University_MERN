# 📘 JavaScript Promises

## 📖 Learning Objectives

After completing this topic, you will be able to:

- Understand what a Promise is.
- Learn Promise states.
- Create Promises.
- Use `resolve()` and `reject()`.
- Handle Promises using `.then()`, `.catch()`, and `.finally()`.
- Understand Promise Chaining.
- Solve Callback Hell using Promises.

---

# 📑 Table of Contents

1. What is a Promise?
2. Promise States
3. Creating a Promise
4. `.then()`
5. `.catch()`
6. `.finally()`
7. Promise Chaining
8. Real-Life Example
9. Promise vs Callback
10. Summary
11. Interview Questions
12. Practice Questions

---

# 1. What is a Promise?

A **Promise** is an object that represents the eventual result of an asynchronous operation.

A Promise can either:

- Return a successful result.
- Return an error.

---

# 2. Promise States

Every Promise has three states.

```text
           Promise
               │
      ┌────────┴────────┐
      │                 │
   Pending          Settled
                    │
         ┌──────────┴──────────┐
         │                     │
   Fulfilled              Rejected
   resolve()              reject()
```

---

# 3. Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Something Went Wrong");
    }

});
```

### Explanation

- `resolve()` is called when the task succeeds.
- `reject()` is called when the task fails.

---

# 4. `.then()`

`.then()` executes when the Promise is fulfilled.

```javascript
new Promise((resolve) => {

    resolve("Data Received");

})
.then((data) => {

    console.log(data);

});
```

### Output

```
Data Received
```

---

# 5. `.catch()`

`.catch()` executes when the Promise is rejected.

```javascript
new Promise((resolve, reject) => {

    reject("Network Error");

})
.catch((error) => {

    console.log(error);

});
```

### Output

```
Network Error
```

---

# 6. `.finally()`

`.finally()` executes whether the Promise is resolved or rejected.

```javascript
new Promise((resolve) => {

    resolve("Success");

})
.then((result) => {

    console.log(result);

})
.finally(() => {

    console.log("Request Completed");

});
```

### Output

```
Success
Request Completed
```

---

# 7. Promise Chaining

Multiple `.then()` methods can be chained together.

```javascript
new Promise((resolve) => {

    resolve(10);

})
.then((num) => {

    console.log(num);

    return num * 2;

})
.then((num) => {

    console.log(num);

    return num * 2;

})
.then((num) => {

    console.log(num);

});
```

### Output

```
10
20
40
```

---

# 8. Real-Life Example

```javascript
function orderFood() {

    return new Promise((resolve) => {

        console.log("Preparing Food...");

        setTimeout(() => {

            resolve("Food Delivered");

        }, 3000);

    });

}

orderFood()

.then((message) => {

    console.log(message);

})

.finally(() => {

    console.log("Thank You!");

});
```

### Output

```
Preparing Food...

(after 3 seconds)

Food Delivered

Thank You!
```

---

# 9. Promise vs Callback

| Callback | Promise |
|----------|---------|
| Nested callbacks | Flat structure |
| Difficult to read | Easy to read |
| Difficult to debug | Easier to debug |
| Can lead to Callback Hell | Solves Callback Hell |

---

# 10. Summary

| Method | Purpose |
|---------|---------|
| `resolve()` | Marks a Promise as successful |
| `reject()` | Marks a Promise as failed |
| `.then()` | Handles success |
| `.catch()` | Handles errors |
| `.finally()` | Runs regardless of success or failure |

---

# 11. Interview Questions

1. What is a Promise?
2. What are the three states of a Promise?
3. Difference between `resolve()` and `reject()`?
4. What is `.then()`?
5. What is `.catch()`?
6. What is `.finally()`?
7. What is Promise Chaining?
8. How do Promises solve Callback Hell?

---

# 12. Practice Questions

1. Create a Promise that resolves after 2 seconds.
2. Create a Promise that rejects with an error message.
3. Use `.then()` to print success.
4. Use `.catch()` to handle an error.
5. Use `.finally()` to print "Process Completed".
6. Create a food ordering Promise.
7. Create a login → profile → orders flow using Promise Chaining.