const express = require('express')

const router = express.Router()
const {
    addItem
} = require('../Controllers/itemController')

router.post('/add', addItem)

module.exports = router
