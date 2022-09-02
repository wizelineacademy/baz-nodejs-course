# :bulb: Modulo 8: REST

## :book: Objetivo

- Explicar el concepto de una REST API
- Crear un cliente http

## :clipboard: Material

Consultar en la presentación, las diapositivas

## :books: Temas

### I. REST

Una API REST (también conocida como API RESTful) es una interfaz de programación de aplicaciones (API o API web) que se ajusta a las restricciones del estilo arquitectónico REST y permite la interacción con los servicios web RESTful. REST significa transferencia de estado representacional.

API: Una API es un conjunto de definiciones y protocolos para construir e integrar software de aplicación.

REST: REST es un conjunto de restricciones arquitectónicas, no un protocolo o un estándar. Cuando se realiza una solicitud de cliente a través de una API RESTful, transfiere una representación del estado del recurso al solicitante o punto final.

## II. Cliente HTTP/HTTPS

Los clientes HTTP/HTTPS nos permiten consultar recursos externos y poder usarlos dentro de nuestro proyecto.

La mejor manera de crear un cliente HTTP/HTTPS es usando el modulo [axios](https://github.com/axios/axios). El siguiente es un ejemplo de una llamada GET:

```js
const axios = require('axios');

axios
  .get('https://localhost:8080')
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Axios también posee métodos para ejecutar llamadas POST, PUT y DELETE

## :mag: Para saber más

[Que es una REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api)

[Creando un cliente HTTP](https://nodejs.dev/en/learn/making-http-requests-with-nodejs/)

## :pencil2: Ejercicio

En base al código resultante del modulo 7, añadir las siguientes funcionalidades:

1. Crear un cliente http que obtenga un listado de vehículos usando el siguiente endpoint `https://myfakeapi.com/api/cars/`
2. Reducir la información obtenida de manera que solo exista un elemento para cada combinación de los campos `car` y `car_model`

```json
// Ejemplo
[
  {
    "car": "BMW",
    "car_model": "X5 M"
    ...
  },
    {
    "car": "Mitsubishi",
    "car_model": "Montero"
    ...
  },
    {
    "car": "BMW",
    "car_model": "X5 M"
    ...
  },
]

// Después de obtener combinaciones únicas el resultado sería
[
  {
    "car": "BMW",
    "car_model": "X5 M"
    ...
  },
    {
    "car": "Mitsubishi",
    "car_model": "Montero"
    ...
  },
]
```

3. Filtra el listado de vehículos obtenidos mediante el archivo csv, de modo que solo se mantengan aquellos que aparezcan en la lista de vehículos con combinación única previamente filtrada en el paso 3.

4. Guardar este listado resultante en el archivo `vehicles.json`
