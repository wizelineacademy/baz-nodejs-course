const { readFileSync, writeFileSync } = require('fs');
const { logger } = require('./logger');
const { defaultPath, files, messages } = require('./constants');
const { parser } = require('./vehicles');

const main = async () => {
  try {
    await logger(messages.log, 'Inicia el proceso');
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

    await logger(messages.log, `Autos registrados: ${parsedData.length} - Vehículos FORD: ${filter.length}`);
    await logger(messages.log, 'Termina el proceso');
  } catch (e) {
    console.log(e);
    logger(messages.error, e);
  }
};

main();
