const http = require('http');


const server = http.createServer((req, res) => {
    let url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.end(`<h1>Homepage</h1>`)
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.end(`<h1> About Page</h1>`)
    }
    // 404 page
    else{
        res.writeHead(200, {
        'content-type': 'text/html'
        })
        res.end(`<h1>Page not Found</h1>`)
    }
})


server.listen(5000, () => {
    console.log('Server is listening at port 5000...')
})