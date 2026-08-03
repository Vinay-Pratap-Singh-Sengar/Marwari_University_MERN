// =========================================
// Fetch API - Promise Example
// =========================================

// The fetch() function is used to send an HTTP request to a server.
// It immediately returns a Promise, not the actual data.

// Example:
// fetch("https://jsonplaceholder.typicode.com/users");


// =========================================
// Example 1: fetch() returns a Promise
// =========================================

// Store the Promise returned by fetch() in a variable.

// const data = fetch("https://jsonplaceholder.typicode.com/users");

// Print the Promise object.

// console.log(data);

// Output:
// Promise { <pending> }


// =========================================
// Example 2: Access the Response Object
// =========================================

// The first .then() executes when the Promise is resolved.
// It receives a Response object from the server.

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response);
//     });


// =========================================
// What is response.json() ?
// =========================================

// The response received from the server is NOT actual JavaScript data.
// It is a Response object.
//
// response.json() converts the JSON response into a JavaScript object.
//
// IMPORTANT:
// response.json() also returns a Promise.


// =========================================
// Example 3: Get Actual Data
// =========================================

// Step 1: Send request using fetch()
// Step 2: Receive Response object
// Step 3: Convert Response into JSON
// Step 4: Receive actual JavaScript data

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // Convert Response object into JSON
//         return response.json();
//     })
//     .then((users) => {
//         // users contains the actual data returned by the API
//         console.log(users);
//     });


// =========================================
// Example 4: Error Handling using .catch()
// =========================================

// Here the URL is incorrect.
// Since the request cannot be completed,
// the Promise is rejected and .catch() executes.

fetch("wrong-url")
    .then((response) => {
        // This converts the response into JSON.
        // It will only execute if the request is successful.
        return response.json();
    })
    .then((data) => {
        // Print the actual data received from the server.
        console.log(data);
    })
    .catch((error) => {
        // Handle any error that occurs during the request.
        console.log("Error:", error);
    });


// =========================================
// Fetch API Flow
// =========================================

/*
fetch(URL)
      │
      ▼
Returns a Promise
      │
      ▼
.then(response)
      │
      ▼
response.json()
      │
      ▼
Returns another Promise
      │
      ▼
.then(data)
      │
      ▼
Actual JavaScript Object
      │
      ▼
.catch(error)
*/