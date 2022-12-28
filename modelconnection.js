const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');
const Schema= mongoose.Schema
const adminUserSchema = Schema({

id:{
type:number
},
email:{
type:String
},
name:{
   type:String

},
role:{

   type:String
},
profilepic:{

}



})

 
// Query to find and show all the posts
Post.find()
    .then(p => console.log(p))
    .catch(error => console.log(error))
 module.exports= mongoose.model("admin",adminSchema)




