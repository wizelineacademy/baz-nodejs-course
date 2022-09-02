const { readFileSync, writeFileSync } = require('fs');
const { defaultPath, files, messages } = require('./constants');
const { parser } = require('./vehicles');
const eventHandler = require('./events');

const { log, error } = messages;

const main = async () => {
  try {
    eventHandler.emit('log', log, 'Inicia el proceso');
    const data = await readFileSync(`${defaultPath}${files.data}`, { encoding: 'utf-8' }).toString();
    const vehicles = [];
    const lines = data.split('\r\n');
    lines.forEach((line, index) => {
      if (index > 0) {
        vehicles.push(parser(line));
      }
    });

    const parsedData = await Promise.all(vehicles);

    await writeFileSync(`${defaultPath}${files.output}`, JSON.stringify(parsedData, null, 2));

    const filter = parsedData.filter((v) => v.generales.marca === 'FORD');
    eventHandler.emit('log', log, `Autos registrados: ${parsedData.length} - Vehículos FORD: ${filter.length}`);
    eventHandler.emit('log', log, 'Termina el proceso');
  } catch (e) {
    console.log(e);
    eventHandler.emit('log', error, e);
  }
};

main();
