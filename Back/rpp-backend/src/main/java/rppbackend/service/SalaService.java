package rppbackend.service;

import java.util.List;
import java.math.BigDecimal;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rppbackend.model.Bioskop;
import rppbackend.model.Sala;
import rppbackend.repository.SalaRepository;

@Service
public class SalaService {
	
	@Autowired
	private SalaRepository salaRepository;
	
	public List<Sala> getAll(){
		return salaRepository.findAll();
	}
	
	public List<Sala> findByBioskop(Bioskop bioskop) {
        return salaRepository.findByBioskop(bioskop);
    }
	
	public Optional<Sala> findById(Integer id) {
		return salaRepository.findById(id);
	}
	
	public List<Sala> findByKapacitetLessThanOrderById(BigDecimal kapacitet) {
        return salaRepository.findByKapacitetLessThanOrderById(kapacitet);
    
	
	}
	public Sala save(Sala sala) {
		return salaRepository.save(sala);
	}
	
	public boolean existsById(Integer id) {
		return salaRepository.existsById(id);
	}
	
	public void deleteById(Integer id) {
		salaRepository.deleteById(id);
	}


}
