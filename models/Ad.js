const mongoose = require('mongoose');
const Ad = mongoose.model('Ad', new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    category: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        require: true
    },
    picture: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}))

module.exports =  Ad;
