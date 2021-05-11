const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number], //No mongo primeiro armazena logitude e depois a latitude
        required: true,
    },
});

module.exports = PointSchema;