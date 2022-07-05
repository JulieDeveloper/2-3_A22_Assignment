// required packages
const express = require('express')
const app = express()

// routes setting 
app.get('/', (req, res) => {
  res.send('This is the Home page')
})

// start and listen on the app
app.listen(3000, () => {
  console.log('Express is listening on localhost:3000')
})