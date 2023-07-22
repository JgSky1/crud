import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoLista from "./componentes/productoLista"; //lam
import AgregarProducto from "./componentes/agregarProducto";
import EditarProducto from "./componentes/editarProducto";

function App() {
  return (
    <>
      <div className="container"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductoLista />} />
          <Route path="/agregar" element={<AgregarProducto />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*

import { useState } from 'react';: Importamos la función useState desde la biblioteca de React. useState es un gancho (hook) que permite añadir estado a los componentes funcionales en React.

import { BrowserRouter, Routes, Route } from 'react-router-dom';: Importamos tres componentes proporcionados por la biblioteca react-router-dom, que es una biblioteca de enrutamiento para React. BrowserRouter es un componente que envuelve nuestra aplicación y habilita el enrutamiento, Routes es el componente que contiene todas las rutas de la aplicación, y Route es el componente que define una ruta específica y qué componente se debe renderizar cuando la ruta coincide.

import ProductoLista from './componentes/productoLista';: Importamos el componente ProductoLista desde el archivo productoLista.js ubicado en la carpeta componentes. Es importante destacar que el nombre del componente comienza con una letra mayúscula, siguiendo la convención de nombres en React.

En el componente App:
a. Encerramos todo en un fragmento <>...</> para asegurarnos de que solo haya un elemento raíz.
b. Creamos un div con la clase CSS container. Esta parte puede contener otros elementos o componentes que desees mostrar en tu aplicación.
c. Luego, utilizamos el componente BrowserRouter para envolver nuestras rutas.
d. Dentro de BrowserRouter, definimos las rutas utilizando el componente Routes. En este caso, tenemos una sola ruta que coincide con la URL "/". Cuando el usuario acceda a la página principal (URL "/"), se renderizará el componente ProductoLista.
e. Usamos el componente Route para especificar qué componente debe renderizarse cuando la ruta coincida. Aquí, utilizamos la prop path para indicar que la ruta coincide con "/" y la prop element para especificar que el componente a renderizar es ProductoLista.

*/
