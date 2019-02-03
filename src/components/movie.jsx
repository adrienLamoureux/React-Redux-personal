import React from "react";
import MovieDetails from "./movieDetails";

export default class Movie extends React.Component {

  movie;
  
  constructor(props){
    super(props);
    this.movie = props.movie;
  }

  render(){
    return (
      <li
      className="movie-item"
      onClick={() => {}}
    >
      {this.movie && this.movie.completed ? "👌" : "👋"}{" "}
      <div>
        {this.movie.title}
      </div>
      <div>
        {this.movie.releaseDate}
      </div>
      <div>
        {this.movie.voteAverage}
      </div>
      <MovieDetails key={`movie-${this.movie.id}`} movie={this.movie}/>
    </li>
    );
  }

}
