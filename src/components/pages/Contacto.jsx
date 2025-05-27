import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Contacto = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    setShowAlert(true);

    // Oculta la alerta después de 3 segundos (opcional)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-100  min-h-screen">
      <form
        className="bg-gray-100 p-1 rounded-lg shadow-md max-w-md mx-auto mt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center p-0 h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <input
            type="text"
            placeholder="Nombre"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="mb-4 p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Enviar
          </button>

          {showAlert && (
            <Stack sx={{ width: '100%', marginTop: 2 }} spacing={2}>
              <Alert severity="success">¡Mensaje enviado con éxito!</Alert>
            </Stack>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contacto;
