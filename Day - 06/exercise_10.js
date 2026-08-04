function bookCab(driverAvailable){
    return new Promise((resolve,reject)=>{
        console.log("Searching Driver...");
        setTimeout(()=>{
            if(driverAvailable){
                resolve("Driver Found");
            }
            else{
                reject("No Driver Available");
            }
        },3000);
    });
}

bookCab(true)

.then(console.log)

.catch(console.log);