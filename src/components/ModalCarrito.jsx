const ModalAgregarAlCarrito = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">¡Producto agregado!</h2>
        <p className="mb-4">El producto fue agregado al carrito con éxito.</p>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalAgregarAlCarrito;