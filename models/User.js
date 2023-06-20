const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema ({
    name: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type:String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

module.exports = User;

