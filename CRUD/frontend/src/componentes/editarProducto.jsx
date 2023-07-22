import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditarProducto = () => {
  // Estado para almacenar el nombre y precio del producto
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  // Hook de navegación para redirigir al usuario después de actualizar el producto
  const navigate = useNavigate();

  // Obtener el ID del producto desde los parámetros de la URL usando useParams
  const { id } = useParams();

  // Hook useEffect para cargar los datos del producto al cargar el componente
  useEffect(() => {
    const obtenerProductoPorId = async () => {
      // Realizar una solicitud GET al servidor para obtener los datos del producto por su ID
      const response = await axios.get(`http://localhost:5000/productos/${id}`);
      // Actualizar el estado con los datos del producto obtenidos del servidor
      setNombre(response.data.nombre);
      setPrecio(response.data.precio);
    };
    obtenerProductoPorId(); // Llamar a la función para obtener los datos del producto
  }, [id]); // El hook se ejecutará cada vez que el ID cambie

  // Función para actualizar el producto
  const actualizarProducto = async (e) => {
    e.preventDefault();
    // Realizar una solicitud PATCH al servidor para actualizar el producto con el ID proporcionado
    await axios.patch(`http://localhost:5000/productos/${id}`, {
      nombre: nombre,
      precio: parseInt(precio),
    });
    // Redirigir al usuario a la página de inicio después de actualizar el producto
    navigate("/");
  };

  // Renderizado del formulario para editar el producto
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={actualizarProducto} className="my-19">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">
              Nombre del producto
            </label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nombre del nuevo producto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Precio</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Precio del nuevo producto"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-700 hover:bg-indigo-300 rounded-lg border-indigo-300 hover:shadow"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarProducto;

/*
Explicación del código:

 - Importamos las dependencias necesarias, incluyendo React,      useState, useEffect, axios, useNavigate y useParams.
 - Creamos el componente EditarProducto.
 - Creamos los estados nombre y precio utilizando el hook useState, que almacenarán los datos del producto a editar.
 - Utilizamos el hook useNavigate para obtener una función de navegación que nos permitirá redirigir al usuario después de actualizar el producto.
 - Utilizamos el hook useParams para obtener el ID del producto desde los parámetros de la URL.
 - Utilizamos el hook useEffect para cargar los datos del producto al cargar el componente. La función obtenerProductoPorId realiza una solicitud GET al servidor para obtener los datos del producto por su ID y actualiza los estados nombre y precio con los datos obtenidos del servidor. El hook se ejecutará cada vez que el ID cambie gracias al arreglo de dependencias [id].
 - Creamos la función actualizarProducto para manejar el evento de enviar el formulario. La función realiza una solicitud PATCH al servidor para actualizar el producto con el ID proporcionado, utilizando los valores actuales de nombre y precio almacenados en el estado.
 - Renderizamos el formulario para editar el producto. Los campos de texto están vinculados a los estados nombre y precio para que reflejen los valores actuales y se actualicen en respuesta a los cambios del usuario. Al hacer clic en el botón de "Actualizar", se llama a la función actualizarProducto, que actualiza el producto en el servidor y redirige al usuario a la página de inicio. 

*/
