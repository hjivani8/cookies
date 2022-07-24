const express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send('welcome to express app');
});

let users = {
    name : "Harsh",
    Age : "18"
}

app.get('/setuser', (req, res)=>{
    res.cookie("userData", users);
    res.send('user data added to cookie');
});

app.get('/getuser', (req, res)=>{
    //shows all the cookies
    res.send(req.cookies);
});

app.listen(8000);
