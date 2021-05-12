const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Welcome to our homepage, you sent a ${req.method} request`)
})


server.listen(5000, () => {
    console.log('Server is listening at port 5000...')
})