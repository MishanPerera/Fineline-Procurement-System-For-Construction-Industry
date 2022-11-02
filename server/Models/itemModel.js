const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({

    itemcode: {
        type: String,
        required: true
    },

    item: {
        type: String,
        required: true
    },

    unitPrice:{
        type: Number,
        required: true
    }

})

const Item = mongoose.model("Item" ,itemSchema)

module.exports = Item;