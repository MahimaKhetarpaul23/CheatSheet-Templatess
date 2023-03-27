const express = require('express');
const app = express();
const fs = require('fs');
const port=80;
app.set('view engine', 'pug');
app.set('views','./views');
// To get form data:
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.status(200).render('signUpForm.pug');
})

app.post('/',(req,res)=>{
    console.log(req.body);
    let name = req.body.name;
    let mail = req.body.mail;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    console.log(name);
    console.log("HELLO");
    fs.writeFileSync('output.txt',`Name : ${name} , Mail is ${mail} , Password is ${password} , confirm Password is ${confirmPassword}`);
    res.status(200).render('signUpForm.pug');
})

app.listen(port,()=>{
    console.log(`The server started successfully at port ${port}.`);
})