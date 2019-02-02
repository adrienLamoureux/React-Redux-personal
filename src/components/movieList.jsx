import React from "react";
import Movie from "./movie";

import { connect } from "react-redux";
import { getMovies } from "../redux/selectors";

class MovieList extends React.Component {

  movies;

  constructor(props){
    super(props);
    //this.movies = props.movies || [{id: 1, content: "toto"}];
    this.movies = props.movies || this.state.movies;
    //this.state = { name: this.props.defaultName };
  }

  render(){
    return (
      <ul className="movie-list">
        {this.movies && this.movies.length
          ? this.movies.map((movie, index) => {
              return <Movie key={`movie-${movie.id}`} movie={movie} />;
            })
          : "No movies, yay!"}
      </ul>
    )};
}

export default connect(state => ({ movies: getMovies(state) }))(MovieList);