const express = require('express');
const mongoose = require('./src/models/modelconnection');

const usermodel = require('./src/models/user');
const postuser = require('./src/models/usercon');


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.use('/register', (req, res) => {
  const user = new usermodel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role:req.body.role
  })
  user.save().then(() => {
    res.json({
      user
    })

  })
})



//app.get('/Users', usercon.getuser)
app.get('/Users', postuser)
app.post('/login', (res, req) => {
User.findOne({ where: { email: req.body.email } 
}).then((result) => {;
  console.log(result)
  res.json(result)
                     app.post('/date', (res, req) => {
User.update({ where: { date: req.body.date } 
}).then((result) => {;
  console.log(result)
  res.json(result)



})
User.update( { where: firstname==''}).then((data)=>{
  console.log(data)
  res.json(data)
})

})

app.listen(3000, () => {
  console.log("server is connected")
})
