package rppbackend.repository;
import java.math.BigDecimal;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import rppbackend.model.Bioskop;
import rppbackend.model.Sala;


public interface SalaRepository extends JpaRepository<Sala, Integer>{
	
	List<Sala> findByBioskop(Bioskop bioskop);
	List<Sala> findByKapacitetLessThanOrderById(BigDecimal kapacitet);


	


}
