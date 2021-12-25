import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import { imgBaseUrl } from "../config/requests";
import "../components/Row.css"

// const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); 
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

        <div className="row__posters">
          {movies.map(movie => (
            <img 
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id} 
            src={`${imgBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={`${movie.original_title}`} 
            />
            ))};
        </div>

    </div>
  );
}

export default Row;