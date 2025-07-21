import { useNavigate } from 'react-router-dom';
import { useAuth } from './pages/AuthContext'; // ajustá la ruta si está en otro lugar

const ButtonLoginLogout = () => {
  const { isLogged, setIsLogged } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogged) {
      localStorage.removeItem('logueado');
      setIsLogged(false);
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-end items-center gap-4">
      <button
        onClick={handleClick}
        className="hidden md:inline-block px-4 py-2 bg-[#8245ec] text-white rounded hover:bg-[#6c3cd1] transition-colors text-sm"
      >
        {isLogged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ButtonLoginLogout;
