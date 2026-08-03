function bookTicket(seats){

    return new Promise((resolve,reject)=>{

        if(seats>0){
            resolve("Ticket Booked");
        }
        else{
            reject("House Full");
        }

    });

}

bookTicket(10)

.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
});