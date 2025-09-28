package rppbackend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rppbackend.model.Bioskop;
import rppbackend.repository.BioskopRepository;


@Service
public class BioskopService {
	
	
	
	@Autowired
	private BioskopRepository bioskopRepository;
	
	public List<Bioskop> getAll(){
		return bioskopRepository.findAll();
	}
	
	public Optional<Bioskop> findById(Integer id) {
		return bioskopRepository.findById(id);
	}
	
	public List<Bioskop> findByNazivContainingIgnoreCase(String naziv) {
        return bioskopRepository.findByNazivContainingIgnoreCase(naziv);
    }
	
	public Bioskop save(Bioskop bioskop) {
		return bioskopRepository.save(bioskop);
	}
	
	public boolean existsById(Integer id) {
		return bioskopRepository.existsById(id);
	}
	
	public void deleteById(Integer id) {
		bioskopRepository.deleteById(id);
	}

}



