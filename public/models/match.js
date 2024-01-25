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
        type: Date,
        required: true, 
    },  
    level: {
        type: String,
        required: true,
    }
})

const Match = mongoose.model('Match',matchSchema);
module.exports = Match;