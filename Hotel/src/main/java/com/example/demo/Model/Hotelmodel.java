package com.example.demo.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hotelmodel {
	@Id
	private int id;
	private String hotelname;
	private String Address;
	private String review;
	private float rating;
	public Hotelmodel(int id, String hotelname, String address, String review, int rating) {
		super();
		this.id = id;
		this.hotelname = hotelname;
		Address = address;
		this.review = review;
		this.rating = rating;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getHotelname() {
		return hotelname;
	}
	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public Hotelmodel() {
		super();
		// TODO Auto-generated constructor stub
	}

}
