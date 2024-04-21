import React, { useState, useEffect } from 'react';
import Bells from './Bells';
import Piano from './Piano';
import Cats from './Cats';
import Messi from './Messi';
import Yoshi from './Yoshi';

function Menu({ onSelectInstrument }) {
  return (
    <div className="flex justify-center mb-4">
      <button className="rounded mr-2" onClick={() => onSelectInstrument('cats')}>
        <img src="img/cat.png" alt="Cats" className="w-16 h-14 mx-auto mr-5" />
      </button>
      <button className="rounded mr-2" onClick={() => onSelectInstrument('piano')}>
        <img src="img/piano.png" alt="Piano" className="w-14 h-12 mx-auto mr-5" />
      </button>
      <button className="rounded mr-2" onClick={() => onSelectInstrument('bells')}>
        <img src="img/bell.png" alt="Bells" className="w-12 h-12 mx-auto mr-5" />
      </button>
      <button className="rounded mr-2" onClick={() => onSelectInstrument('messi')}>
        <img src="img/messi.png" alt="Messi" className="w-10 h-15 mr-5" />
      </button>
      <button className="rounded mr-2" onClick={() => onSelectInstrument('yoshi')}>
        <img src="img/yoshi.png" alt="Yoshi" className="w-12 h-12 mx-auto mr-5" />
      </button>
    </div>
  );
}

function App() {
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [showMenu, setShowMenu] = useState(true); // showMenu en true, sino al refrescar el menu no se ve

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth < 1100);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectInstrument = (instrument) => {
    if (selectedInstrument === instrument) {
      setSelectedInstrument(null); // Deseleccionar si ya estaba seleccionado
    } else {
      setSelectedInstrument(instrument);
    }
  };

  return (
    <div className="container mx-auto p-4" style={{ padding: 0 }}>
      {showMenu && (
        <div className="flex justify-center mb-4">
          <Menu onSelectInstrument={handleSelectInstrument} />
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {selectedInstrument === 'bells' && <Bells />}
        {selectedInstrument === 'piano' && <Piano />}
        {selectedInstrument === 'cats' && <Cats />}
        {selectedInstrument === 'messi' && <Messi />}
        {selectedInstrument === 'yoshi' && <Yoshi />}
        {window.innerWidth >= 1100 && (
          <>
            <Bells />
            <Piano />
            <Cats />
            <Messi />
            <Yoshi />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
