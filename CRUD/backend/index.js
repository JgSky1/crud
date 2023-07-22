import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ruta from "./routes/ruta.js";
dotenv.config();

const app = express();

app.listen(process.env.APP_PORT,()=>{
    console.log('Servidor corriendo...')
});

// El código configura una aplicación Express, carga variables de entorno desde un archivo .env y luego inicia un servidor Express para escuchar en un puerto específico.

// tambien usamos nodemon para que cada que hagamos cambios en el archivo no sea necesario reiniciar el servidor

app.use(cors());
app.use(express.json());
app.use(ruta);

//Al utilizar import routes from "./routes/routes"; importas el archivo de enrutamiento desde la carpeta "routes", y al utilizar app.use(routes); configuras tu aplicación Express para que utilice las rutas definidas en ese archivo de enrutamiento.

//------------------------------------------------------------
//Al utilizar app.use(cors()), permites que tu aplicación sea accesible desde diferentes orígenes, y al utilizar app.use(express.json()), habilitas el análisis de solicitudes JSON en tu aplicación Express.



