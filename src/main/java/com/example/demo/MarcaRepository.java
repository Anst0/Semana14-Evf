package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "marca", path = "marca")
public interface MarcaRepository extends CrudRepository<Marca, Long> {
    
}
