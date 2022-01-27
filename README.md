# El Aromo-Vecinos
Website en React con páginas dinámicas y uso de BD

Esta web está armada para un barrio privado. Actualmente los vecinos intercambian información y recomiendan contactos a través de whatsapp. Generalmente las consultas se repiten porque la información queda perdida en la cantidad de mensajes existentes en el chat. La idea es centrar toda esta información en este website para que sea más sencillo consultarla.

El website fue creado con create-react-app. En la página inicial los temas se agrupan a través de tarjetas (cards) que se generan dinamicamente obteniendo los datos de una base de datos en MongoDB Atlas a través de un servicio API. 
Está armada en gran parte con Bootstrap. Esto permite realizar cambios de manera sencilla.

El proyecto está armado con NodeJS.

Se compone de:

 - Website en servidor 
 - REST API


## Levantar el proyecto
Para levantar el proyecto en forma local:

 1. Descargar los repos
 2. Instalar módulos (node_modules) en el **/website** y en la  **/api**

    *npm i* 

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

 1. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 2. Crear una base llamada **elaromo** en MongoDB.

 3. Crear un archivo .env con la siguiente información:
      
      PORT=8080  (si no se especifica el puerto, tomará el puerto 3001 por defecto)
      MONGO_URI=mongodb://127.0.0.1:27017/elaromo

 4. Levantar el servicio con el comando `npm run start` (o `node index.js` dentro de **api/src**). Opcionalmente se puede usar `npm run dev` (o `nodemon index.js` dentro de **api/src**) si se va a trabajar sobre la API. Este servicio corre en el puerto indicado en el .env y si no se especifica el puerto tomará el 3001 por defecto.

 5. A través de Postman por ejemplo, agregar grupos, categorías, proveedores y/o contactos en la base **elaromo** de acuerdo a los schemas correspondientes dentro de **src/models**. 


#### Levantar Website

 1. Reemplazar **https://elaromo-api.herokuapp.com/** por **http://localhost:8080/** (o indicar en lugar de 8080, el nro de puerto asignado en el archivo .env de la API) en el archivo `.env`.

2. Una vez corriendo el servicio API, levantar el proyecto **website** con los comandos `npm run start` en la carpeta **/ELAROMO-WEB**. Este proyecto corre en el puerto 3000.


Si bien la REST API cuenta con endpoints para crear, actualizar y borrar grupos, categorías, proveedores y contactos; por el momento, el website solo utiliza el endpoint para listarlos y así armar el site.


### Base de Datos

Nombre de la base: **elaromo**. 
Tiene cuatro schemas: 
- grupos: detalla los datos para armar los grupos de mantenimiento, salud, mascotas y alimentos que se verán en la página de Inicio.
- categorías: detalla los rubros contenidos dentro de cada grupo 
    Ejemplos: mantenimiento/pintores, salud/urgencias, mascotas/veterinarias, etc...
- proveedores: información de los proveedores de cada categoría.
- contacto: detalla nombre, email y consulta realizada por el usuario a través del website


### Nota

Clasificados por el  momento no está desarrollado. Tiene una lógica diferente.



  

