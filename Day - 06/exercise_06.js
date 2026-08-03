function verifyOTP(otp){

    return new Promise((resolve,reject)=>{

        if(otp==="123456"){
            resolve("OTP Verified");
        }
        else{
            reject("Invalid OTP");
        }

    });

}

verifyOTP("123456")

.then(console.log)

.catch(console.log);