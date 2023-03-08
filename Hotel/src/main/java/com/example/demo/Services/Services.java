package com.example.demo.Services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Hotelmodel;
import com.example.demo.Repositories.Repositories;



@Service
public class Services {
	@Autowired
	Repositories repository;
	public Optional<Hotelmodel>getHotelmodel(int id){
		return repository.findById(id);
	}
	public String updateDetails(Hotelmodel foo) {
		repository.save(foo);
		return "updated";
	}
	public String deleteDetails(int id)
	{
		repository.deleteById(id);
		return "Id deleted";
	}

}
