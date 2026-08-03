function uploadImage(){

    return new Promise((resolve)=>{

        console.log("Uploading Image...");

        setTimeout(()=>{

            resolve("Upload Complete");

        },3000);

    });

}

uploadImage()

.then(console.log);