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


// handling a put http request
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id))

    if( !person ){
        return res.status(404).json({success: false, message:`no person with id ${id}`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople})
})


// handling a DELETE request
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if( !person ){
        return res.status(404).json({success: false, message:`no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})

// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....');
})
