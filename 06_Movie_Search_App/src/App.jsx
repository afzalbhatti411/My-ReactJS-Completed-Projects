import React, { useState } from "react";

export default function MovieSearchApp(){

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const API_KEY = '2f99e84e';

  const searchMovie = async ()=>{

    if(!searchQuery) return;

    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
    const data = await response.json();

    console.log(data);

    if(data.Response === "True"){
      setMovies(data.Search);
    }
  }


  return(
    <>
    <div>
    <h3>Movie Search App </h3>
    <input type="text" placeholder="Enter Movie Name..." value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />
    <button onClick={searchMovie}> Search </button>
    <div>
      {movies.map((item, index)=>(
        <div key={index}>
          <img src={item.Poster} alt={item.Title} />
          <h3>{item.Title}</h3>
          <p>{item.Year}</p>
        </div>
      ))}
    </div>
    </div>
      </>
  )

}