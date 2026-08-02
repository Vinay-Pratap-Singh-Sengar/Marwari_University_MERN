/******************************************************************************
 * JavaScript Promises
 *
 * Topics Covered:
 * 1. Creating a Promise
 * 2. Promise States
 * 3. resolve()
 * 4. reject()
 * 5. .then()
 * 6. .catch()
 * 7. .finally()
 * 8. Real-Life Example
 *
 * Note:
 * Run one example at a time.
 ******************************************************************************/

/******************************************************************************
Example 1 : Creating a Promise

Definition:
A Promise is an object that represents the future result of an asynchronous
operation.

A Promise has three states:
1. Pending
2. Fulfilled (resolve)
3. Rejected (reject)
******************************************************************************/

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data Loaded Successfully");
  } else {
    reject("Something Went Wrong");
  }
});

console.log(promise);

/*

Output

Promise { <fulfilled>: "Data Loaded Successfully" }

*/

/******************************************************************************
Example 2 : then()

Definition:
.then() executes when the Promise is resolved.
******************************************************************************/

const promise = new Promise((resolve) => {
  resolve("Data Loaded Successfully");
});

promise.then((result) => {
  console.log(result);
});

/*

Output

Data Loaded Successfully

*/

/******************************************************************************
Example 3 : catch()

Definition:
.catch() executes when the Promise is rejected.
******************************************************************************/

const promise = new Promise((resolve, reject) => {
  reject("Network Error");
});

promise.catch((error) => {
  console.log(error);
});

/*

Output

Network Error

*/

/******************************************************************************
Example 4 : resolve() and reject()

Only one of them executes.
******************************************************************************/

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Login Successful");
  } else {
    reject("Invalid Username or Password");
  }
});

promise

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

/*

Output

Login Successful

*/

/******************************************************************************
Example 5 : finally()

Definition:
.finally() always executes,
whether the Promise is resolved or rejected.
******************************************************************************/

const promise = new Promise((resolve) => {
  resolve("Success");
});

promise

  .then((result) => {
    console.log(result);
  })

  .finally(() => {
    console.log("Request Completed");
  });

/*

Output

Success
Request Completed

*/

/******************************************************************************
Example 6 : Food Delivery

Real-Life Example of Promise
******************************************************************************/

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

/*

Output

Preparing Food...

(after 3 seconds)

Food Delivered

Thank You!

*/

/******************************************************************************
Example 7 : Promise Chaining
******************************************************************************/

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

/*

Output

10
20
40

*/


/******************************************************************************
Interview Question
******************************************************************************/

console.log("Start");

new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log("Promise");
});

console.log("End");
