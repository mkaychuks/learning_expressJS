const express = require('express');
const {products} = require('./data')


// init an express app
const app = express();


app.get('/', (req, res) => {
    res.send(`</h1>Home Page</h1> <a href="/api/products">products</a>`)
})


app.get('/api/products', (req, res) => {
    // using the map function and passing specific fields of data:
    const newProducts = products.map((product) => {
        const {id, name, image, price} = product;
        return {id, name, image, price}
    })
    res.json(newProducts)
})


// getting a single product using the id
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)

    res.json(singleProduct)
})


// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})
