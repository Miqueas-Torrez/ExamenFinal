import React, { useState } from 'react';
import './App.css';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';

function App() {
  const [reservas, setReservas] = useState([]);

  const updateReservasList = (newReserva) => {
    setReservas([...reservas, newReserva]);
  };

  return (
    <div className="App">
      <h1>Gestión de Reservas de Hotel</h1>
      
      {}
      <ReservaForm updateReservasList={updateReservasList} />
      
      {}
      <ReservaList reservas={reservas} setReservas={setReservas} />
    </div>
  );
}

export default App;
