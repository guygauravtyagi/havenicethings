const { Server } = require('ws');

const socketServer = new Server({ port: 3000 });
const connections = new Set();
socketServer.on('connection', (ws) => {
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