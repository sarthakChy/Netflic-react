import React, {useState, useEffect} from 'react';
import requests from "./requests";
import instance from "./axios";
import './Banner.css';

function Banner() {
  const [movie,setMovie] = useState([]);

  useEffect(() =>{
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1)]);

      return request
    }
    fetchData()
  }, [])

  console.log(movie)
  return (
    <header className="banner"
      style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
      }}
    >
      <div className="banner__contents">
        <h1 clasName="banner__title">
          {movie?.title||movie?.name||movie?.originnal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__fade"></div>
    </header>
  )
}

export default Banner
