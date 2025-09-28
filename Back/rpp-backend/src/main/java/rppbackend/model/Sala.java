package rppbackend.model;
import java.io.Serializable;
import java.lang.Integer;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * Entity implementation class for Entity: Sala
 *
 */
@Entity
@Table(name = "Sala", schema = "public")
@NamedQuery(name="Sala.findAll", query="SELECT s FROM Sala s")
public class Sala implements Serializable {

	   
	@Id
	@SequenceGenerator(name="SALA_ID_GENERATOR", sequenceName="SALA_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SALA_ID_GENERATOR")
	private Integer id;
	private Integer kapacitet;
	private Integer broj_redova;
	
	@ManyToOne
	@JoinColumn(name="bioskop")
	private Bioskop bioskop;

	private static final long serialVersionUID = 1L;
	
	@OneToMany(mappedBy = "sala")
	@JsonIgnore
	private List<Rezervacija> rezervacija;
	
	
	
	public Sala() {
		super();
	}   
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}   
	public Integer getKapacitet() {
		return this.kapacitet;
	}

	public void setKapacitet(Integer kapacitet) {
		this.kapacitet = kapacitet;
	}   
	public Integer getBroj_redova() {
		return this.broj_redova;
	}

	public void setBroj_redova(Integer broj_redova) {
		this.broj_redova = broj_redova;
	}   
	public Bioskop getBioskop() {
		return this.bioskop;
	}

	public void setBioskop(Bioskop bioskop) {
		this.bioskop = bioskop;
	}
   
}
