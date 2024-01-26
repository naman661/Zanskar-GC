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

const date1 = new Date();
app.get('/matches',async(req,res)=>{
    const matches = await Match.find({})
    const matches_today = matches.filter((m) => m.date.getDate()==date1.getDate() & m.date.getMonth()==date1.getMonth());
    const matches_upcoming = matches.filter((m) => m.date.getMonth() > date1.getMonth() | (m.date.getDate()>date1.getDate()&m.date.getMonth()==date1.getMonth()));
    const data = {
        matchesToday: matches_today,
        matchesUpcoming: matches_upcoming
    };
    res.render('matches/index',{data});
    
    //res.send('HERE')
})

app.listen(3000,()=>{
    console.log('APP is listening')
})