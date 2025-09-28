package rppbackend.repository;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import rppbackend.model.Film;


public interface FilmRepository extends JpaRepository<Film,Integer>{
	List<Film> findByNazivContainingIgnoreCase(String naziv);

}
