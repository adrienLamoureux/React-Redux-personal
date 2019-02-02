import * as React from "react";
import MovieList from "./components/movieList";
import "./styles.css";

export default function MovieApp() {
  return (
    <div className="movie-app">
      <h1>Movie List</h1>
      <MovieList/>
    </div>
  );
}
