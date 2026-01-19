const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response' , () => {
    console.log(`Data Recieved `);
})
customEmitter.emit('response')

// emit means the event just happened 
// on means do something when this event happens

// we must write on() before we emit an event otherwise nothing will happen 
// we can also use on function with (http) server as http extends .netsever class which extends eventemitter class 
 