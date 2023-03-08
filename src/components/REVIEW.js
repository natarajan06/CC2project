import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
class REVIEW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      hotelame:'',
      address: '',
      review:'',
      rating: '',
    };
  }

  handlefirstNameChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ hotelname: event.target.value });
  };
  handlemailidChange = (event) => {
    this.setState({ address: event.target.value });
  };
  handlenumberChange = (event) => {
    this.setState({ review: event.target.value });
  };
  handlepassChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      hotelname: this.state.hotelname,
      address: this.state.address,
      review: this.state.review,
      rating: this.state.rating
    };
    axios.post('http://localhost:8081/post', data)
    // axios.delete('http://localhost:8081/del', data)
  };
    render(){
      return(
        <div className="box" >
      <div className="reg">    

            <label className="name" id="lname2"><b>ID:</b>
            </label>
            <input type="number" name="uname" id="uname" placeholder="id number" value={this.state.id} onChange={this.handlefirstNameChange} />    
          <form id="regform" name="suForm" onSubmit={this.handleSubmit}>    
            <label className="name" ><b>Hotel Name:</b>
            </label>
            <input type="text" id="uname" placeholder="hotel name" value={this.state.hotelname} onChange={this.handleLastNameChange} /> 
            <br /><br /> 

            <label><b>Address: </b></label>
            <input type="text" id="uname" placeholder="Address" value={this.state.address} onChange={this.handlenumberChange} /> 
            <br /><br /> <br /><br /> 
             <label className="drop">
            <select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="N/A">Feedback</option>
    <option value="1">Bad</option>
    <option value="2">Better</option>
    <option value="3">Good</option>
    <option value="4">Excellent</option>
</select>
</label>
<br></br>
            {/* <label className="name" id="name1" ><b>Review:</b>
            </label> */}

            {/* <input type="text" id="uname" value={this.state.review} onChange={this.handlepassChange} />  */}

            <label className="rate" id="lname1"><b>Rating:</b>
            </label>

            <input type="range" min="1" max="5" />
            <br></br>
            <button className="button" type="submit">Submit</button>
        
          </form>
        </div></div>
  );
            }
          }
export default REVIEW;