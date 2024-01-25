const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Match = require('match');
mongoose.connect('mongodb://127.0.0.1:27017/ZanskarSports',{useNewUrlParser: true,useUnifiedTopology: true});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('match',async(req,res)=>{
    const matches = await Match.find({})
    console.log(matches)
    res.render('index',{matches})
})

app.listen(3000,()=>{
    console.log('BKL')
})