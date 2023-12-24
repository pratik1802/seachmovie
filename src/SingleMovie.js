import React, { useEffect, useState } from "react";
import { useParams,NavLink } from "react-router-dom";
import { API_URL } from "./Context";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL + `&i=${id}`);
        const data = await res.json();
        console.log(data);
        if (data.Response === "True") {
          setIsLoading(false);
          setMovie(data);
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    let timeOut = setTimeout(() => {
      fetchMovie();
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [id]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  // const {}=movie

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
