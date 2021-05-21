const express = require('express');
const {people} = require('./data')


// init an express app
const app = express();


// static files setup
app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people})
})


app.post('/login', (req, res) => {
    const { name } = req.body;
    
    if( name ){
        return res.status()
    }
    res.send('POST')
})

// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....');
})
