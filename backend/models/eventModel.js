const mongoose = require('mongoose');

const Schema = mongoose.Schema

const eventSchema = new Schema({
    eventName: {
        type: String,
        default: "event_name"
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ""
    }  
});


const Event = mongoose.model('event',eventSchema);

module.exports = {Event};