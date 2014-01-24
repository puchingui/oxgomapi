package oxgomapi.model;

import javax.persistence.*;

import org.openxava.annotations.*;

@Entity
public class Punto {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@ReadOnly
	private long id;
	
	@Column(length=32)
	private String nombre;
	
	@Editor("MAPA")
	@Embedded
	private Coordenada direccion;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Coordenada getDireccion() {
		return direccion;
	}

	public void setDireccion(Coordenada direccion) {
		this.direccion = direccion;
	}
}