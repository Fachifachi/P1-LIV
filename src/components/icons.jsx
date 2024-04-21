import React, { useState, useEffect } from 'react';
function Icons() {
  const [showIcons, setShowIcons] = useState(window.innerWidth >= 1100);

  useEffect(() => {
    const handleResize = () => {
      setShowIcons(window.innerWidth >= 1100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {showIcons ? (
        <div className="flex justify-around mt-4">
          <div className="text-center">
            <img src="img/cat.png" alt="A" className="w-16 h-16 mx-auto mb-1" />
            <p className="text-gray-700 text-xs">1 - 8</p>
          </div>
          <div className="text-center">
            <img src="img/piano.png" alt="B" className="w-16 h-12 mx-auto mb-1" />
            <p className="text-gray-700 text-xs">Q - I</p>
          </div>
          <div className="text-center">
            <img src="img/bell.png" alt="C" className="w-12 h-12 mx-auto mb-1" />
            <p className="text-gray-700 text-xs">A - K</p>
          </div>
          <div className="text-center">
            <img src="img/messi.png" alt="D" className="w-12 h-12 mx-auto mb-1" />
            <p className="text-gray-700 text-xs">M</p>
          </div>
          <div className="text-center">
            <img src="img/yoshi.png" alt="D" className="w-12 h-12 mx-auto mb-1" />
            <p className="text-gray-700 text-xs">Z - V</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Icons;
