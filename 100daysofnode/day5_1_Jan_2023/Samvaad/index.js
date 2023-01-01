const express = require('express');

const app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>

    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.1/socket.io.js"></script>
        <script src="/chat.js"></script>
    </head>
    
    <body>
        <h1 class="room-message"></h1>
        <div class="window">
            <div class="chat-message">
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
            <div class='fields'>
                <input type="text" id="message" placeholder="Enter message">
                <button id="send">Send</button>
            </div>
        </div>
        <div class="online">
            <p class="users-online">Users Online</p>
            <div class="users">
            </div>
        </div>
        <script src="/chat.js"></script>
    </body>
    
    </html>`)
})

const server = app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})