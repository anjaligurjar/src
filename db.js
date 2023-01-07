const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
   ssl: false,
}).then(()=>{
    console.log('mongodb is conneted')
}).catch((error)=>{
    console.error(error);
})
