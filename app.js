const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})
// app.get
// app.post
// app.delete
// app.put
// app.all
// app.listen