import React, { useState, useEffect } from 'react';
import Menu from './Menu';

function WindowsXPWindow() {
  const [isLessThan1100px, setIsLessThan1100px] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsLessThan1100px(window.innerWidth < 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`border border-blue-500 rounded-lg shadow-lg mx-auto mt-5 bg-white ${isLessThan1100px ? 'w-full' : 'w-2/3'} h-4/5`}>
      <header className="flex justify-between items-center bg-blue-700 text-white rounded-t-lg p-2">
        <h2 className="text-lg font-semibold">Music</h2>
      </header>
      <main className="p-4">
        <img src="img/smmnm77n9c501.gif" alt="Mi GIF" style={{ maxWidth: '60%', display: 'block', margin: '0 auto', marginBottom: '20px' }} /> {/* Agregamos un margen inferior de 20px */}
        <Menu />
        {!isLessThan1100px && (
          <div className="flex justify-around mt-4"> 
            <div className="text-center">
              <img src="img/cat.png" alt="A" className="w-16 h-16 mx-auto mb-1" />
              <p className="text-gray-700 text-xs">1 - 8</p>
            </div>
            <div className="text-center">
              <img src="img\piano.png" alt="B" className="w-16 h-12 mx-auto mb-1" />
              <p className="text-gray-700 text-xs">Q - I</p>
            </div>
            <div className="text-center">
              <img src="img\bell.png" alt="C" className="w-12 h-12 mx-auto mb-1" />
              <p className="text-gray-700 text-xs">A - K</p>
            </div>
            <div className="text-center">
              <img src="img\messi.png" alt="D" className="w-12 h-12 mx-auto mb-1" />
              <p className="text-gray-700 text-xs">M</p>
            </div>
            <div className="text-center">
              <img src="img\yoshi.png" alt="D" className="w-12 h-12 mx-auto mb-1" />
              <p className="text-gray-700 text-xs">Z - V</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default WindowsXPWindow;
