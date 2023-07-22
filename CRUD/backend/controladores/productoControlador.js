// Haremos algunos metodos en este archivo, bueno vamos a hacer el get product que me imagino que es como una inserccion de datos , mas adelante comentareo si es eso o no
//----------------------------------------------

// Estas funciones te permiten manejar diferentes operaciones relacionadas con los productos, como obtener una lista de productos, obtener un producto específico, crear un nuevo producto y actualizar un producto existente. El uso de los parámetros req y res te permite comunicarte con el cliente y enviar respuestas de acuerdo a las operaciones realizadas.

// "req" es la abreviatura de "request" (solicitud) y contiene información sobre la solicitud que el cliente envía al servidor. Puede incluir cosas como los datos que el cliente envía en la solicitud.

// "res" es la abreviatura de "response" (respuesta) y se utiliza para enviar una respuesta desde el servidor de vuelta al cliente.

//-------------------------------------------------------------

//Al importar PrismaClient del paquete @prisma/client y crear una instancia de PrismaClient, estás configurando la conexión a la base de datos y obteniendo acceso a las funcionalidades de Prisma para interactuar con la base de datos de tu aplicación.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const obtenerProductos = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const obtenerProductosPorID = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const crearProductos = async (req, res) => {
  const { nombre, precio } = req.body;

  try {
    const producto = await prisma.product.create({
      data: {
        nombre: nombre,
        precio: precio,
      },
    });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const actualizarProductos = async (req, res) => {
  const { nombre, precio } = req.body;

  try {
    const producto = await prisma.product.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nombre: nombre,
        precio: precio,
      },
    });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const eliminarProductos = async (req, res) => {
  const { nombre, precio } = req.body;

  try {
    const producto = await prisma.product.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

/* 

obtenerProductos: Esta función se encarga de obtener todos los productos almacenados en la base de datos. Utiliza el método findMany de Prisma para realizar una consulta a la tabla "product" y obtener todos los registros. Luego, responde con una lista de productos en formato JSON con el estado 200 si la operación es exitosa, o responde con un mensaje de error y el estado 500 en caso de ocurrir algún problema en la consulta.

obtenerProductosPorID: Esta función se utiliza para obtener un producto específico por su ID. Utiliza el método findUnique de Prisma, que busca un único registro basado en el ID proporcionado en los parámetros de la solicitud. Si el producto con el ID especificado se encuentra en la base de datos, se responde con los datos del producto en formato JSON y el estado 200. En caso contrario, si no se encuentra el producto, responde con un mensaje de error y el estado 404.

crearProductos: Esta función se encarga de crear un nuevo producto en la base de datos. Utiliza el método create de Prisma para insertar un nuevo registro en la tabla "product" con los datos proporcionados en el cuerpo de la solicitud (nombre y precio). Si la creación es exitosa, se responde con los datos del producto recién creado en formato JSON y el estado 201. Si ocurre algún error durante la creación, se responde con un mensaje de error y el estado 400.

actualizarProductos: Esta función se utiliza para actualizar un producto existente en la base de datos por su ID. Utiliza el método update de Prisma para buscar el producto por su ID y actualizar sus datos con los valores proporcionados en el cuerpo de la solicitud (nombre y precio). Si la actualización es exitosa, se responde con los datos actualizados del producto en formato JSON y el estado 201. En caso de algún error durante la actualización, se responde con un mensaje de error y el estado 400.

eliminarProductos: Esta función se encarga de eliminar un producto de la base de datos por su ID. Utiliza el método delete de Prisma para buscar el producto por su ID y eliminarlo de la tabla "product". Si la eliminación es exitosa, se responde con los datos del producto eliminado en formato JSON y el estado 201. Si ocurre algún error durante la eliminación, se responde con un mensaje de error y el estado 400.

*/
