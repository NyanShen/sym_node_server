let http = require('http');

let server = http.createServer((req, res) => {
    res.end("hello server test")
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server started...')
})