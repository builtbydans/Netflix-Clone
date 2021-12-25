import React, {useState, useEffect} from 'react';
import axios from '../config/axios';
import requests, {imgBaseUrl} from '../config/requests';
import "../components/Hero.css";

function Hero() {
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[0])
            console.log(request.data.results[0]);
            return request;
        }
        fetchData();
    }, []);

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "contain",
                backgroundImage: `url(${imgBaseUrl}${movie.backdrop_path})`,
                backgroundPosition: "center center",
            }}
            >
            <div className="banner__contents">
                <h1>{movie.original_title}</h1>

                <div className="banner__buttons">
                    <button className="banner__button"></button>
                    <button className="banner__button"></button>
                </div>
                <p>{movie.overview}</p>
            </div>
        </header>
    );
}

export default Hero;