const express = require('express')
const router = express.Router({})

router.use('/hack', require('./hack'))

module.exports = router
