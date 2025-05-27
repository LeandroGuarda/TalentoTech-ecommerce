import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Productos from './components/pages/Productos';
import Contacto from './components/pages/Contacto';
import SobreNosotros from './components/pages/SobreNosotros';
import Servicios from './components/pages/Servicios';
import Carrito from './components/pages/Carrito';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cartCount={cart.length} />
      
      <Routes>
        <Route path="/" element={<Productos setCart={setCart} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path='/carrito' element={<Carrito cart={cart} />} />
       
      </Routes>

      <Footer />
    </>
  );
}

export default App;
