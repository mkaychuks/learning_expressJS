const { people } = require("../data")


const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
    console.log('Hello world, i am a working a document')
}

module.exports = { getPeople }