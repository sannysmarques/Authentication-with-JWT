const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authSchema = new Schema({

    login: {
        type: Schema.Types.String,
        ref: 'User',
        required: true
    },

    email: {
        type: Schema.Types.String,
        ref: 'User',
        required: true
    },

    senha: {
        type: String,
        required: true
    },

    permissao: {
        type: Number,
        required: true
    },

    tokenLogin: {
        type: String
    },
    
    tokenReset: {
        type: String
    }

});

module.exports = mongoose.model('Auth', authSchema);
