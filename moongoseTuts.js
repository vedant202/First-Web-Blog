const moongose = require('mongoose');
const dbInstance = require('./mongoInstance');
// moongose.connect("mongodb://localhost:27017/vedantDB")
// const schema = moongose.Schema({
//     name:String,
//     age:Number,
//     phone:Number,
//     adderess:String,
//     date:{
//         type:Date,default: Date.now()
//     },
//     message:String
// })

// const User = moongose.model('Employees',schema);



const run = async(empData)=>{
    try {
        const employee = await User.create(empData);
        console.log(employee);  
    } catch (error) {
        
    }
}
// for(let i=0;i<30;i++){
//     const empData = {
//         name:`Vedant Dhenge ${i}`,
//         age:22,
//         phone:555555555555,
//         adderess:"New Street",
//         message:`Upload image file to mongodb using node js; In this tutorial, you will learn how to upload image file in MongoDB database using Node js + Express + mongoose. And as well as learn how to store file/image in node js + express application directory and MongoDB database + mongoose.
    
//         Upload Image File to MongoDB using Node js + Express
//         Follow the following steps to upload and store image file in MongoDB using node js:
        
//         Step 1 – Create Node Express js App
//         Step 2 – Install express body-parser mongoose Multer dependencies
//         Step 3 – Connect App to MongoDB
//         Step 4 – Create Model
//         Step 5 – Create File/Image Upload HTML Markup Form
//         Step 6 – Import Modules in App.js
//         Step 7 – Start App Server
//         `
//     }
//     run(empData);
// }

// const retriveData = async()=>{
//     return await User.find();
// }
// retriveData().then(data=>{
//     // return data;
//     console.log(data);
// });
// console.log(data)

const retruve = async()=>{
    // console.time("Starting the time")
    const start = Date.now();
    const data = await dbInstance.find({});
    const end = Date.now();
        // console.log("Start "+start+" End "+end);
    return data;
}
// retruve().then((obj)=>{
//     console.log(obj.data)
//     console.log("Result "+(obj.end-obj.start))
//     // console.log(data)
// })

// const calc = async()=>{
//     const startTime = Date.now();
//     const data = await dbInstance.find({});

//     const endTime = Date.now();
//     const timeTaken = endTime - startTime;
  
//     console.log(`Time taken to perform addition =
//             ${timeTaken} milliseconds`);
  
// }
// calc();

(async() => {
    const startTime = Date.now();
    const data = await retruve();
    console.log(data)
    const endTime = Date.now();
    
    const timeTaken = endTime - startTime;
    
    // console.log(`Result of addition = ${res}`);
    console.log(`Time taken to perform addition =
            ${timeTaken} milliseconds`);
  })();
  