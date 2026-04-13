import React, { useState } from "react";
import './App.css'

export default function SearchMovieApp(){

  const API_KEY = '2f99e84e';

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async ()=>{
    if(!searchQuery) return;

    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
    const data = await response.json();

    console.log(data);

    if(data.Response === 'True'){
      setMovies(data.Search);
    }
  }

  return(
    <>
    <div className="container">
    <h3> Search Movie App </h3>
    <input type="text" placeholder="Enter Movie Name..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
    <button onClick={searchMovies}>Search </button>
    <div>
      {movies.map((item, index)=>(
        <div key={index} className="movie-continer">
          <img src={item.Poster} alt={item.Title} />
          <h2>{item.Title}</h2>
          <p>{item.Year}</p>
        </div>
      ))}
    </div>
    </div>
      </>
  )
}
