const express = require('express');
const userRouter = require('./routes/user');

const port = 3000;
const app = express();

app.use('/users', userRouter);

app.use('/test', (req, res) => {
    res.json("hello express")
});

app.listen(port, () => {
    console.log(`server starded listening at http://localhost:${port}`)
})

/**
let http = require('http');

let server = http.createServer((req, res) => {
    res.end("hello server test")
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server started...')
})
*/