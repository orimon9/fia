const express = require('express')

const router = express.Router()

router.get("/",(req,res)=> {

    res.send("Handling product routes , eg. search for products")
})

module.exports = router