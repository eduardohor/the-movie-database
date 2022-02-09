import React, { createContext, useEffect, useState } from "react";

export const MovieIdContext = createContext();

const SAVED_ID = "savedId";

export function MovieIdProvider(props) {
  const [movieId, setMovieId] = useState([]);

  useEffect(() => {
    let savedIdMovie = JSON.parse(localStorage.getItem(SAVED_ID));
    if (savedIdMovie) {
      setMovieId(savedIdMovie);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ID, JSON.stringify(movieId));
  }, [movieId]);

  return (
    <MovieIdContext.Provider value={[movieId, setMovieId]}>
      {props.children}
    </MovieIdContext.Provider>
  );
}
