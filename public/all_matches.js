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
        opponent: 'Shivalik',
        sport: 'Football',
        
        level: 'qualifier'
    },
    {
        opponent: 'Udaigiri',
        sport: 'Football',
        date: new Date('December 17, 1995 03:28:00'),
        level: 'qualifier'
    },
    {
        opponent: 'Karakoram',
        sport: 'Cricket',
        date: new Date('December 18, 1995 03:24:00'),
        level: 'qualifier'
    },
    {
        opponent: 'Shivalik',
        sport: 'Volleyball',
        date: new Date('December 19, 1995 03:24:00'),
        level: 'qualifier'
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