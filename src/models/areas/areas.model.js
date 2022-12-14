const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreasSchema = new Schema({
    x: {
        type: Number
    },

    y: {
        type: Number
    },

    width: {
        type: Number
    },

    height: {
        type: Number
    },

    backgroundImage: {
        type: String
    },

    isNotClickable: {
        type: Boolean,
        default: false
    },

    costPerHour: {
        type: Number
    },

    status: {
        type: String,
        enum: ['free', 'occupied'],
        default: 'free'
    },

    capacity: {
        type: Number
    },

    available: {
        type: Boolean,
        default: true
    },

    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reservations' 
        }
    ],

    name: {
        type: String
    }
});

const Areas = mongoose.model('areas', AreasSchema);

module.exports = Areas;