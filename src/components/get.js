import React, { useState, useEffect } from 'react';
import axios from 'axios';

 
function Details() {
 
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div>
            <h1 className='center'>REVIEW</h1>
        <div className="bokk">
            <table className='tb1'>
                <thead>
                    <tr>
                        <th className='rw'>ID</th>
                        <th  className='rw'>Hotel Name</th>
                        <th  className='rw'>Address</th>
                        <th  className='rw'>Review</th>
                        <th  className='rw'>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.hotelname}</td>
                            <td>{movie.address}</td>
                            <td>{movie.review}</td>
                            <td>{movie.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
 
}
 
export default Details;