const express = require('express');

const app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        hello: 'hello'
    })
})

const server = app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})