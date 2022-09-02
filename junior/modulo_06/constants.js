const files = {
  data: 'consumoGasolina2018.csv',
  logs: 'service.log',
  output: 'vehicles.json',
};

const defaultPath = '../resources/';

const messages = {
  log: 'LOG',
  error: 'ERROR',
};

module.exports = { defaultPath, files, messages };
