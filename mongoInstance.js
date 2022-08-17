const mongoos = require('mongoose');
var mongooseTypePhone = require('mongoose-type-phone');


try {
    mongoos.connect('mongodb://localhost:27017/vedantDB');
} catch (error) {
    console.log(error);
}

const schema = mongoos.Schema({
    title:String,
    author:String,
    date:{type:Date,default:Date.now},
    img:{data:Buffer,
        contentType: String},

    para1:String,
    para2:String,
    para3:{type:String,default:null},
    para4:{type:String,default:null}
})
const contactSchema = mongoos.Schema({
    name:String,
    email:String,
    date:{type:Date,default:Date.now},
    phone:String,
    company:String,
    message:String
})
const blogs = new mongoos.model('blogs',schema);
const Contacts = new mongoos.model('Contacts',contactSchema);
module.exports = {blogs,Contacts};
