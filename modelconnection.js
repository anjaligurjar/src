const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');

exports.Users= new schema({
id:{
type:number
},
email:{
type:string
},
name:{
   type:string

},
role:{

   type:string
},
profilepic:{

}



})
 const User= mongoose.model('User',Schema)



