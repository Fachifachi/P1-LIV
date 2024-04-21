import React, { useEffect } from 'react';

import bellDo from '../../public/notes/BELLS/bell_do.mp3';
import bellRe from '../../public/notes/BELLS/bell_re.mp3';
import bellMi from '../../public/notes/BELLS/bell_mi.mp3';
import bellFa from '../../public/notes/BELLS/bell_fa.mp3';
import bellSol from '../../public/notes/BELLS/bell_sol.mp3';
import bellLa from '../../public/notes/BELLS/bell_la.mp3';
import bellSi from '../../public/notes/BELLS/bell_si.mp3';
import bellDoM from '../../public/notes/BELLS/bell_doM.mp3';

function Bells() {
  const bellNotes = [
    { key: 'a', label: 'Do', sound: bellDo },
    { key: 's', label: 'Re', sound: bellRe },
    { key: 'd', label: 'Mi', sound: bellMi },
    { key: 'f', label: 'Fa', sound: bellFa },
    { key: 'g', label: 'Sol', sound: bellSol },
    { key: 'h', label: 'La', sound: bellLa },
    { key: 'j', label: 'Si', sound: bellSi },
    { key: 'k', label: 'Do', sound: bellDoM },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const note = bellNotes.find((item) => item.key === key);
      if (note) {
        const sound = new Audio(note.sound);
        sound.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [bellNotes]);

  // Determinar si la pantalla es menor de 1400px de ancho
  const isLessThan1400px = window.innerWidth < 1100;

  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px && // Solo mostrar los botones si la pantalla es menor de 1400px
          bellNotes.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                const sound = new Audio(item.sound);
                sound.play();
              }}
              className='bg-blue-500 text-white font-bold rounded-full'
              style={{ width: '50px', height: '50px', margin: '5px' }}
            >
              {item.label}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Bells;
