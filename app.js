const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3200

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology : true})
.then((connection) => {
  console.log("connected to DB --->>>")
  
  app.get('/contact', (req, res) => { //home page
    res.send('Hello World!')
  })
})
.catch((error) => {
  console.log(`Error while connecting to DB: ${error}`)
  mongoose.disconnect()
  throw error
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

