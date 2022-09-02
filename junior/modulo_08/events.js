const EventEmitter = require('events');
const { logger } = require('./logger');

const eventHandler = new EventEmitter();

eventHandler.on('log', (type, message) => {
  setImmediate(() => {
    logger(type, message);
  });
});

module.exports = eventHandler;
