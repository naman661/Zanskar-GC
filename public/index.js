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

app.get('',async(req,res)=>{
    const matches = await Match.find({}).sort({month: 1, date: 1, hrs: 1, mins: 1})
    const matches_today = matches.filter((m) => m.date==date1.getDate() & (date1.getMonth()+1)==m.month);
    const matches_upcoming = matches.filter((m) => m.date.month > (date1.getMonth()+1) | (m.date>date1.getDate()&(m.month-1)==date1.getMonth()));
    const data = {
        matchesToday: matches_today,
        matchesUpcoming: matches_upcoming
    };
    res.render('matches/tempo1',{data});
    
    //res.send('HERE')
})

app.listen(3000,()=>{
    console.log('APP is listening')
})