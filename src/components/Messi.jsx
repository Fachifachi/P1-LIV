import React, { useEffect, useState } from 'react';
import mSound from '../../public/notes/MESSI/messi.mp3';

function Messi() {
  const [audio, setAudio] = useState(null);

  const playAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    } else {
      const newAudio = new Audio(mSound);
      setAudio(newAudio);
      newAudio.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase(); // Convertir la tecla a minúscula
      if (key === 'm') { // Comparar con 'm' en minúscula
        playAudio();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [audio]);

  const isLessThan1400px = window.innerWidth < 1100;

  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px &&
          <button
            onClick={playAudio}
            className='bg-yellow-500 text-white font-bold rounded-full'
            style={{ width: '50px', height: '50px', margin: '5px' }}
          >
            10
          </button>
        }
      </div>
    </div>
  );
}

export default Messi;
