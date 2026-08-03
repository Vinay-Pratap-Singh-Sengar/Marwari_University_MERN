function placeOrder(stock){

    return new Promise((resolve,reject)=>{

        console.log("Checking Stock...");

        setTimeout(()=>{

            if(stock){
                resolve("Order Confirmed");
            }
            else{
                reject("Product Out of Stock");
            }

        },2000);

    });

}

placeOrder(true)

.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
});