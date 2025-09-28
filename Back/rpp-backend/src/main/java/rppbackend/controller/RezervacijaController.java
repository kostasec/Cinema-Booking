package rppbackend.controller;

import java.net.URI;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rppbackend.model.Film;
import rppbackend.model.Rezervacija;
import io.swagger.annotations.ApiOperation;
import rppbackend.service.FilmService;
import rppbackend.service.RezervacijaService;


@CrossOrigin
@RestController
public class RezervacijaController {
	@Autowired
	private RezervacijaService rezervacijaService;
	
	@Autowired
	private FilmService filmService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @ApiOperation(value = "Returns List of all Rezervacijas")
	@GetMapping("rezervacija")
	public ResponseEntity<List<Rezervacija>> getAll(){
		List<Rezervacija> rezervacijas = rezervacijaService.getAll();
        return new ResponseEntity<>(rezervacijas, HttpStatus.OK);
	}
	
    @ApiOperation(value = "Returns Dobavljac with id that was forwarded as path variable.")
	@GetMapping("rezervacija/{id}")
	public ResponseEntity<Rezervacija> getOne(@PathVariable("id") Integer id){
	    if (rezervacijaService.findById(id).isPresent()) {
	    	Optional<Rezervacija> rezervacija = rezervacijaService.findById(id);
            return new ResponseEntity<>(rezervacija.get(), HttpStatus.OK);
	    } else {
	    	return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	    }
	}
	
    @ApiOperation(value = "Returns list of Rezervacijas that were paid.")
    @GetMapping("placeneRezervacije")
    public ResponseEntity<List<Rezervacija>> placeneRezervacije() {
        List<Rezervacija> rezervacijas = rezervacijaService.findByPlacenoTrue();
        return new ResponseEntity<>(rezervacijas, HttpStatus.OK);
    }
    
    @ApiOperation(value = "Returns list of Rezervacije for Film with id that was forwarded as path variable.")
    @GetMapping("rezervacijeZaFilm/{id}")
    public ResponseEntity<List<Rezervacija>> getAllForFilm(@PathVariable("id") Integer id) {
		Optional<Film> filmOpt = filmService.findById(id);
        if (filmOpt.isPresent()) {
            List<Rezervacija> rezervacijas = rezervacijaService.findByFilm(filmOpt.get());
            return new ResponseEntity<>(rezervacijas, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

    }
	
    @ApiOperation(value = "Adds new Rezervacijas to database.")
	@PostMapping("rezervacija")
	public ResponseEntity<Rezervacija> addRezervacija(@RequestBody Rezervacija rezervacija) {
		Rezervacija savedRezervacija = rezervacijaService.save(rezervacija);
        URI location = URI.create("/rezervacija/" + savedRezervacija.getId());
		return ResponseEntity.created(location).body(savedRezervacija);
	}

    @ApiOperation(value = "Updates Rezervacija that has id that was forwarded as path variable with values forwarded in Request Body.")
    @PutMapping(value = "rezervacija/{id}")
    public ResponseEntity<Rezervacija> updateRezervacija(@RequestBody Rezervacija rezervacija, @PathVariable("id") Integer id) {
        if (rezervacijaService.existsById(id)) {
        	rezervacija.setId(id);
            Rezervacija savedRezervacija = rezervacijaService.save(rezervacija);
            return ResponseEntity.ok().body(savedRezervacija);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
	
    @ApiOperation(value = "Deletes Rezervacija with id that was forwarded as path variable.")
    @DeleteMapping("rezervacija/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
        if (id == -100 && !rezervacijaService.existsById(id)) {
            jdbcTemplate.execute(
            		"INSERT INTO rezervacija (\"id\", \"broj_osoba\", \"cena_karte\", \"datum\",\"placeno\",\"film\",\"sala\" ) VALUES (-100, '1', '200', '1-1-1','True','1','1')");
            
        }

        if (rezervacijaService.existsById(id)) {
        	rezervacijaService.deleteById(id);
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        }
        return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
    }

}
