const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const PORT =  3000
const HOST = '0.0.0.0'

server.listen(PORT, () => {
    console.log(`Server listening on ${HOST}:${PORT}`)
});