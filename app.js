const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const {blogs,Contacts} = require('./mongoInstance.js');
const multer = require('multer')
var bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios')

const app = express();

const index = path.join(__dirname,'/index.html')
const blogData = path.join(__dirname,'/blogData.html')
const blogPost = path.join(__dirname,'/blogPost.html')
const contact = path.join(__dirname,'/contact.html')
const about = path.join(__dirname,'/about.html')
const login = path.join(__dirname,'/login.html')
const signup = path.join(__dirname,'/signup.html')


const dbInstance = blogs;
app.use(express.static(__dirname+"/static"))
app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// 
// dbInstance.Create()


// Step 5 - set up multer for storing uploaded files
const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + "--"+ file.originalname)
    }
})
const upload = multer({storage:fileStorageEngine})

app.get('/',(req,res)=>{
    
    res.sendFile(index);
})

const retruve = async()=>{
    // console.time("Starting the time")
    const start = Date.now();
    const data = await dbInstance.find({});
    const end = Date.now();
        // console.log("Start "+start+" End "+end);
    return data;
}
const retriveData = async() => {
    const startTime = Date.now();
    const data = await retruve();
    // console.log(data)
    const endTime = Date.now();
    
    const timeTaken = endTime - startTime;
    
    // console.log(`Result of addition = ${res}`);
    console.log(`Time taken to perform addition =
            ${timeTaken} milliseconds`);
    return data;
  }

// app.post("/admin/blogData",upload.single("image"),(req,res)=>{
//     res.sendFile()
// })
// app.use(express.static("./static"))
app.route("/admin/blogData")
.get((req,res)=>{
    res.status(200).sendFile(blogData);
})
.post(upload.single("image"),(req,res)=>{
    const data = req.body;
    // console.log(req.body);
    const obj = {
        title:data.title,
        author:data.author,
        img:{
            data:fs.readFileSync(path.join(__dirname+"/uploads/"+req.file.filename)),
            contentType:'image/png'
        },
        para1:data.para1,
        para2:data.para2,
        para3:data.para3,
        para4:data.para4
    }
    console.log("OBJ "+obj);
    dbInstance.create(obj,(err,item)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Date is added");
        }
    })
    res.status(201).json({success:true})
})

app.route('/data')
.get(async(req,res)=>{
    try{
        const data = await retriveData();
        // console.log(data);
        res.json({success:true,data:data})
    }
    catch(e){
        console.log(e);
        res.json({success:false});
    }
})
// .get('/data/')

app.route('/blog/:id')
.get((req,res)=>{
    const id = req.params.id;
    console.log(req.params.id);
    
    res.sendFile(blogPost);
})
.post(async(req,res)=>{
    const id = req.params.id;
    try{
        // console.log(data.)
        let newId =""
        for(let i=0;i<id.length;i++){
            if(id[i]=='_'){
                break;
            }
            newId+=id[i];
        }
        console.log(newId);
        const blogData = await dbInstance.find({_id:newId});
        // console.log("Blog Data "+blogData);
        res.json({success:true,data:JSON.stringify(blogData)});
    }
    catch(e){
        console.log(e);
        res.json({success:false});
    }
})

app.route('/contact')
.get((req,res)=>{

    res.sendFile(contact);

})
.post(bodyParser.json(),(req,res)=>{
    const body = req.body;
    console.table(body);

    Contacts.create(body,(err,item)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Contact data is added");
        }
    })
    res.status(201).json({success:true,data:JSON.stringify(body)});
})


app.get('/about',(req,res)=>{
    res.sendFile(about);
})

app.get('/login',(req,res)=>{
    res.sendFile(login);
})

app.get('/signup',(req,res)=>{
    res.sendFile(signup);
})

app.listen('3000',()=>{
    console.log(`Listening on port ${3000}`)
})