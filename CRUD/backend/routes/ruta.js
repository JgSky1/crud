// Este código importa Express, importa las funciones controladoras relacionadas con los productos, crea un enrutador y exporta ese enrutador para ser utilizado en otros lugares de la aplicación. Al definir las rutas y utilizar las funciones controladoras en este enrutador, puedes manejar las solicitudes relacionadas con los productos en tu aplicación.

// import express from "express";: Esta línea de código importa la biblioteca Express, que es un framework de Node.js utilizado para crear aplicaciones web. Al importarla, podemos utilizar sus funciones y métodos para definir las rutas y manejar las solicitudes y respuestas HTTP.

// import { ... } from "../controladores/productoControlador.js";: Esta línea de código importa diferentes funciones o controladores relacionados con las operaciones de productos. Estas funciones son definidas en otro archivo llamado "productoControlador.js" que se encuentra en la carpeta "controladores". Estas funciones son utilizadas para manejar las solicitudes recibidas en las diferentes rutas.

// const router = express.Router();: Esta línea de código crea una instancia de un objeto enrutador de Express. El enrutador se utiliza para definir las rutas y manejar las solicitudes HTTP relacionadas con los productos.

// export default router;: Esta línea de código exporta el enrutador para que pueda ser utilizado en otros archivos. Permite que este enrutador sea importado y utilizado en el archivo principal de la aplicación para manejar las solicitudes relacionadas con los productos.

import express from "express";

import {
  obtenerProductos,
  obtenerProductosPorID,
  crearProductos,
  actualizarProductos,
  eliminarProductos,
} from "../controladores/productoControlador.js";

const router = express.Router();

router.get("/productos", obtenerProductos);
router.get("/productos/:id", obtenerProductosPorID);
router.post("/productos", crearProductos);
router.patch("/productos/:id", actualizarProductos);
router.delete("/productos/:id", eliminarProductos);

export default router;

// router.get('/productos', obtenerProductos); Esta línea de código establece una ruta HTTP GET para la URL "/productos". Cuando un cliente realiza una solicitud GET a esta URL, se ejecuta la función obtenerProductos. En resumen, esta ruta se utiliza para obtener todos los productos, y asi sucesivamente se , el siguente se obtiene productos por id cuando el cliente realiza solicitud get a la url y asi hasta el ultimo router get....

//En resumen, estas líneas de código definen diferentes rutas para diferentes operaciones relacionadas con los productos. Cada ruta tiene una función asociada que se ejecuta cuando se accede a esa ruta específica. Por ejemplo, cuando un cliente realiza una solicitud GET a "/productos", se ejecuta la función correspondiente para obtener todos los productos, obtener un producto por su ID, crear un nuevo producto, actualizar un producto existente o eliminar un producto.
