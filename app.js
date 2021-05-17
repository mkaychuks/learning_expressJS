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


// getting a single product using the id and req.params
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))

    if(singleProduct){
        return res.json(singleProduct)
    }

    return res.status(404).send('Page not found')
})

// adding a query structure
app.get('/api/v1/query', (req, res) => {
    const {search , limit} = req.query  // setting the query params
    let sortedProducts = [...products]  // copying the entire products

    // creating the search variable
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)  // filtering the products, callback func way
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit)) // slicing the lists
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})


// server is paying attention to the port
app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})
