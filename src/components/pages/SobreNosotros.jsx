const SobreNosotros = () => {
  const locales = [
    {
      id: 1,
      name: "Sucursal Palermo",
      address: "Av. Santa Fe 1234, CABA",
      map: "https://maps.google.com/?q=Av.+Santa+Fe+1234,+CABA",
      phone: "011-1234-5678",
      horario: "Lunes a Viernes de 10 a 19hs",
    },
    {
      id: 2,
      name: "Sucursal Belgrano",
      address: "Av. Cabildo 5678, CABA",
      map: "https://maps.google.com/?q=Av.+Cabildo+5678,+CABA",
      phone: "011-8765-4321",
      horario: "Lunes a Sábados de 11 a 20hs",
    },
    {
      id: 3,
      name: "Sucursal Rosario",
      address: "Córdoba 345, Rosario, Santa Fe",
      map: "https://maps.google.com/?q=Córdoba+345,+Rosario",
      phone: "0341-432-1122",
      horario: "Lunes a Viernes de 9 a 18hs",
    },
    {
      id: 4,
      name: "Sucursal Mendoza",
      address: "Av. San Martín 789, Mendoza",
      map: "https://maps.google.com/?q=Av.+San+Martín+789,+Mendoza",
      phone: "0261-987-6543",
      horario: "Lunes a Sábados de 10 a 19hs",
    },
    {
      id: 5,
      name: "Sucursal Córdoba",
      address: "Av. Colón 456, Córdoba",
      map: "https://maps.google.com/?q=Av.+Colón+456,+Córdoba",
      phone: "0351-321-6543",
      horario: "Lunes a Viernes de 10 a 18hs",
    },
    {
      id: 6,
      name: "Sucursal La Plata",
      address: "Av. 7 1234, La Plata",
      map: "https://maps.google.com/?q=Av.+7+1234,+La+Plata",
      phone: "0221-654-3210",
      horario: "Lunes a Sábados de 10 a 20hs",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-8">Sobre Nosotros</h1>
      <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
        Somos Jacinto Shop, una tienda dedicada a ofrecer los mejores productos de tecnología y moda.
        Nuestro compromiso es brindar calidad y servicio excepcional a nuestros clientes.
      </p>

      <h2 className="text-2xl font-semibold text-center mb-6">Nuestras Sucursales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locales.map((locale) => (
          <div key={locale.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{locale.name}</h3>
            <p className="mb-1">{locale.address}</p>
            <a
              href={locale.map}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-1 block"
            >
              Ver en el mapa
            </a>
            <p className="mb-1">Teléfono: {locale.phone}</p>
            <p>Horario: {locale.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobreNosotros;
