'use strict';

const WSServer = require('ws').Server;
const server = require('http').createServer();
const app = require('./http-services/http-server');
const config = require('./meta-data/config');

const wss = new WSServer({
    server: server
});
server.on('request', app);
const connections = new Set();
wss.on('connection', function connection(ws) {
    console.log('New client connected!');
    connections.add(ws)
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        connections.forEach((client) => {
            client.send(JSON.stringify(message));
        })
    });
    ws.on('close', () => {
        connections.delete(ws);
        console.log('Client has disconnected!');
    });
});

server.listen(config.PORT, function () {
    console.log(`http/ws server listening on ${config.PORT}`);
});
