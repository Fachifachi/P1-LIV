import React, { useState, useEffect } from 'react';

function Taskbar() {
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    // Inicializar el objeto de audio una vez al montar el componente
    setAudio(new Audio('notes/XP/Xp.mp3'));

    // Limpiar el recurso de audio al desmontar el componente
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setAudio(null);
      }
    };
  }, []); // La dependencia está vacía para que solo se ejecute una vez al montar el componente

  // Función para obtener la hora actual en formato hh:mm AM/PM
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  useEffect(() => {
    // Actualizar la hora actual cada minuto
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);


    return () => {
      clearInterval(interval);
    };
  }, []); // La dependencia está vacía para que solo se ejecute una vez al montar el componente

  useEffect(() => {

    const handleSystemTimeChange = () => {
      setCurrentTime(getCurrentTime());
    };

    window.addEventListener('timeupdate', handleSystemTimeChange);

    // Limpiar la suscripción al desmontar el componente
    return () => {
      window.removeEventListener('timeupdate', handleSystemTimeChange);
    };
  }, []); 

  const playSound = () => {
    if (audio) {
      // Detener y reiniciar el audio si ya está reproduciéndose
      audio.pause();
      audio.currentTime = 0;
      
      // Reproducir el sonido
      audio.play();
    }
  };

  return (
    <div className="bg-blue-600 h-12 flex items-center justify-between fixed bottom-0 left-0 w-full px-4">
      <div className="flex items-center space-x-4">
        <button 
          className="flex items-center space-x-2 text-white bg-transparent border border-white px-4 py-1 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-600"
          onClick={playSound}
        >
          <span>Start</span>
        </button>
      </div>
      <div className="text-white">{currentTime}</div>
    </div>
  );
}

export default Taskbar;
