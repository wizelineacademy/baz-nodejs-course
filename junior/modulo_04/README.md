# :bulb: Modulo 4: Manipulación de Archivos

## :book: Objetivo

- Explorar y poner en practica los métodos de manipulación de archivos

## :clipboard: Material

Consultar en la presentación, las diapositivas 29 y 30

## :books: Temas

### I. CRUD

CRUD es el acrónimo para las cuatro operaciones básicas que se pueden realizar en archivos.

- Create (Crear)
- Reed (Leer)
- Update (Actualizar)
- Delete (Borrar)

Se realizan estas operaciones gracias al modulo `fs`.

Para el desarrollo de este ejemplo, trabajaremos con las siguientes lineas

```js
const testFolder = './testFolder/';
const fs = require('fs');
const fileName = 'demoFile.txt';
```

#### 1. Create (Crear)

```js
fs.writeFile(`${testFolder}${fileName}`, 'Curso de Node JS Junior', (err) => {
  if (err) throw err;
  console.log(`El archivo ${fileName} ha sido creado`);
});
```

#### 2. Read (Leer)

```js
fs.readFile(`${testFolder}${fileName}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`Contenido del archivo ${fileName}\n${data}`);
});
```

#### 3. Update (Leer)

Añade contenido al final del archivo

```js
fs.appendFile(`${testFolder}${fileName}`, 'Curso de Node JS Junior', (err) => {
  if (err) throw err;
  console.log(`El archivo ${fileName} ha sido creado`);
});
```

Editar el contenido y almacenarlo en el archivo

```js
fs.readFile(`${testFolder}${fileName}`, 'utf8', (err, data) => {
  if (err) throw err;
  const newText = `Nuevo header \n${data}\nNuevo footer`;

  fs.writeFile(`${testFolder}${fileName}`, newText, 'utf8', (e) => {
    if (e) throw e;
    console.log(`Contenido del archivo ${fileName} actualizado\n${data}`);
  });
});
```

#### 4. Delete (Borrar)

```js
fs.unlink(`${testFolder}${fileName}`, (err) => {
  if (err) throw err;
});
```

#### 5. Crear directorios

```js
fs.mkdir('../myDir', { recursive: true }, (err) => {
  if (err) throw err;
});
```

#### 6. Listar contenido de un directorio

```js
fs.readdir(testFolder, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    console.log(file);
  });
});
```

## :mag: Para saber más

[Rutas de archivos](https://nodejs.dev/en/learn/nodejs-file-paths/)

[Trabajar con directorios](https://nodejs.dev/en/learn/working-with-folders-in-nodejs/)

## :pencil2: Ejercicio

Usando el [archivo CSV](../resources/consumoGasolina2018.csv), que contiene información relacionada con el consumo de gasolina de una serie de vehículos, realizar un programa que realize lo siguiente:

1. Leer el archivo
2. Crear un array de objetos de tipo vehículo (El objeto vehículo es de libre interpretación)
3. Crear un archivo `vehiculos.json` que contenga el array
4. Obtener los registros de todos lo vehículos de marca FORD e imprimir la cantidad de elementos encontrados
5. Cree un archivo `service.log` en donde se almacenen los siguientes eventos en el momento que se ejecuten
   1. Inicio del programa
   2. Final del programa
   3. Errores
