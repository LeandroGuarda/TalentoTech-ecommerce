import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Productos from './components/pages/Productos';
import Contacto from './components/pages/Contacto';
import SobreNosotros from './components/pages/SobreNosotros';
import Servicios from './components/pages/Servicios';
import Carrito from './components/pages/Carrito';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import { CartProvider } from './components/pages/CartContext';
function App() {


  
  return (
    <>
    <CartProvider>
      <NavBar/>
      
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path='/carrito' element={<Carrito />} />
       
      </Routes>
       <Footer />
    </CartProvider>
     
    </>
  );
}

export default App;
