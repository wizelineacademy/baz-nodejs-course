const axios = require('axios');
const { messages } = require('./constants');
const eventHandler = require('./events');

const { log, error } = messages;

const getRequest = async (url) => {
  try {
    eventHandler.emit('log', log, 'GET request');
    const response = await axios.get(url);
    eventHandler.emit('log', log, 'GET request end');
    return response.data;
  } catch (e) {
    eventHandler.emit('log', error, 'GET request failed');
    return e;
  }
};

module.exports = { getRequest };
