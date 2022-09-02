const files = {
  data: 'consumoGasolina2018.csv',
  logs: 'service.log',
  output: 'vehicles.json',
};

const defaultPath = '../resources/';

const messages = {
  log: 'INFO',
  error: 'ERROR',
};

const carAPIUrl = 'https://myfakeapi.com/api/cars/';

module.exports = {
  defaultPath, files, messages, carAPIUrl,
};
