package rppbackend.model;

import java.io.Serializable;

import java.lang.Integer;
import java.lang.String;
import java.util.List;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Entity implementation class for Entity: Bioskop
 *
 */
@Entity
@Table(name="Bioskop", schema ="public")
@NamedQuery(name="Bioskop.findAll", query="SELECT b FROM Bioskop b")


public class Bioskop implements Serializable {

	   
	@Id
	@SequenceGenerator(name="BIOSKOP_ID_GENERATOR", sequenceName="BIOSKOP_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="BIOSKOP_ID_GENERATOR")
	private Integer id;
	private String naziv;
	private String adresa;
	private static final long serialVersionUID = 1L;

	@OneToMany(mappedBy = "bioskop")
	@JsonIgnore
	private List <Sala> sala;
	
	public Bioskop() {
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
	public String getAdresa() {
		return this.adresa;
	}

	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
   
}
