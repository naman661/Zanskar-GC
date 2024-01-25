const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Match = require('./models/match');
mongoose.connect('mongodb://127.0.0.1:27017/ZanskarSports',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
        console.log("connection open!!!")
    })
    .catch(err => {
        console.log("OH NO error!! ")
        console.log(err)
    })

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/matches',async(req,res)=>{
    const matches = await Match.find({})
    console.log(matches)
    // res.render('index',{matches})
    res.send('HERE')
})

app.listen(3000,()=>{
    console.log('APP is listening')
})