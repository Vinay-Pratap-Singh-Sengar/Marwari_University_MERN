function applyLoan(cibil){

    return new Promise((resolve,reject)=>{

        if(cibil>=750){
            resolve("Loan Approved");
        }
        else{
            reject("Loan Rejected");
        }

    });

}

applyLoan(780)

.then(console.log)

.catch(console.log);