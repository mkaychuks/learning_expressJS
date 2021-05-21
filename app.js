const express = require('express');
const {people} = require('./data')


// init an express app
const app = express();


// static files setup
app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people})
})


// server side handling of forms
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if( !name ){
        return res.status(400).json({success: false, message:'Please provide a valid credential'})
    }
    res.status(201).send({ success: true, person: name})
})


/// frontend handling of forms
app.post('/login', (req, res) => {
    const { name } = req.body;
    
    if( name ){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....');
})
