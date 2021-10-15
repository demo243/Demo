const express = require('express')

const app = express()
const port = 3200


app.get('/contact', (req, res) => { //home page
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

