package rppbackend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rppbackend.model.Bioskop;

public interface BioskopRepository extends JpaRepository<Bioskop,Integer> {
	
	List<Bioskop> findByNazivContainingIgnoreCase(String naziv);

}
