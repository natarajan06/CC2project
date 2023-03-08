package com.example.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Hotelmodel;
import com.example.demo.Repositories.Repositories;
import com.example.demo.Services.Services;

@RestController
@CrossOrigin
public class HotelController {
	@Autowired
    Repositories serviceRepository;
	@Autowired
	Services service;
	
	@GetMapping("/")
	List<Hotelmodel> getList()
	{
		return serviceRepository.findAll();
		
	}
	
	@GetMapping("{id}")
	public Optional<Hotelmodel>getbyid(@PathVariable int id)
	{
		return service.getHotelmodel(id);
	}
	
	@PostMapping("/post")
	public Hotelmodel create(@RequestBody Hotelmodel boo)
	{
		return serviceRepository.save(boo);
	}
	
	@PutMapping("/put")

	public String update(@RequestBody Hotelmodel boo)
	{
		return service.updateDetails(boo);
	}
	
	@DeleteMapping("/del")

	public String delete(@RequestParam int id)
	{
	   return service.deleteDetails(id);
	}

}