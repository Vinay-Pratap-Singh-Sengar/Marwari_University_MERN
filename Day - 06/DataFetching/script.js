/******************************************************************************
 * JavaScript Fetch API
 *
 * Topics Covered:
 * 1. fetch()
 * 2. Response Object
 * 3. response.json()
 * 4. Display API Data
 * 5. Loop Through API Data
 * 6. Error Handling using catch()
 *
 * API Used:
 * https://jsonplaceholder.typicode.com/users
 *
 * Note:
 * Uncomment and run ONE example at a time.
 ******************************************************************************/

/******************************************************************************
Example 1 : fetch()

Definition:
The fetch() method is used to request data from a server.

Initially, fetch() returns a Promise, not the actual data.
******************************************************************************/

// const button = document.getElementById("btn");

// button.addEventListener("click", () => {

//     // fetch() immediately returns a Promise
//     const data = fetch("https://jsonplaceholder.typicode.com/users");

//     // Promise object is printed
//     console.log(data);

// });

/*

Output

Promise { <pending> }

(or fulfilled after some time)

*/

/******************************************************************************
Example 2 : Getting the Response Object

Definition:
When the request is successful,
fetch() resolves with a Response object.

The Response object does NOT contain the actual data.
******************************************************************************/

// const button = document.getElementById("btn");

// button.addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/users")

//         .then((response) => {

//             console.log(response);

//         });

// });

/*

Output

Response {
    ok: true,
    status: 200,
    ...
}

*/

/******************************************************************************
Example 3 : Convert Response into JSON

Definition:
response.json() converts the Response object
into JavaScript objects.

response.json() also returns a Promise.
******************************************************************************/

// const button = document.getElementById("btn");

// button.addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/users")

//         .then((response) => {

//             return response.json();

//         })

//         .then((users) => {

//             console.log(users);

//         });

// });

/*

Output

[
    {
        id: 1,
        name: "Leanne Graham",
        ...
    },
    ...
]

*/

/******************************************************************************
Example 4 : Display Complete Data on the Webpage

Definition:
JSON.stringify() converts JavaScript objects
into a readable string so it can be displayed.

The third parameter (2) formats the output nicely.
******************************************************************************/

// const button = document.getElementById("btn");
// const output = document.getElementById("output");

// button.addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/users")

//         .then((response) => {

//             return response.json();

//         })

//         .then((users) => {

//             output.innerHTML = JSON.stringify(users, null, 2);

//         });

// });

/*

Output

Entire user data is displayed inside the webpage.

*/

/******************************************************************************
Example 5 : Display Only User Names

Definition:
Instead of displaying the complete JSON,
we can loop through the array and show
only the required information.

Here we display only the user names.
******************************************************************************/

const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  // Send request to the server
  fetch("https://jsonplaceholder.typicode.com/users")
    // Convert response into JSON
    .then((response) => {
      return response.json();
    })

    // users is an array of objects
    .then((users) => {
      let result = "";

      // Loop through every user
      users.forEach((user) => {
        // Create HTML dynamically
        result += `<h3>${user.name}</h3>`;
      });

      // Display all names on the webpage
      output.innerHTML = result;
    });
});

/*

Output

Leanne Graham

Ervin Howell

Clementine Bauch

...

*/

/******************************************************************************
Example 6 : Error Handling using catch()

Definition:
If the API request fails,
.catch() executes.

This prevents the application from crashing
and allows us to display a user-friendly message.
******************************************************************************/

// const button = document.getElementById("btn");
// const output = document.getElementById("output");

// button.addEventListener("click", () => {

//     // Incorrect URL to generate an error
//     fetch("wrong-url")

//         .then((response) => {

//             return response.json();

//         })

//         .then((users) => {

//             console.log(users);

//         })

//         .catch((error) => {

//             console.log(error);

//             output.innerHTML = "Something Went Wrong";

//         });

// });

/*

Output

TypeError: Failed to fetch

Something Went Wrong

*/

/******************************************************************************
Interview Questions

1. What is the Fetch API?
2. What does fetch() return?
3. Why do we use .then() with fetch()?
4. What is the Response object?
5. Why is response.json() required?
6. Does response.json() return data or a Promise?
7. Why do we use .catch()?
8. What happens if the API URL is incorrect?
9. What is the purpose of JSON.stringify()?
10. How can we display API data dynamically on a webpage?

******************************************************************************/
