function login(username,password){

    return new Promise((resolve,reject)=>{

        if(username==="admin" && password==="1234"){
            resolve("Login Successful");
        }
        else{
            reject("Invalid Credentials");
        }

    });

}

login("admin","1234")

.then((message)=>{
    console.log(message);
})

.catch((error)=>{
    console.log(error);
});