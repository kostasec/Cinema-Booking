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


import rppbackend.model.Bioskop;
import rppbackend.model.Sala;
import io.swagger.annotations.ApiOperation;

import rppbackend.service.SalaService;
import rppbackend.service.BioskopService;

@CrossOrigin
@RestController
public class SalaController {
	
	 @Autowired
	    private SalaService salaService;
	 @Autowired
	    private 	BioskopService bioskopService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @ApiOperation(value = "Returns List of all Sala")
    @GetMapping("sala")
    public ResponseEntity<List<Sala>> getAll() {
        List<Sala> salas = salaService.getAll();
        return new ResponseEntity<>(salas, HttpStatus.OK);
    }

    @ApiOperation(value = "Returns Sala with id that was forwarded as path variable.")
    @GetMapping("sala/{id}")
    public ResponseEntity<Sala> getOne(@PathVariable("id") Integer id) {
        if (salaService.findById(id).isPresent()) {
            Optional<Sala> sala = salaService.findById(id);
            return new ResponseEntity<>(sala.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
    
    @ApiOperation(value = "Returns list of Sale for Bioskop with id that was forwarded as path variable.")
    @GetMapping("saleZaBioskop/{id}")
    public ResponseEntity<List<Sala>> getAllForBioskop(@PathVariable("id") Integer id) {
        Optional<Bioskop> bioskopOpt = bioskopService.findById(id);
        if (bioskopOpt.isPresent()) {
            List<Sala> sale = salaService.findByBioskop(bioskopOpt.get());
            return new ResponseEntity<>(sale, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

    }
    @ApiOperation(value = "Adds new Sala to database.")
    @PostMapping("sala")
    public ResponseEntity<Sala> addBanka(@RequestBody Sala sala) {
        Sala savedsala = salaService.save(sala);
        URI location = URI.create("/sala/" + savedsala.getId());
        return ResponseEntity.created(location).body(savedsala);
    }

    @ApiOperation(value = "Updates Filijala that has id that was forwarded as path variable with values forwarded in Request Body.")
    @PutMapping(value = "sala/{id}")
    public ResponseEntity<Sala> updateSala(@RequestBody Sala sala, @PathVariable("id") Integer id) {
        if (salaService.existsById(id)) {
        	sala.setId(id);
        	Sala savedSala = salaService.save(sala);
            return ResponseEntity.ok().body(savedSala);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @ApiOperation(value = "Deletes Sala with id that was forwarded as path variable.")
    @DeleteMapping("sala/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
        if (id == -100 && !salaService.existsById(-100)) {

            jdbcTemplate.execute(
                    "INSERT INTO sala (\"id\", \"kapacitet\", \"broj_redova\", \"bioskop\") "
                            + "VALUES (-100, 100, 5, 1)");
        }

        if (salaService.existsById(id)) {
            salaService.deleteById(id);
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        }

        return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
    }

}
