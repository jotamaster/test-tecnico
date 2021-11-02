

# Prueba Técnica

Este repositorio tiene como  proposito demostrar conocimientos técnicos en técnologias de desarrollo de software.

## Comenzando 🚀

El repositorio cuenta con una carpeta para el backend y otra para el frontend, cada sección tiene su intructivo de instalación y despliegue.



# Backend 

## Tecnologías:

1. Lenguaje de programación JS usando NodeJS v16.10.0
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

## Instalación:
### Primer paso: clonar el proyecto
```
git clone https://github.com/jotamaster/test-tecnico.git
```

### Ubícate en la carpeta de backend e instala las dependencias 
```
npm install
```

### Copia el archivo .env.example, nómbralo .env  y configura las variables de entorno
```
cp .env.example .env
```
#### Descripción de variables de entorno:
1. MONGODB_URI=mongodb://localhost/cars : Esta variable hace relación a la url de tu base de datos. El último parámetro será el nombre de tu base de datos, en este ejemplo es "cars".
2. PORT=3400 : Aquí indicas el puerto donde va a correr tu aplicación.
3. TOKEN_SECRET=PRU3B4UR0FF : Esta variable se utiliza como palabra clave para encriptar la información.

### Arrancar aplicación
Modo develop
```
npm start
```

### Ejecutar los tests 
```
npm run test
```

## Descripción de ENDPOINTS
### Cars
<hr>

GET:  "/api/cars", lista todos los autos.

GET:  "/api/cars/:id", retorna un auto filtrando por su ID.

GET:  "/api/cars/slug/:slug", devuelve un auto filtrando por su slug.

POST:  "/api/cars", guarda un auto. Ejemplo del objeto que recibe como parámetro en el body:

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

POST: "/api/cars/filters", retorna un listado de vehículos que cumplan con el filtro de búsqueda. Ejemplo del objeto que recibe como parámetro en el req.body:
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

POST: "/api/auth/register", permite registrar un usuario en la base de datos solicitando nombre email y contraseña.

POST: "/api/auth/login", solicita usuario y contraseña  para devolver un objeto con token y nombre del usuario.

### Seeders: Implementé rutas con seeders para poblar la base de datos y así poder ejecutar pruebas y probar las funcionalidades de la aplicación.
<hr>

GET: "/api/seeders/cars", agrega vehículos a la base de datos.

GET: "/api/seeders/user", crea un usuario de pruebas.

```
{
    "name":"john",
    "email":"john@email.com",
    "password": "123456"
}
```


#  Frontend 

## Tecnologías:

1. <b>NuxtJS</b> <br> Para el lado del frontend  escogí NuxtJS  que es un framework basado en VueJS. Nuxt esta inspirado de NextJS, que tiene similar propósito y está basado en ReactJS y que facilian la creación de aplicaciones SSR.

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


## Instalación:
### Primer paso: clonar el proyecto ( si ya se clonó omitir este paso)
```
git clone https://github.com/jotamaster/test-tecnico.git
```

### Ubícate en la carpeta de frontend e instala las dependencias 
```
npm install
```

### Copia el archivo .env.example, nómbralo .env y configura las variables de entorno
```
cp .env.example .env
```
#### Descripción de variables de entorno:
1. API_BASE_URL=http://localhost:3400 : Esta variable indica la url base que tendrá la api rest y que usará axios para hacer las consultas. 

### Arrancar aplicación
Modo develop
```
npm run dev
```
Modo producción (genera una carpeta dist)
```
npm run build
```
Una vez la aplicación construida se puede usar el comando `start` y podrá ver una versión de producción de la aplicación.
```
npm run start
```

# Funcionalidades

1. <b>Listar vehículos</b> <br> En la página principal de la aplicación se cargan los vehículos en formato de tarjetas, detallando el dueño, marca, modelo, año, categoria e imagen principal del vehículo.

2. <b>Búsqueda de vehículos</b> <br> Cuenta con un componente de búsqueda para poder filtrar los vehículos por marca, categoria y año.


3. <b>Detalle del vehículo</b> <br> Página principal de un vehículo que detalla a fondo todas sus caracteristicas.

4. <b>Recomendación de vehículos</b> <br> La aplicación va recopilando información de navegación del usuario cada vez que un usuario ve la página de detalle de un vehículo el sistema guarda en el localStorage del navegador el tipo de vehiculo y con base en eso calcular qué tipo de vehículos ve con mayor frecuencia para después ordenar los vehículos según el tipo de vehículo con mayor ranking de visitas.

5. <b>Login</b> <br> Página para iniciar sesión en el sistema que viene con valores predefinidos para facilitar los test.

5. <b>Dashboard</b> <br> Página en la cual se muestra el formulario de creación de un vehículo.





