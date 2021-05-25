const express = require('express')
const {people} = require('../data')
const router = express.Router()


const { getPeople } = require('../controllers/peopleController')



router.get('/', getPeople)

// handling a put http request
router.put('/:id', (req, res) => {
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
router.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if( !person ){
        return res.status(404).json({success: false, message:`no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})

module.exports = router