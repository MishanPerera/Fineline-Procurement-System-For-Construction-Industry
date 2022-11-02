const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    refNo: {
        type: String,
        required: [true, 'Reference number is required']
    },

    site: {
        type: String,
        required: [true, 'Site name is required']
    },

    items: {
        type: String,
        required: [true, 'Items are required']
    },

    totalAmount:{
        type: Number,
        required: [true, 'Total amount is required']
    },

    supplier: {
        type: String,
        required: [true, 'Supplier is required']
    },

    buyer: {
        type: String,
        required: [true, 'Buyer name is required']
    },

    email: {
        type: String,
    },

    address: {
        type: String,
        required: [true, 'Address is required']
    },

    requiredDate:{
        type: String,
        required: [true, 'Date is required']
    },

    contactNo:{
        type: String,
        required: [true, 'Contact number is required']
    },

    comment:{
        type: String,
    }

})

const Order = mongoose.model("Order" ,orderSchema)

module.exports = Order;