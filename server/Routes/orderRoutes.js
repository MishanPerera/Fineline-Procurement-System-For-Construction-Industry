const express = require('express')

const router = express.Router()
const {
    addOrder
} = require('../Controllers/orderController')

router.post('/add', addOrder)

module.exports = router
