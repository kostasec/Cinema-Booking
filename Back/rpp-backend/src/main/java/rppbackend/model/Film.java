package rppbackend.model;

import java.io.Serializable;
import java.lang.Integer;
import java.lang.String;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Entity implementation class for Entity: Film
 *
 */
@Entity
@Table(name="Film", schema = "public")
@NamedQuery(name="Film.findAll", query="SELECT f FROM Film f")


public class Film implements Serializable {

	   
	@Id
	@SequenceGenerator(name="FILM_ID_GENERATOR", sequenceName="FILM_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="FILM_ID_GENERATOR")
	private Integer id;
	private String naziv;
	private Integer recenzija;
	private Integer trajanje;
	private String zanr;
	private static final long serialVersionUID = 1L;

	@OneToMany(mappedBy = "film")
	@JsonIgnore
	private List <Rezervacija> rezervacija;

	
	public Film() {
		super();
	}   
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}   
	public String getNaziv() {
		return this.naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}   
	public Integer getRecenzija() {
		return this.recenzija;
	}

	public void setRecenzija(Integer recenzija) {
		this.recenzija = recenzija;
	}   
	public Integer getTrajanje() {
		return this.trajanje;
	}

	public void setTrajanje(Integer trajanje) {
		this.trajanje = trajanje;
	}   
	public String getZanr() {
		return this.zanr;
	}

	public void setZanr(String Zanr) {
		this.zanr = Zanr;
	}
   
}
