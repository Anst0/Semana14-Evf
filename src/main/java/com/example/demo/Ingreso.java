package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Ingreso {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_venta")
    private Venta venta;        //Banda - venta//

    @ManyToOne()
    @JoinColumn(name = "id_producto")
    private Producto producto; //Musico - producto//

    @ManyToOne()
    @JoinColumn(name = "id_marca")
    private Marca marca;        //Instrumento - marca//


    public Ingreso() {}

    public Ingreso(Venta venta, Producto producto, Marca marca) {
        this.venta = venta;
        this.producto = producto;
        this.marca = marca;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Marca getMarca() {
		return marca;
	}

	public void setMarca(Marca marca) {
		this.marca = marca;
	}

    

}