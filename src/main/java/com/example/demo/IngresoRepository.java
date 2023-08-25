package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "ingresos", path = "ingresos")
public interface IngresoRepository extends CrudRepository<Ingreso, Long> {
    
}