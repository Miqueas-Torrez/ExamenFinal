package com.hotel.hotel_reservas.service;

import com.hotel.hotel_reservas.model.Reserva;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private List<Reserva> reservas = new ArrayList<>();
    private Long idCounter = 1L;

    public List<Reserva> getAllReservas() {
        return reservas;
    }

    public Optional<Reserva> getReservaById(Long id) {
        return reservas.stream()
                .filter(reserva -> reserva.getId().equals(id))
                .findFirst();
    }

    public Reserva createReserva(String nombreCliente, String fechaInicio, String fechaFin, String tipoHabitacion) {
        Reserva nuevaReserva = new Reserva(idCounter++, nombreCliente, fechaInicio, fechaFin, tipoHabitacion);
        reservas.add(nuevaReserva);
        return nuevaReserva;
    }

    public Reserva updateReserva(Long id, String nombreCliente, String fechaInicio, String fechaFin, String tipoHabitacion) {
        Optional<Reserva> reservaOpt = getReservaById(id);
        if (reservaOpt.isPresent()) {
            Reserva reserva = reservaOpt.get();
            reserva.setNombreCliente(nombreCliente);
            reserva.setFechaInicio(fechaInicio);
            reserva.setFechaFin(fechaFin);
            reserva.setTipoHabitacion(tipoHabitacion);
            return reserva;
        }
        return null;
    }

    public boolean deleteReserva(Long id) {
        return reservas.removeIf(reserva -> reserva.getId().equals(id));
    }
}
