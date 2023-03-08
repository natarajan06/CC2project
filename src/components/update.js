import React, { useState, useEffect } from "react";
import axios from "axios";
// import NavBar from "./navbar";
// import Navbar from "./navb";
// import './update.css';

function TodoItem() {
  const [todo, setTodo] = useState({
    id: "",
    hotelname: "",
    address: "",
    review:"",
    rating:""
  });

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8081/put`, todo).then((res) => {
      console.log(res.data);
      setTodo({ id: "", hotelname: "", address: "" ,review:"" ,rating:""});
    });
  };

  return (
    <div>
        {/* <Navbar/> */}
    <div>
        <h1><b>UPDATE</b></h1>
        <hr/>
      <form onSubmit={handleSubmit}>
        <label>
          <b>ID</b>
          <input type="number" name="id" value={todo.id} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          <b>Hotelname</b>
          <input type="text" name="hotelname" value={todo.hotelname} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
         <b> Address</b>
          <input type="text" name="address" value={todo.address} onChange={handleChange} />
        </label>
        <label>
         <b> Review</b>
          <input type="dropdown" name="review" value={todo.review} onChange={handleChange} />
          
        </label>
        <label>
         <b> rating</b>
          <input type="range" min="1" max="5" name="rating" value={todo.rating} onChange={handleChange} />
        </label>
        
        <br/>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
}
export default TodoItem;