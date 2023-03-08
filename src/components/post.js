import React, { useState } from 'react';

function PostForm() {
  const [id, setId] = useState('');
  const [hotelname, sethotelname] = useState('');
  const [address, setaddress] = useState('');
  const [review, setreview] = useState('');
  const [rating, setrating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      hotelname:hotelname,
      address: address,
      review: review,
      rating:rating
    };

    fetch('http://localhost:8081/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Post </h2>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={event => setId(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">hotelname:</label>
        <input type="text" id="hotelname" name="hotelname" value={hotelname} onChange={event => sethotelname(event.target.value)} />
      </div>
      <div>
        <label htmlFor="address">address:</label>
        <input type="text" id="address" name="address" value={address} onChange={event => setaddress(event.target.value)} />
      </div>
      <div>
        <label htmlFor="review">review:</label>
        <input type="text" id="review" name="review" value={review} onChange={event => setreview(event.target.value)} />
      </div>
      <div>
        <label htmlFor="rating"  min="0" max="5" >rating:</label>
        <input type="range" id="rating" name="rating" value={rating} onChange={event => setrating(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;