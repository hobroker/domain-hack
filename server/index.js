const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '../build')

app.use(express.static(publicPath))
   .get('/', function(req, res) {
     res.sendFile(path.join(publicPath, 'index.html'))
   })

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
