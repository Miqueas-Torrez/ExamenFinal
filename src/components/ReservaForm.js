import React, { useState } from 'react';
import axios from 'axios';

function ReservaForm({ updateReservasList }) {
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('Sencilla');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaReserva = {
      nombreCliente,
      fechaInicio,
      fechaFin,
      tipoHabitacion
    };

    try {
      const response = await axios.post('http://localhost:8080/api/reservas', nuevaReserva);
      updateReservasList(response.data);
      alert('Reserva registrada exitosamente!');
    } catch (error) {
      console.error('Hubo un error al crear la reserva:', error);
      alert('Error al registrar la reserva.');
    }

    // Limpiar el formulario
    setNombreCliente('');
    setFechaInicio('');
    setFechaFin('');
    setTipoHabitacion('Sencilla');
  };

  return (
    <div>
      <h2>Registrar Nueva Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Cliente:</label>
          <input
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Inicio:</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Fin:</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tipo de Habitación:</label>
          <select
            value={tipoHabitacion}
            onChange={(e) => setTipoHabitacion(e.target.value)}
            required
          >
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <button type="submit">Registrar Reserva</button>
      </form>
    </div>
  );
}

export default ReservaForm;
