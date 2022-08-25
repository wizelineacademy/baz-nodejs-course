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

const vehicleParser = (line) => {
  const parse = line.split(',');
  return {
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

  };
};

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

const logger = (type, message) => {
  fs.appendFile(
    `${resourceFolder}${logFile}`,
    `${getDate()} [${type}] ${message}\n`,
    (err) => {
      if (err) throw err;
    },
  );
};

const main = () => {
  fs.readFile(`${resourceFolder}${dataFileName}`, 'utf8', (err, data) => {
    if (err) {
      logger(MSG.error, err);
      throw err;
    }
    logger(MSG.log, 'Inicia el proceso');
    const vehicles = [];
    const lines = data.split('\r\n');
    lines.forEach((line, index) => {
      if (index > 0) {
        vehicles.push(vehicleParser(line));
      }
    });
    fs.writeFile(`${resourceFolder}${vehiclesDB}`, JSON.stringify(vehicles, null, 2), (e) => {
      if (e) {
        logger(MSG.error, e);
        throw e;
      }
    });
    const filter = vehicles.filter((v) => v.generales.marca === 'FORD');

    logger(MSG.log, `Autos registrados: ${vehicles.length} - Vehículos FORD: ${filter.length}`);
    logger(MSG.log, 'Termina el proceso');
  });
};

main();
