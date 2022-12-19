var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('I see dead people!');
}

console.log('event Cathcer')
eventEmitter.on('ghost', myEventHandler);

console.log('event Emitter')
eventEmitter.emit('ghost');