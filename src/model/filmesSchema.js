const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const filmesSchema = new Schema({ 
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
        },
        nome: {
            type: String,
            unique: true,
            required: true
            },
        ano: {
            type: Number,
            required: true
        },
        
        avaliacao: {
            type:[Number],
        },

        exibicoes: {
            type: Number
        }


        
})

const filmesCollection = mongoose.model('filme', filmesSchema)
module.exports = filmesCollection