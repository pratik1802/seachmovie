import { useContext } from "react";
import { AppContext } from "./Context";
import React from "react";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie,isLoading } = useContext(AppContext);
  if(isLoading){
    return <>
    <div className="movie-section">
      <div className="loading">Loading ...</div>
    </div>
    </>
  }
  

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((curr) => {
            const { imdbID, Title, Poster } = curr;
            const movieName=Title.substring(0,15)
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieName.length>=15 ? `${movieName}...`:movieName}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
