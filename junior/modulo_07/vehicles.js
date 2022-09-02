const parser = async (line) => new Promise((resolve, reject) => {
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

module.exports = { parser };
