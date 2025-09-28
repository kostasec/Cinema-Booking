package rppbackend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rppbackend.model.Film;
import rppbackend.model.Rezervacija;
import rppbackend.repository.RezervacijaRepository;

@Service
public class RezervacijaService {

	 @Autowired
	    private RezervacijaRepository rezervacijaRepository;

	    public List<Rezervacija> getAll() {
	        return rezervacijaRepository.findAll();
	    }

	    public List<Rezervacija> findByFilm(Film film) {
	        return rezervacijaRepository.findByFilm(film);
	    }

	    public Optional<Rezervacija> findById(Integer id) {
	        return rezervacijaRepository.findById(id);
	    }

	    public List <Rezervacija> findByPlacenoTrue() {
	        return rezervacijaRepository.findByPlacenoTrue();
	    }


	    public Rezervacija save(Rezervacija rezervacija) {
	        return rezervacijaRepository.save(rezervacija);
	    }

	    public boolean existsById(Integer id) {
	        return rezervacijaRepository.existsById(id);
	    }

	    public void deleteById(Integer id) {
	        rezervacijaRepository.deleteById(id);
	    }


	
	

}
