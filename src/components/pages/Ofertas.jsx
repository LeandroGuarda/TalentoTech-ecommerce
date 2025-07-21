import { useEffect, useState } from "react";

import React from 'react'

export const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(()=>{
    
  fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    const filtrados = data.filter(producto => producto.price < 50); // Filtrar productos con precio menor a 50
    setOfertas(filtrados);
  });
}, []);


  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔥 Ofertas Especiales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ofertas.map(producto => (
          <div key={producto.id} className="bg-white p-4 rounded shadow">
            <img src={producto.image} alt={producto.title} className="h-40 object-contain mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{producto.title}</h3>
            <p className="text-red-500 font-bold">${producto.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );

}

export default Ofertas;
