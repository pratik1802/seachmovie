import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const API_URL = "http://www.omdbapi.com/?apikey=7473fe58"; // Define API_URL here

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: data.Error,
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(API_URL + `&s=${query}`); // Update the URL here
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext, API_URL }; // Export API_URL here

