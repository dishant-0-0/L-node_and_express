const EventEmitter = require('events');
const { lowerFirst } = require('lodash');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user: ${name} with id: ${id}`);
})
customEmitter.on('response', () => {
    console.log(`different emitter here`);
})
customEmitter.emit('response', 'Dishant', 69)