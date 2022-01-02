import React, {useState, useEffect} from 'react';
import axios from '../config/axios';
import requests, {imgBaseUrl} from '../config/requests';
import "../components/Hero.css";

function Hero() {
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[1])
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, []);

    return (
        <header className='banner'>
            <div className="banner__bg" style={{
                    backgroundImage: `url(${imgBaseUrl}${movie.backdrop_path})`}}
                >

                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.original_title || movie?.original_name || movie?.title || movie?.name }</h1>
                    
                    <p className="banner__description">{movie?.overview}</p>

                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">More Info</button>
                    </div>
                </div>
                <div className="banner--fadeBottom" />
                
            </div>
        </header>
    );
}

export default Hero;