function withdraw(balance, amount){

    return new Promise((resolve,reject)=>{

        if(balance>=amount){
            resolve("Cash Withdrawn");
        }
        else{
            reject("Insufficient Balance");
        }

    });

}

withdraw(10000,3000)

.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
});