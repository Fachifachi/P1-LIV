import React, { useEffect, useState } from 'react';

import Yoshi_1 from '/public/notes/YOSHI/yoshi_1.mp3';
import Yoshi_2 from '/public/notes/YOSHI/yoshi_2.mp3';
import Yoshi_3 from '/public/notes/YOSHI/yoshi_3.mp3';
import Yoshi_4 from '/public/notes/YOSHI/yoshi_4.mp3';

function Yoshi() {
  const [currentSound, setCurrentSound] = useState(null);

  const yoshiNotes = [
    { key: 'z', label: '1', sound: Yoshi_1 },
    { key: 'x', label: '2', sound: Yoshi_2 },
    { key: 'c', label: '3', sound: Yoshi_3 },
    { key: 'v', label: '4', sound: Yoshi_4 },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const note = yoshiNotes.find((item) => item.key === key);
      if (note) {
        if (currentSound) {
          // Detener el sonido actual antes de reproducir uno nuevo
          currentSound.pause();
          currentSound.currentTime = 0;
        }
        const sound = new Audio(note.sound);
        sound.play();
        setCurrentSound(sound);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSound, yoshiNotes]);

  // Determinar si la pantalla es menor de 1400px de ancho
  const isLessThan1400px = window.innerWidth < 1100;

  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px && // Solo mostrar los botones si la pantalla es menor de 1400px
          yoshiNotes.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (currentSound) {
                  // Detener el sonido actual antes de reproducir uno nuevo
                  currentSound.pause();
                  currentSound.currentTime = 0;
                }
                const sound = new Audio(item.sound);
                sound.play();
                setCurrentSound(sound);
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

export default Yoshi;
