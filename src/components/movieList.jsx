import React from "react";
import Movie from "./movie";

import { connect } from "react-redux";
import { getMovies } from "../redux/selectors";

class MovieList extends React.Component {

  movies;

  constructor(props){
    super(props);
    this.movies = props.movies || this.state.movies;
  }

  render(){
    return (
      <div className="movie-list col-12">
        <div className="row">
          {this.movies && this.movies.length
            ? this.movies.map((movie, index) => {
                return <div className="movie-item col-xl-4 col-sm-6 col-12"><Movie key={`movie-${movie.id}`} movie={movie} /></div>;
              })
            : ""}
          </div>
      </div>
    )};
}

export default connect(state => ({ movies: getMovies(state) }))(MovieList);