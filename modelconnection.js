const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');
const Schema= mongoose.Schema
const UserSchema = Schema({

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

},
   date:{
      type:Date



})

Post.find()
    .then(p => console.log(p))
    .catch(error => console.log(error))
 module.exports= mongoose.model("user",userSchema)




