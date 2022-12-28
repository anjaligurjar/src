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
 module.exports= mongoose.model("admin",adminSchema)




