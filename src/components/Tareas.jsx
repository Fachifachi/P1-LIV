import React, { useState, useEffect } from 'react';

function Taskbar() {
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
  
    setAudio(new Audio('notes/XP/Xp.mp3'));
    // Limpiar el recurso de audio al desmontar el componente
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setAudio(null);
      }
    };
  }, []); 
  // obtener la hora actual en formato hh:mm AM/PM
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
    // se actualiza la hora en la barra de tareas
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);


    return () => {
      clearInterval(interval);
    };
  }, []); 

  useEffect(() => {

    const handleSystemTimeChange = () => {
      setCurrentTime(getCurrentTime());
    };

    window.addEventListener('timeupdate', handleSystemTimeChange);
    return () => {
      window.removeEventListener('timeupdate', handleSystemTimeChange);
    };
  }, []); 

  const playSound = () => {
    if (audio) {
      // para y vuleve a repodrucir el adio si se actuva varias veces
      audio.pause();
      audio.currentTime = 0;
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
