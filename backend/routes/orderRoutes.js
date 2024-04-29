const express = require('express')

const router = express.Router()
const router = require ("../controllers/orderController")


router.get("/", getOrder)

module.exports = router