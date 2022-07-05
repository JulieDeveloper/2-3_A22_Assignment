// required packages
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// routes setting 
app.get('/', (req, res) => {
  res.render('index', { title: "首頁" });
})
app.get('/:subPage', (req, res) => {
  res.render('index', { title: req.params.subPage });
})
// start and listen on the app
app.listen(3000, () => {
  console.log('Express is listening on http://localhost:3000')
})