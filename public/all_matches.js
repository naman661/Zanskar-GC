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

const matches_till_friday = [
    {
        opponent: 'Girnar',
        sport: 'Cricket',
        date: 26,
        month: 1,
        hrs: 13,
        mins: 0,
        level: 'Pool Stage',
        display: "26 Jan 1:00PM"
    },
    {
        opponent: 'Shivalik',
        sport: 'Cricket',
        date: 4,
        month: 2,
        hrs: 8,
        mins: 30,
        level: 'Pool Stage',
        display: "4 Feb 8:30AM"
    },
    {
        opponent: 'Vindy',
        sport: 'Squash',
        date: 27,
        month: 1,
        hrs: 18,
        mins: 0,
        level: 'Pool Stage',
        display: "27 Jan 6:00PM"
    },
    {
        opponent: 'Aravali',
        sport: 'Squash',
        date: 31,
        month: 1,
        hrs: 18,
        mins: 0,
        level: 'Pool Stage',
        display: "31 Jan 6:00PM"
    },
    {
        opponent: 'Satpura',
        sport: 'Football',
        date: 30,
        month: 1,
        hrs: 19,
        mins: 0,
        level: 'Pool Stage',
        display: "30 Jan 7:00PM"
    },
    {
        opponent: 'Kumaon',
        sport: 'Football',
        date: 2,
        month: 2,
        hrs: 20,
        mins: 0,
        level: 'Pool Stage',
        display: "2 Feb 8:00PM"
    },
    {
        opponent: 'Vindy',
        sport: 'Football',
        date: 4,
        month: 2,
        hrs: 20,
        mins: 0,
        level: 'Pool Stage',
        display: "4 Feb 8:00PM"
    },
    {
        opponent: 'Shivalik',
        sport: 'Tennis',
        date: 29,
        month: 1,
        hrs: 18,
        mins: 45,
        level: 'Pool Stage',
        display: "29 Jan 6:45PM"
    },
    {
        opponent: 'Karakoram',
        sport: 'Hockey',
        date: 29,
        month: 1,
        hrs: 19,
        mins: 0,
        level: 'Pool Stage',
        display: "29 Jan 7:00PM"
    },
]

Match.insertMany(matches_till_friday)
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log("Validation err!!")
    console.log(err)
})



// const m = new Match({
//     opponenent: "Shivalik",
//     sport: "tennis",
//     date: Date('December 23, 1995 03:24:00'),
//     level: "qualifier"
// })

// m.save()
//     .then(m=>{
//         console.log(m)
//     })
//     .catch(err =>{
//         console.log(err)
//     })