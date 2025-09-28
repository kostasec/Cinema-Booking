package rppbackend.service;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rppbackend.model.Film;
import rppbackend.repository.FilmRepository;

@Service
public class FilmService {
	
	@Autowired
	private FilmRepository filmRepository;
	
	public List<Film> getAll(){
		return filmRepository.findAll();
	}
	
	public Optional<Film> findById(Integer id) {
		return filmRepository.findById(id);
	}
	
	public List<Film> findByNazivContainingIgnoreCase(String naziv) {
        return filmRepository.findByNazivContainingIgnoreCase(naziv);
    }
	
	public Film save(Film film) {
		return filmRepository.save(film);
	}
	
	public boolean existsById(Integer id) {
		return filmRepository.existsById(id);
	}
	
	public void deleteById(Integer id) {
		filmRepository.deleteById(id);
	}

}
