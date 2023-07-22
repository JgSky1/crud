import React, { useState } from "react"; // Importar React y useState del paquete 'react'
import axios from "axios"; // Importar el módulo axios para hacer solicitudes HTTP
import { Navigate, useNavigate } from "react-router-dom"; // Importar Navigate y useNavigate de 'react-router-dom'

const AgregarProducto = () => {
  // Definir un componente funcional llamado AgregarProducto
  const [nombre, setNombre] = useState(""); // Definir el estado 'nombre' y su función para actualizarlo utilizando el hook useState
  const [precio, setPrecio] = useState(""); // Definir el estado 'precio' y su función para actualizarlo utilizando el hook useState
  const navigate = useNavigate(); // Obtener la función navigate para redireccionar a diferentes rutas

  const guardarProducto = async (e) => {
    // Definir una función asincrónica guardarProducto que se ejecutará al enviar el formulario
    e.preventDefault(); // Prevenir la acción por defecto del formulario (no se recargará la página)
    await axios.post("http://localhost:5000/productos", {
      // Enviar una solicitud POST al servidor para guardar el nuevo producto
      nombre: nombre, // Enviar el nombre del producto desde el estado 'nombre'
      precio: parseInt(precio), // Enviar el precio del producto desde el estado 'precio' (convertido a un número entero usando parseInt)
    });
    navigate("/"); // Redireccionar a la página principal después de guardar el producto
  };

  return (
    // Renderizar el componente AgregarProducto
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={guardarProducto} className="my-19">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bol text-slate-700">
              Nombre del producto
            </label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 roundend-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nombre del nuevo producto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} // Actualizar el estado 'nombre' con el valor del campo de entrada
            />
          </div>
          <div className="mb-5">
            <label className="font-bol text-slate-700">Precio</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 roundend-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Precio del nuevo producto"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)} // Actualizar el estado 'precio' con el valor del campo de entrada
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-700 hover:bg-indigo-300 rounded-lg border-indigo-300 hover:shadow"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarProducto; // Exportar el componente AgregarProducto para poder utilizarlo en otros lugares de la aplicación
