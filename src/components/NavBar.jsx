import { useState, useContext } from 'react';
import { CartContext } from './pages/CartContext';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';


const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
  { name: "Sobre nosotros", path: "/sobre-nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Administración", path: "/login" }
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 const { cart } = useContext(CartContext); // Obtenemos el carrito desde el contexto
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md relative">
      <div className="grid grid-cols-3 items-center">
        {/* Logo a la izquierda */}
        <Link to="/" className="text-2xl font-bold">
          <img
            src="./logo.png"
            alt="Logo"
            className="h-20 rounded-3xl shadow-lg"
          />
        </Link>

        {/* Menú grande al centro */}
        <ul className="hidden md:flex text-lg justify-center space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-[#8245ec] transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Carrito + botón hamburguesa a la derecha */}
        <div className="flex justify-end items-center gap-4">
          {/* Botón menú hamburguesa (solo en móvil) */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Carrito */}
          <Link to="/carrito" className="relative">
            <BsCart3 className="text-2xl hover:text-[#8245ec] transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menú móvil debajo */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={closeMenu}
                className="block hover:text-[#8245ec] transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
