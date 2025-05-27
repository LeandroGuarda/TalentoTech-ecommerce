import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

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
