const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router({})

router
  .use(bodyParser.json())
  .use('/hack', require('./hack'))

module.exports = router
