const express = require('express');
const {products} = require('./data')


// init an express app
const app = express();

// logger function
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
}


// working with middlewares
app.get('/', logger,(req, res) => {
    res.send('Home')
})


app.get('/about', (req, res) => {
    res.send('About')
})


// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})
