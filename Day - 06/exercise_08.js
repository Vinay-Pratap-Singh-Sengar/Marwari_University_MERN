
const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"Rahul",
                course:"MERN"
            });
        },2000);
});

promise.then((data)=>{
    console.log(data)
})




// function getStudent(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 id:1,
//                 name:"Rahul",
//                 course:"MERN"
//             });
//         },2000);
//     });
// }

// getStudent()

// .then((student)=>{
//     console.log(student);
// });

