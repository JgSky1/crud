import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const ProductoLista = () => {
  // Obtener la función `mutate` del hook `useSWRConfig`
  const { mutate } = useSWRConfig();

  // Definir la función `fetcher` para obtener los datos de productos desde el servidor
  const fetcher = async () => {
    try {
      // Realizar una solicitud GET a "http://localhost:5000/productos/"
      const response = await axios.get("http://localhost:5000/productos/");
      // Devolver los datos recibidos
      return response.data;
    } catch (error) {
      // Si ocurre un error al obtener los datos, mostrarlo en la consola
      console.error("Error al obtener los datos:", error);
      // Devolver null para indicar que no se pudieron obtener los datos
      return null;
    }
  };

  // Utilizar el hook `useSWR` para obtener los datos de productos usando la clave "productos"
  // y la función `fetcher` para realizar la solicitud al servidor
  const { data } = useSWR("productos", fetcher);

  // Renderizado condicional en caso de que los datos aún no hayan sido obtenidos
  if (!data) return <h2>Cargando...</h2>;
  // Definir la función `eliminarProducto` que elimina un producto mediante una solicitud DELETE al servidor
  const eliminarProducto = async (productId) => {
    try {
      // Realizar una solicitud DELETE al servidor para eliminar el producto con el ID proporcionado
      await axios.delete(`http://localhost:5000/productos/${productId}`);
      // Después de eliminar el producto, actualizar los datos de productos en tiempo real usando `mutate`
      mutate("productos");
    } catch (error) {
      // Si ocurre un error al eliminar el producto, mostrarlo en la consola
      console.error("Error al eliminar el producto:", error);
    }
  };
  // Renderizar la lista de productos en una tabla
  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        {/* Enlace para agregar un nuevo producto */}
        <Link
          to="/agregar"
          className="bg-green-500 hover:bg-green-300 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg mt-3"
        >
          Añadir producto
        </Link>
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-grey-100">
              <tr>
                <th className="py-3 px-1 text-center">N</th>
                <th className="py-3 px-6">Nombre del producto</th>
                <th className="py-3 px-6">Precio</th>
                <th className="py-3 px-1 text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapear los datos de productos para renderizar cada fila de la tabla */}
              {data.map((producto, index) => (
                <tr className="bg-white border-b" key={producto.id}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {producto.nombre}
                  </td>
                  <td className="py-3 px-6">{producto.precio}</td>
                  <td className="py-3 px-1 text-center">
                    {/* Enlace para editar el producto */}
                    <Link
                      to={`/editar/${producto.id}`}
                      className="bg-green-500 hover:bg-green-300 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg mt-3"
                    >
                      Editar
                    </Link>
                    {/* Botón para eliminar el producto */}
                    <button
                      onClick={() => eliminarProducto(producto.id)}
                      className="bg-red-500 hover:bg-red-300 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg mt-3"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductoLista;

//La función fetcher se utiliza para obtener los datos de productos desde el servidor que se está ejecutando en http//localhost:5000/productos utilizando Axios, y luego devuelve los datos recibidos

//Aqui creamos todo lo que es el html por asi decirlo con sus clases basicamente esto es un componente, con la palabra rafce podemos crear sintaxis sin escribir linea por linea

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Importaciones: Se importan los módulos y hooks necesarios para el componente, incluyendo React, Link y useSWR de react-router-dom, axios para realizar las solicitudes HTTP y useSWRConfig de swr.

Función ProductoLista: Es una función de componente que renderiza la lista de productos. Esta función utiliza el hook useSWR para obtener los datos de productos desde el servidor y el hook useSWRConfig para acceder a la función mutate que se utilizará más adelante.

Función fetcher: Es una función asíncrona que realiza una solicitud GET al servidor para obtener los datos de productos. Si la solicitud es exitosa, devuelve los datos recibidos; de lo contrario, devuelve null. También maneja cualquier error que pueda ocurrir durante la solicitud.

Uso del hook useSWR: Se utiliza el hook useSWR para obtener los datos de productos desde el servidor utilizando la clave "productos" y la función fetcher para realizar la solicitud. La variable data contendrá los datos recibidos del servidor.

Renderizado condicional: Se realiza un renderizado condicional para mostrar el mensaje "Cargando..." en caso de que los datos aún no hayan sido obtenidos. Esto evita que se renderice la tabla antes de que se obtengan los datos.

Función eliminarProducto: Es una función asíncrona que realiza una solicitud DELETE al servidor para eliminar un producto mediante su ID. Después de eliminar el producto, se utiliza la función mutate para actualizar los datos de productos en tiempo real, lo que evita la necesidad de hacer otra solicitud GET al servidor para obtener los datos actualizados.

Renderizado de la lista de productos: Se renderiza la lista de productos en una tabla utilizando el método map para recorrer los datos recibidos y renderizar cada fila de la tabla con los detalles del producto. Cada fila incluye un enlace para editar el producto y un botón para eliminarlo. Cuando se hace clic en el botón de eliminar, se llama a la función eliminarProducto para eliminar el producto del servidor y actualizar los datos de productos en tiempo real.*/
