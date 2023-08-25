package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final MarcaRepository repositoryM;
	private final ProductoRepository repositoryP;
	private final VentaRepository repositoryV;
	private final IngresoRepository repositoryI;


	@Autowired
	public DatabaseLoader(MarcaRepository repositoryM,
						ProductoRepository repositoryP,
						VentaRepository repositoryV,
						IngresoRepository repositoryI) {

		this.repositoryM = repositoryM;
		this.repositoryP = repositoryP;
		this.repositoryV = repositoryV;
		this.repositoryI = repositoryI;

	}


	@Override
	public void run(String... strings) throws Exception {
		this.repositoryM.save(new Marca("Adidas", "Ropa", "Ropa de verano"));
		this.repositoryM.save(new Marca("Nestle","Comida","Comida Enlatada"));
		this.repositoryM.save(new Marca("Intel","Equipo","Equipo tecnologico"));
		Marca iProd = new Marca("Promar","servicio",".");
		this.repositoryM.save(iProd);
		Marca iJuegos = new Marca("Nintendo","virtual", ".");
		this.repositoryM.save(iJuegos);
		this.repositoryM.save(new Marca("Batería","Instrumento","."));


		this.repositoryP.save(new Producto("Lego"));
		Producto pSamsung = new Producto("Samsung");
		this.repositoryP.save(pSamsung);
		Producto pRedmi = new Producto("Redmi");
		this.repositoryP.save(pRedmi);


		Venta vCelu = new Venta("Celular");
		this.repositoryV.save(vCelu);


		this.repositoryI.save(new Ingreso(vCelu, pSamsung, iProd));
		this.repositoryI.save(new Ingreso(vCelu, pRedmi, iJuegos));



	}
}