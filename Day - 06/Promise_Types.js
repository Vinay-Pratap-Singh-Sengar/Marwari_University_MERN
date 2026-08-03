const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1,p2,p3])

.then((result)=>{

    console.log(result);

});
// Real-life examples:

// Load user profile + notifications + messages together.
// Fetch products + categories + offers in parallel.
// Load dashboard widgets simultaneously.


const p4 = new Promise(resolve=>{
    setTimeout(()=>resolve("Server 1"),3000);
});

const p5 = new Promise(resolve=>{
    setTimeout(()=>resolve("Server 2"),1000);
});

Promise.race([p4,p5])

.then(console.log);


// Real-life examples:

// Multiple servers.
// Fastest CDN.
// API timeout strategy.