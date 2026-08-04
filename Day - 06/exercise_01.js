function downloadFile() {
    return new Promise((resolve) => {

        console.log("Downloading File...");

        setTimeout(() => {
            resolve("File Downloaded");
        },3000);

    });
}

downloadFile().then((message)=>{
    console.log(message);
});