import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // 
const Carrito = () => {
  const { cart, setCart } = useContext(CartContext); // obtenemos el carrito y la función para actualizarlo
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...cart];        // copiamos el array actual
    nuevoCarrito.splice(index, 1);         // eliminamos el item en la posición
    setCart(nuevoCarrito);                 // actualizamos el estado del carrito
  };

  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="bg-white shadow rounded p-4 flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => eliminarDelCarrito(index)}
                className="text-red-600 hover:text-red-800"
              >
                Borrar
              </button>
            </div>
          ))}

          <div className="mt-4 text-right font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>

          <div className="mt-4 text-right">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Ir a pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
