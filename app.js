const express = require('express');
const path = require('path');


// init an express app
const app = express();

// serving static files and folders
app.use(express.static('./public'))


// homepage
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './nav-app/index.html'))
})


// about page
// app.get('/about', (req, res) => {
//     res.status(200).send("About Page")
// })


// do everything
app.all('*', (req,res) => {
    res.status(404).send('<h1> Resource not found </h1>')
})


// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})
