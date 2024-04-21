import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Piano from './components/Piano';
import Windows from './components/Windows';
import Messi from './components/Messi';
import Tareas from './components/Tareas';

function App() {
  const [setSelectedInstrument] = useState(null);

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
