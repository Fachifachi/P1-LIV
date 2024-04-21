import React from 'react';

const Header = ({ invisible }) => {
  const headerStyle = {
    visibility: invisible ? 'hidden' : 'visible', // Oculta el header si invisible es true
    height: invisible ? '0' : 'auto', // Ajusta la altura del header
    overflow: 'hidden', // Oculta cualquier contenido desbordado
  };

  return (
    <header className="bg-gray-800 text-white py-4" style={headerStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>
        <nav className="space-x-4">
          {/* Aquí podrías agregar elementos de navegación si es necesario */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
