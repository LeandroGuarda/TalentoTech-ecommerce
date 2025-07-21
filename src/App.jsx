import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Productos from './components/pages/Productos';
import Contacto from './components/pages/Contacto';
import SobreNosotros from './components/pages/SobreNosotros';
import Ofertas from './components/pages/Ofertas';
import Carrito from './components/pages/Carrito';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import { CartProvider } from './components/pages/CartContext';
import { AuthProvider } from './components/pages/AuthContext';
function App() {


  
  return (
    <>
    <AuthProvider>

    <CartProvider>
      <NavBar/>
      
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path='/carrito' element={<Carrito />} />
       
      </Routes>
       <Footer />
    </CartProvider>
    </AuthProvider>
    
     
    </>
  );
}

export default App;
