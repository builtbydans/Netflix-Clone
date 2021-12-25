import React from "react";
import "./App.css";
import Row from "./components/Row";
import Hero from "./components/Hero";
import requests from "./config/requests";

function App() {
  return (
    <div>

      <Hero />

      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchTrending}
      isLargeRow
       />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

 