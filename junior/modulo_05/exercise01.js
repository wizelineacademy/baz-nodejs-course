const fs = require('fs');

const resourceFolder = '../resources/';
const dataFileName = 'consumoGasolina2018.csv';
const logFile = 'service.log';
const vehiclesDB = 'vehicles.json';

const MSG = {
  log: 'LOG',
  warning: 'WARNING',
  error: 'ERROR',
};

const vehicleParser = async (line) => new Promise((resolve, reject) => {
  try {
    const parse = line.split(',');
    resolve({
      generales: {
        marca: parse[0],
        subMarca: parse[1],
        version: parse[2],
        modelo: parse[3],
      },
      tecnicos: {
        transmision: parse[4],
        combustible: parse[5],
        cilindros: parse[6],
        potencia: parse[7],
      },
      tamano: parse[8],
      categoria: parse[9],
      rendimiento: {
        ciudad: parse[10],
        carretera: parse[11],
        combinado: parse[12],
        ajustado: parse[13],
      },
      contaminantes: {
        co2: parse[14],
        nox: parse[15],
      },
      calificacion: {
        'efecto-invernadero': parse[16],
        'contaminacion-aire': parse[17],
      },

    });
  } catch (e) {
    reject(e);
  }
});

const getDate = () => {
  const today = new Date();
  const hours = today.getHours();
  const mins = today.getMinutes();
  const secs = today.getSeconds();

  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let date = today.getDate();
  date = date < 10 ? `0${date}` : date;

  return `${year}/${month}/${date} ${hours}:${mins}:${secs}`;
};

// eslint-disable-next-line no-async-promise-executor
const logger = async (type, message) => new Promise(async (resolve, reject) => {
  try {
    await fs.appendFileSync(
      `${resourceFolder}${logFile}`,
      `${getDate()} [${type}] ${message}\n`,
    );
    resolve();
  } catch (e) {
    reject(e.toString());
  }
});

const main = async () => {
  try {
    await logger(MSG.log, 'Inicia el proceso');
    const data = fs.readFileSync(`${resourceFolder}${dataFileName}`, { encoding: 'utf-8' }).toString();
    const vehicles = [];
    const lines = data.split('\r\n');
    lines.forEach((line, index) => {
      if (index > 0) {
        vehicles.push(vehicleParser(line));
      }
    });

    const parsedData = await Promise.all(vehicles);

    await fs.writeFileSync(`${resourceFolder}${vehiclesDB}`, JSON.stringify(parsedData, null, 2));

    const filter = parsedData.filter((v) => v.generales.marca === 'FORD');

    await logger(MSG.log, `Autos registrados: ${parsedData.length} - Vehículos FORD: ${filter.length}`);
    await logger(MSG.log, 'Termina el proceso');
  } catch (e) {
    console.log(e);
    logger(MSG.error, e);
  }
};

main();
