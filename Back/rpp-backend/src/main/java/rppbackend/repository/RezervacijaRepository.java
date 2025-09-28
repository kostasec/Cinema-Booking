package rppbackend.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import rppbackend.model.Bioskop;
import rppbackend.model.Rezervacija;
import rppbackend.model.Film;
import rppbackend.model.Sala;


public interface RezervacijaRepository extends JpaRepository<Rezervacija,Integer>{
	
	List<Rezervacija> findByPlacenoTrue();

	List<Rezervacija> findByFilm(Film film);

}
