// const { Server } = require('ws');

// const socketServer = new Server({ port: 3000 });
// const connections = new Set();
// socketServer.on('connection', (ws) => {
//     console.log('New client connected!');
//     connections.add(ws)
//     ws.on('message', (data) => {
//         const message = JSON.parse(data);
//         connections.forEach((client) => {
//             client.send(JSON.stringify(message));
//         })
//     });
//     ws.on('close', () => {
//         connections.delete(ws);
//         console.log('Client has disconnected!');
//     });
// });

'use strict';

let WSServer = require('ws').Server;
let server = require('http').createServer();
let app = require('./http-services/http-server');
let wss = new WSServer({
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

server.listen(process.env.PORT, function () {
    console.log(`http/ws server listening on ${process.env.PORT}`);
});
