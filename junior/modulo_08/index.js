const { writeFileSync } = require('fs');
const {
  defaultPath, files, messages,
} = require('./constants');
const { getVehiclesFromFile, getVehiclesFromAPI, filterVehicles } = require('./vehicles');
const eventHandler = require('./events');

const { log, error } = messages;

const main = async () => {
  eventHandler.emit('log', log, 'Inicia el proceso');
  try {
    const vehiclesFromFile = await getVehiclesFromFile(`${defaultPath}${files.data}`);
    const vehiclesFromAPI = await getVehiclesFromAPI();

    const filter = await filterVehicles(vehiclesFromFile, vehiclesFromAPI);
    eventHandler.emit('log', log, 'Crea archivo json');
    await writeFileSync(`${defaultPath}${files.output}`, JSON.stringify(filter, null, 2));
    eventHandler.emit('log', log, 'Termina el proceso');
  } catch (e) {
    eventHandler.emit('log', error, e);
  }
};

main();
