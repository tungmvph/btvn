const express = require('express')
const calculator = require('./calculator');

//import { engine } from 'express-handlebars';
const expressHbs = require('express-handlebars');

const app = express()

//app.engine('.hbs', ExpressHandlebars());
app.engine('.hbs', expressHbs.engine({ 
  extname: "hbs", 
  defaultLayout: 'main', 
  layoutsDir: "views/layouts/" }));

//app.engine( "hbs", engine({ extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts/", }) );

app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('emptyView',{
    layout: 'home'
  })
  
});

// Route POST để xử lý các phép tính
app.post('/calculate', (req, res) => {
  const operator = req.body.operator;
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  let result;

  switch (operator) {
    case 'add':
      result = calculator.add(a, b);
      break;
    case 'subtract':
      result = calculator.subtract(a, b);
      break;
    case 'multiply':
      result = calculator.multiply(a, b);
      break;
  }

  // res.render('home', {
    
  //   result });

    res.render('emptyView',{
      layout: 'home',
      result
    });
});
// app.
// get('/maytinh', (req, res) => {
//   res.render('emptyView', {
//     layout: 'index', 
//     result: true,
   

//   });
// });


const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
