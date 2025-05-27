import React, { useState, useEffect } from 'react';
import ModalAgregarAlCarrito from '../ModalCarrito'; // Asegurate que esté bien importado

const Productos = ({ setCart }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Cierra modal después de 2s
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-md rounded-lg p-4 m-4 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={producto.image}
              alt={producto.title}
              className="w-full h-48 object-contain rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{producto.title}</h2>
            <p className="text-gray-700 mt-1 min-h-[80px] line-clamp-3">{producto.description}</p>
            <p className="text-lg font-bold mt-2">${producto.price}</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <ModalAgregarAlCarrito show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Productos;
