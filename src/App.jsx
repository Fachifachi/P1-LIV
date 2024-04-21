import React, { useState } from 'react';
import Header from './components/Header';
import Windows from './components/Windows';
import Tareas from './components/Tareas';

function App() {

  let content;
  
  return (
    <div className="App" style={{ backgroundImage: 'url("img/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', color: 'white' }}>
      <Header invisible={true} /> {/* si lo saco queda en blanco, la ventana pisa el componente de header*/}
      <Windows />
    
      {content}
      <Tareas />
    </div>
  );
}

export default App;
