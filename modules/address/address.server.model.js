const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    rua: {
        type: String,
        required: true
    },

    num: {
        type: Number,
        required: true
    },

    bairro: {
        type: String,
        required: true
    },

    complemento: {
        type: String
    }
});

module.exports = mongoose.model('Address', addressSchema)