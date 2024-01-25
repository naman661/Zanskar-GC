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

app.use(express.static(path.join(__dirname,'views')));

const date1 = new Date('01/25/1994');
const date2 = new Date('01/26/2024');
app.get('/matches',async(req,res)=>{
    const matches = await Match.find({})
    const matches_temp = matches.filter((m) => m.date > date1 & m.date<date2);
    // console.log("KAALA");
    // console.log(typeof matches);
    // console.log(matches_temp)
    res.render('matches/index',{matches_temp})
    //res.send('HERE')
})

app.listen(3000,()=>{
    console.log('APP is listening')
})