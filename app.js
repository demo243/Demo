const express = require('express')
const mongoose = require('mongoose');
const jwt = require('express-jwt');

const app = express()
const port = 3200
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology : true})
.then((connection) => {
  console.log("connected to DB --->>>")
  const userRouter = require('./src/routes/users')
  const authenticationRouter = require('./src/routes/authentication')
  
  app.get('/contact', (req, res) => { //home page
    res.send('Hello World!')
  })

  app.use(jwt( { 
    secret: 'ApplicationSecretKey123', 
    algorithms: ['HS256']}).unless({path: [
      '/login',  // apart from these api's we should authenticate (expect JWTtoken)
      '/signup', 
      { url: '/users', methods: ['GET'] 
    }]
  }));

  // Decoded User Details 
  // secret key validation, decoded user Details and set(attached) in user request object


  app.use('/', userRouter)
  app.use('/', authenticationRouter)

})
.catch((error) => {
  console.log(`Error while connecting to DB: ${error}`)
  mongoose.disconnect()
  throw error
})

app.get('/contact', (req, res) => { //home page
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

