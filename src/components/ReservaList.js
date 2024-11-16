import React from 'react';
import axios from 'axios';

function ReservaList({ reservas, setReservas }) {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/reservas/${id}`);
      setReservas(reservas.filter(reserva => reserva.id !== id));
      alert('Reserva eliminada exitosamente!');
    } catch (error) {
      console.error('Hubo un error al eliminar la reserva:', error);
      alert('Error al eliminar la reserva.');
    }
  };

  const handleUpdate = async (id) => {
    const nuevaFechaInicio = prompt("Ingrese nueva fecha de inicio (YYYY-MM-DD):");
    const nuevaFechaFin = prompt("Ingrese nueva fecha de fin (YYYY-MM-DD):");

    if (nuevaFechaInicio && nuevaFechaFin) {
      try {
        const updatedReserva = {
          fechaInicio: nuevaFechaInicio,
          fechaFin: nuevaFechaFin,
        };

        const response = await axios.put(`http://localhost:8080/api/reservas/${id}`, updatedReserva);
        setReservas(reservas.map(reserva => reserva.id === id ? response.data : reserva));
        alert('Reserva actualizada exitosamente!');
      } catch (error) {
        console.error('Hubo un error al actualizar la reserva:', error);
        alert('Error al actualizar la reserva.');
      }
    }
  };

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre Cliente</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(reserva => (
            <tr key={reserva.id}>
              <td>{reserva.nombreCliente}</td>
              <td>{reserva.fechaInicio}</td>
              <td>{reserva.fechaFin}</td>
              <td>{reserva.tipoHabitacion}</td>
              <td>
                <button onClick={() => handleUpdate(reserva.id)}>Actualizar</button>
                <button onClick={() => handleDelete(reserva.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservaList;
