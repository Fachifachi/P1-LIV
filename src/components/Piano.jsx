import React, { useEffect } from 'react';

import pianoDo from '../../public/notes/PIANO/Piano_do.wav';
import pianoRe from '../../public/notes/PIANO/Piano_re.wav';
import pianoMi from '../../public/notes/PIANO/Piano_mi.wav';
import pianoFa from '../../public/notes/PIANO/Piano_fa.wav';
import pianoSol from '../../public/notes/PIANO/Piano_sol.wav';
import pianoLa from '../../public/notes/PIANO/Piano_la.wav';
import pianoSi from '../../public/notes/PIANO/Piano_si.wav';
import pianoC3 from '../../public/notes/PIANO/Piano_c3.wav';

function Piano() {
  const pianoNotes = [
    { key: 'q', label: 'Do', sound: pianoDo },
    { key: 'w', label: 'Re', sound: pianoRe },
    { key: 'e', label: 'Mi', sound: pianoMi },
    { key: 'r', label: 'Fa', sound: pianoFa },
    { key: 't', label: 'Sol', sound: pianoSol },
    { key: 'y', label: 'La', sound: pianoLa },
    { key: 'u', label: 'Si', sound: pianoSi },
    { key: 'i', label: 'Do', sound: pianoC3 },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const note = pianoNotes.find((item) => item.key === key);
      if (note) {
        const sound = new Audio(note.sound);
        sound.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pianoNotes]);

  // Determinar si la pantalla es menor de 1400px de ancho
  const isLessThan1400px = window.innerWidth < 1100;

  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px && // Solo mostrar los botones si la pantalla es menor de 1400px
          pianoNotes.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                const sound = new Audio(item.sound);
                sound.play();
              }}
              className='bg-green-500 text-white font-bold rounded-full'
              style={{ width: '50px', height: '50px', margin: '5px' }}
            >
              {item.label}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Piano;
