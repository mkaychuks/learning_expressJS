const express = require('express');
const {products} = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')


// init an express app
const app = express();


// setting the app.use materials
app.use([logger, authorize]);

// working with middlewares
app.get('/', logger,(req, res) => {
    res.send('Home')
})


app.get('/about', (req, res) => {
    console.log(req.user)
    res.send('About')
})


// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....');
})
