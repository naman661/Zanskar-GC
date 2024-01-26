const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    opponent: {
        type: String,
        default: 'TBD', 
    },
    sport: {
        type: String,
        required: true, 
    },    
    date: {
        type: Number,
        required: true, 
    }, 
    month: {
        type: Number,
        required: true,
    } ,
    hrs: {
        type: Number,
        required: true,
    },
    mins: {
        type: Number,
        required: true,
    },
    level: {
        type: String,
        required: true,
    }
})

const Match = mongoose.model('Match',matchSchema);
module.exports = Match;