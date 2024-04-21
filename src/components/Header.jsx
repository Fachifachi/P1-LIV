import React from 'react';

const Header = ({ invisible }) => {
  const headerStyle = {
    visibility: invisible ? 'hidden' : 'visible', // oculta el header si invisible es true
    height: invisible ? '0' : 'auto',
    overflow: 'hidden', 
  };

  return (
    <header className="bg-gray-800 text-white py-4" style={headerStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>
        <nav className="space-x-4">
        </nav>
      </div>
    </header>
  );
};

export default Header;
