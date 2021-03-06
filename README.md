

# Prueba T茅cnica

Este repositorio tiene como  proposito demostrar conocimientos t茅cnicos en t茅cnologias de desarrollo de software.

## Comenzando 馃殌

El repositorio cuenta con una carpeta para el backend y otra para el frontend, cada secci贸n tiene su intructivo de instalaci贸n y despliegue.



# Backend 

## Tecnolog铆as:

1. Lenguaje de programaci贸n JS usando NodeJS v16.10.0
2. Base de datos no relacional MongoDB 7.24.0.
3. Controlador de versiones GIT 2.29.2

### Lista de dependencias:

1. express ^4.17.1
2. mongoose 5.03
3. dot-env ^10.0.0
3. cors ^2.8.5"
4. slugify ^1.6.1

### Lista de dependencias de desarrollo:

1. nodemon ^2.0.14
2. @babel/cli ^7.16.0
3. @babel/core ^7.16.0
4. @babel/node ^7.16.0
5. @babel/preset-env ^7.16.0
6.  @shelf/jest-mongodb ^2.1.0
7. jest ^27.3.1
8. supertest ^6.1.6

## Instalaci贸n:
### Primer paso: clonar el proyecto
```
git clone https://github.com/jotamaster/test-tecnico.git
```

### Ub铆cate en la carpeta de backend e instala las dependencias 
```
npm install
```

### Copia el archivo .env.example, n贸mbralo .env  y configura las variables de entorno
```
cp .env.example .env
```
#### Descripci贸n de variables de entorno:
1. MONGODB_URI=mongodb://localhost/cars : Esta variable hace relaci贸n a la url de tu base de datos. El 煤ltimo par谩metro ser谩 el nombre de tu base de datos, en este ejemplo es "cars".
2. PORT=3400 : Aqu铆 indicas el puerto donde va a correr tu aplicaci贸n.
3. TOKEN_SECRET=PRU3B4UR0FF : Esta variable se utiliza como palabra clave para encriptar la informaci贸n.

### Arrancar aplicaci贸n
Modo develop
```
npm start
```

### Ejecutar los tests 
```
npm run test
```

## Descripci贸n de ENDPOINTS
### Cars
<hr>

GET:  "/api/cars", lista todos los autos.

GET:  "/api/cars/:id", retorna un auto filtrando por su ID.

GET:  "/api/cars/slug/:slug", devuelve un auto filtrando por su slug.

POST:  "/api/cars", guarda un auto. Ejemplo del objeto que recibe como par谩metro en el body:

```
{
    "description":"auto semi nuevo bien cuidado",
    "owner":"Jorge Bustamante Dos",
    "brand": "Changan",
    "year":"2015",
    "carClass":"sedan",
    "model": "NEW ALSVIN",
    "images": [
        "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-05-06%2012%3A56%3A35-exterior_2-min.jpg",
        "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-05-06%2012%3A58%3A19-exterior_4-min.jpg"
    ]
}
```

POST: "/api/cars/filters", retorna un listado de veh铆culos que cumplan con el filtro de b煤squeda. Ejemplo del objeto que recibe como par谩metro en el req.body:
```
{ 
    "brands":[ "Renault" , "Mazda"],
    "carClasses":["jeep"],
    "years":[]
}
```

DELETE: "/api/cars/:id", elimina un auto seleccionado por su ID.

### AUTH
<hr>

POST: "/api/auth/register", permite registrar un usuario en la base de datos solicitando nombre email y contrase帽a.

POST: "/api/auth/login", solicita usuario y contrase帽a  para devolver un objeto con token y nombre del usuario.

### Seeders: Implement茅 rutas con seeders para poblar la base de datos y as铆 poder ejecutar pruebas y probar las funcionalidades de la aplicaci贸n.
<hr>

GET: "/api/seeders/cars", agrega veh铆culos a la base de datos.

GET: "/api/seeders/user", crea un usuario de pruebas.

```
{
    "name":"john",
    "email":"john@email.com",
    "password": "123456"
}
```


#  Frontend 

## Tecnolog铆as:

1. <b>NuxtJS</b> <br> Para el lado del frontend  escog铆 NuxtJS  que es un framework basado en VueJS. Nuxt esta inspirado de NextJS, que tiene similar prop贸sito y est谩 basado en ReactJS y que facilian la creaci贸n de aplicaciones SSR.

### Lista de dependencias:

1. @nuxtjs/auth-next ^5.0.0-1624817847.21691f1
2. @nuxtjs/axios ^5.13.6
3. core-js ^3.15.1
4. nuxt ^2.15.7
5. vuetify ^2.5.5

### Lista de dependencias de desarrollo:

1. @nuxtjs/vuetify ^1.12.1",
2. @vue/test-utils ^1.2.1",
3. babel-core 7.0.0-bridge.0",
4. babel-jest ^27.0.5
5. jest ^27.0.5
6. vue-jest ^3.0.4


## Instalaci贸n:
### Primer paso: clonar el proyecto ( si ya se clon贸 omitir este paso)
```
git clone https://github.com/jotamaster/test-tecnico.git
```

### Ub铆cate en la carpeta de frontend e instala las dependencias 
```
npm install
```

### Copia el archivo .env.example, n贸mbralo .env y configura las variables de entorno
```
cp .env.example .env
```
#### Descripci贸n de variables de entorno:
1. API_BASE_URL=http://localhost:3400 : Esta variable indica la url base que tendr谩 la api rest y que usar谩 axios para hacer las consultas. 

### Arrancar aplicaci贸n
Modo develop
```
npm run dev
```
Modo producci贸n (genera una carpeta dist)
```
npm run build
```
Una vez la aplicaci贸n construida se puede usar el comando `start` y podr谩 ver una versi贸n de producci贸n de la aplicaci贸n.
```
npm run start
```

# Funcionalidades

1. <b>Listar veh铆culos</b> <br> En la p谩gina principal de la aplicaci贸n se cargan los veh铆culos en formato de tarjetas, detallando el due帽o, marca, modelo, a帽o, categoria e imagen principal del veh铆culo.

2. <b>B煤squeda de veh铆culos</b> <br> Cuenta con un componente de b煤squeda para poder filtrar los veh铆culos por marca, categoria y a帽o.


3. <b>Detalle del veh铆culo</b> <br> P谩gina principal de un veh铆culo que detalla a fondo todas sus caracteristicas.

4. <b>Recomendaci贸n de veh铆culos</b> <br> La aplicaci贸n va recopilando informaci贸n de navegaci贸n del usuario cada vez que un usuario ve la p谩gina de detalle de un veh铆culo el sistema guarda en el localStorage del navegador el tipo de vehiculo y con base en eso calcular qu茅 tipo de veh铆culos ve con mayor frecuencia para despu茅s ordenar los veh铆culos seg煤n el tipo de veh铆culo con mayor ranking de visitas.

5. <b>Login</b> <br> P谩gina para iniciar sesi贸n en el sistema que viene con valores predefinidos para facilitar los test.

5. <b>Dashboard</b> <br> P谩gina en la cual se muestra el formulario de creaci贸n de un veh铆culo.





